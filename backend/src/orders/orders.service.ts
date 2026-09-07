import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { MailService } from '../mail/mail.service';
import { NotificationsService } from '../notifications/notifications.service';

/**
 * A submitted order starts as `new` (unprocessed). The admin marks it
 * `processed` after reviewing it and verifying payment, or `cancelled`.
 * The dashboard's Orders badge is a live count of `new` rows.
 */
export type OrderStatus = 'new' | 'processed' | 'cancelled';

const STATUSES: OrderStatus[] = ['new', 'processed', 'cancelled'];

/** Entity key used to tie notifications back to the order they announce. */
const ORDER_ENTITY = 'order';

export interface CreateOrderDto {
  name?: string;
  mobile?: string;
  email?: string;
  address?: string;
  package_name?: string;
  preferred_date?: string;
}

/**
 * `preferred_date` is a DATE column. node-postgres parses it into a JS Date at
 * *local* midnight, which Nest then serializes as UTC — shifting the day for
 * any server not on UTC. Returning it as text keeps the exact day the customer
 * chose, all the way to the screen.
 */
const SELECT_COLUMNS = `id, name, mobile, email, address, package_name,
  TO_CHAR(preferred_date, 'YYYY-MM-DD') AS preferred_date, status, created_at`;

/** Don't re-run migrations more than once every 30s after a failure. */
const SCHEMA_RETRY_MS = 30000;

@Injectable()
export class OrdersService implements OnModuleInit {
  private schemaReady = false;
  private lastSchemaAttempt = 0;

  constructor(
    private readonly db: DatabaseService,
    private readonly mail: MailService,
    private readonly notifications: NotificationsService,
  ) {}

  async onModuleInit() {
    await this.ensureSchema();
  }

  private async ensureSchema() {
    if (this.schemaReady) return;

    // A failed migration used to leave schemaReady false forever, so every
    // request re-ran CREATE/ALTER/UPDATE — taking exclusive locks on each poll.
    const now = Date.now();
    if (
      this.lastSchemaAttempt &&
      now - this.lastSchemaAttempt < SCHEMA_RETRY_MS
    ) {
      return;
    }
    this.lastSchemaAttempt = now;

    try {
      await this.db.query(`
        CREATE TABLE IF NOT EXISTS orders (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          mobile VARCHAR(50) NOT NULL,
          email VARCHAR(255) NOT NULL,
          address TEXT NOT NULL,
          package_name VARCHAR(255),
          preferred_date DATE,
          status VARCHAR(32) NOT NULL DEFAULT 'new',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `);

      await this.db.query(
        `ALTER TABLE orders ADD COLUMN IF NOT EXISTS package_name VARCHAR(255);`,
      );
      await this.db.query(
        `ALTER TABLE orders ADD COLUMN IF NOT EXISTS preferred_date DATE;`,
      );
      await this.db.query(
        `ALTER TABLE orders ADD COLUMN IF NOT EXISTS status VARCHAR(32) NOT NULL DEFAULT 'new';`,
      );

      // Statuses were pending/confirmed before notifications existed.
      await this.db.query(
        `ALTER TABLE orders ALTER COLUMN status SET DEFAULT 'new';`,
      );
      await this.db.query(
        `UPDATE orders SET status = 'new' WHERE status = 'pending';`,
      );
      await this.db.query(
        `UPDATE orders SET status = 'processed' WHERE status = 'confirmed';`,
      );

      // The sidebar badge counts unprocessed orders on every poll.
      await this.db.query(
        `CREATE INDEX IF NOT EXISTS orders_status_idx ON orders (status);`,
      );

      await this.backfillNotifications();

      this.schemaReady = true;
    } catch (err) {
      console.error('Error ensuring orders table/columns:', err);
    }
  }

  /**
   * Trims, checks presence, and enforces the column's length so an over-long
   * value returns a clear 400 instead of a Postgres 22001 error surfacing as a 500.
   */
  private required(value: unknown, label: string, maxLength: number): string {
    const text =
      value === undefined || value === null ? '' : String(value).trim();
    if (!text) {
      throw new BadRequestException(`${label} is required`);
    }
    if (text.length > maxLength) {
      throw new BadRequestException(
        `${label} must be ${maxLength} characters or fewer`,
      );
    }
    return text;
  }

  /** `2026-09-15` -> `15 Sep 2026`, parsed as a local date so it never shifts. */
  private formatPreferredDate(value: string): string {
    const parsed = new Date(`${value}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  /**
   * Public — called when the customer clicks "Submit Order".
   * Saves the order, then sends the confirmation email. A mail failure is
   * logged but never fails the order: the order is already saved.
   */
  async create(dto: CreateOrderDto) {
    await this.ensureSchema();

    const name = this.required(dto?.name, 'Customer name', 255);
    const mobile = this.required(dto?.mobile, 'Mobile number', 50);
    const email = this.required(dto?.email, 'Email address', 255);
    const address = this.required(dto?.address, 'Address', 2000);
    const preferredDate = this.required(
      dto?.preferred_date,
      'Preferred date',
      32,
    );

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new BadRequestException('Please enter a valid email address');
    }

    const digits = mobile.replace(/\D/g, '');
    if (digits.length < 10) {
      throw new BadRequestException('Please enter a valid mobile number');
    }

    // The frontend sends a plain yyyy-mm-dd date; keep it as text so no
    // timezone conversion can shift it a day either way.
    if (!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
      throw new BadRequestException('Please choose a valid preferred date');
    }
    if (Number.isNaN(Date.parse(`${preferredDate}T00:00:00`))) {
      throw new BadRequestException('Please choose a valid preferred date');
    }

    const rawPackage = dto?.package_name ? String(dto.package_name).trim() : '';
    if (rawPackage.length > 255) {
      throw new BadRequestException(
        'Package name must be 255 characters or fewer',
      );
    }
    const packageName = rawPackage || null;

    const result = await this.db.query(
      `INSERT INTO orders (name, mobile, email, address, package_name, preferred_date, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'new')
       RETURNING ${SELECT_COLUMNS}`,
      [name, mobile, email, address, packageName, preferredDate],
    );

    const order = result.rows[0];

    // Raise the dashboard notification immediately, before the (slower) email.
    // A notification failure must not lose the order, so it is logged only.
    try {
      await this.notifications.create({
        type: 'order',
        title: 'New Order Received',
        message: packageName
          ? `${name} has placed a ${packageName} package order.`
          : `${name} has placed an order.`,
        detail: `Preferred Date: ${this.formatPreferredDate(preferredDate)}`,
        link: `/dashboard/orders/${order.id}`,
        entityType: ORDER_ENTITY,
        entityId: order.id,
      });
    } catch (err) {
      console.error(`Order ${order.id} saved but notification failed:`, err);
    }

    try {
      await this.mail.sendOrderConfirmationEmail({
        toEmail: email,
        name,
        orderId: order.id,
        packageName,
        preferredDate,
        address,
        mobile,
      });
    } catch (err) {
      console.error(
        `Order ${order.id} saved but confirmation email failed:`,
        err,
      );
    }

    return order;
  }

  /** Admin — list all orders, newest first. */
  async findAll() {
    await this.ensureSchema();
    const result = await this.db.query(
      `SELECT ${SELECT_COLUMNS} FROM orders ORDER BY created_at DESC, id DESC`,
    );
    return result.rows;
  }

  /**
   * Orders placed before the notification feature existed have no notification
   * record, so they would never appear in the bell. This creates one for every
   * still-unprocessed order that is missing one, preserving the order's own
   * created_at so the feed stays in chronological order.
   *
   * Idempotent: the NOT EXISTS guard means re-running it is a no-op, and it
   * deliberately skips orders already processed or cancelled.
   */
  private async backfillNotifications() {
    try {
      await this.notifications.ensureReady();

      const result = await this.db.query(
        `INSERT INTO notifications
           (type, title, message, detail, link, entity_type, entity_id, created_at)
         SELECT
           'order',
           'New Order Received',
           CASE
             WHEN o.package_name IS NOT NULL AND o.package_name <> ''
               THEN o.name || ' has placed a ' || o.package_name || ' package order.'
             ELSE o.name || ' has placed an order.'
           END,
           CASE
             WHEN o.preferred_date IS NOT NULL
               THEN 'Preferred Date: ' || TO_CHAR(o.preferred_date, 'FMDD Mon YYYY')
             ELSE NULL
           END,
           '/dashboard/orders/' || o.id,
           'order',
           o.id,
           o.created_at
         FROM orders o
         WHERE o.status = 'new'
           AND NOT EXISTS (
             SELECT 1 FROM notifications n
             WHERE n.entity_type = 'order' AND n.entity_id = o.id
           )`,
      );

      const created = result.rowCount ?? 0;
      if (created > 0) {
        console.log(
          `Backfilled ${created} order notification(s) for existing unprocessed orders.`,
        );
      }
    } catch (err) {
      console.error('Could not backfill order notifications:', err);
    }
  }

  /** Rejects NaN before it reaches Postgres and becomes a 500. */
  private validId(id: number, label = 'Order'): number {
    if (!Number.isInteger(id) || id < 1) {
      throw new NotFoundException(`${label} with that id was not found`);
    }
    return id;
  }

  /** Admin — a single order for the detail page. */
  async findOne(id: number) {
    this.validId(id);
    await this.ensureSchema();

    const result = await this.db.query(
      `SELECT ${SELECT_COLUMNS} FROM orders WHERE id = $1`,
      [id],
    );
    if (result.rows.length === 0) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    // Opening the order counts as seeing it: clear its notification so the
    // bell and sidebar badges stay honest without an extra click.
    try {
      await this.notifications.markReadForEntity(ORDER_ENTITY, id);
    } catch (err) {
      console.error(`Could not mark notifications read for order ${id}:`, err);
    }

    return result.rows[0];
  }

  /**
   * Live counts for the sidebar badge. Computed in SQL on every call so the
   * number is correct after a refresh, a re-login, or on another device.
   */
  async summary() {
    await this.ensureSchema();

    const result = await this.db.query(
      `SELECT
         COUNT(*)::int AS total,
         COUNT(*) FILTER (WHERE status = 'new')::int AS new_count,
         COUNT(*) FILTER (WHERE status = 'processed')::int AS processed_count,
         COUNT(*) FILTER (WHERE status = 'cancelled')::int AS cancelled_count
       FROM orders`,
    );

    const row = result.rows[0] ?? {};
    return {
      total: row.total ?? 0,
      new_count: row.new_count ?? 0,
      processed_count: row.processed_count ?? 0,
      cancelled_count: row.cancelled_count ?? 0,
    };
  }

  /** Admin — mark an order new / processed / cancelled. */
  async updateStatus(id: number, status: string) {
    this.validId(id);
    await this.ensureSchema();

    const next = String(status ?? '')
      .trim()
      .toLowerCase() as OrderStatus;
    if (!STATUSES.includes(next)) {
      throw new BadRequestException(
        `Status must be one of: ${STATUSES.join(', ')}`,
      );
    }

    const result = await this.db.query(
      `UPDATE orders SET status = $1 WHERE id = $2 RETURNING ${SELECT_COLUMNS}`,
      [next, id],
    );

    if (result.rows.length === 0) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    // Once an order is processed or cancelled it is no longer outstanding.
    if (next !== 'new') {
      try {
        await this.notifications.markReadForEntity(ORDER_ENTITY, id);
      } catch (err) {
        console.error(
          `Could not mark notifications read for order ${id}:`,
          err,
        );
      }
    }

    return result.rows[0];
  }

  /** Admin — delete an order. */
  async remove(id: number) {
    this.validId(id);
    await this.ensureSchema();
    const result = await this.db.query(
      `DELETE FROM orders WHERE id = $1 RETURNING id`,
      [id],
    );
    if (result.rows.length === 0) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }

    // Don't leave a notification pointing at an order that no longer exists.
    try {
      await this.notifications.removeForEntity(ORDER_ENTITY, id);
    } catch (err) {
      console.error(`Could not remove notifications for order ${id}:`, err);
    }

    return { message: 'Deleted successfully' };
  }
}
