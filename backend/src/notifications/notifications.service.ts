import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

/**
 * Persistent admin notifications.
 *
 * Records live in the database, not in browser storage, so the unread count is
 * identical after a refresh, on another device, or after signing out and back
 * in. Every count returned here is a live SQL aggregate — nothing is cached or
 * hardcoded.
 */
export interface CreateNotificationDto {
  type: string;
  title: string;
  message: string;
  /** Optional secondary line, e.g. "Preferred Date: 15 Sep 2026". */
  detail?: string | null;
  /** Dashboard route the notification links to, e.g. /dashboard/orders/12 */
  link?: string | null;
  /** What the notification is about, so it can be auto-read later. */
  entityType?: string | null;
  entityId?: number | null;
}

const SELECT_COLUMNS = `id, type, title, message, detail, link, entity_type,
  entity_id, read_at, created_at`;

/** Don't re-run migrations more than once every 30s after a failure. */
const SCHEMA_RETRY_MS = 30000;

@Injectable()
export class NotificationsService implements OnModuleInit {
  private schemaReady = false;
  private lastSchemaAttempt = 0;

  constructor(private readonly db: DatabaseService) {}

  async onModuleInit() {
    await this.ensureSchema();
  }

  private async ensureSchema() {
    if (this.schemaReady) return;

    // Bound the retry rate: a failing statement must not make every request
    // re-run the migrations and take exclusive locks.
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
        CREATE TABLE IF NOT EXISTS notifications (
          id SERIAL PRIMARY KEY,
          type VARCHAR(50) NOT NULL,
          title VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          detail VARCHAR(255),
          link VARCHAR(255),
          entity_type VARCHAR(50),
          entity_id INTEGER,
          read_at TIMESTAMP WITH TIME ZONE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `);

      await this.db.query(
        `ALTER TABLE notifications ADD COLUMN IF NOT EXISTS detail VARCHAR(255);`,
      );

      // Unread lookups and the entity join both run on every dashboard poll.
      await this.db.query(
        `CREATE INDEX IF NOT EXISTS notifications_unread_idx
         ON notifications (read_at, created_at DESC);`,
      );
      await this.db.query(
        `CREATE INDEX IF NOT EXISTS notifications_entity_idx
         ON notifications (entity_type, entity_id);`,
      );

      this.schemaReady = true;
    } catch (err) {
      console.error('Error ensuring notifications table:', err);
    }
  }

  /**
   * Lets another module guarantee the notifications table exists before it
   * references it (e.g. the orders backfill below).
   */
  async ensureReady() {
    await this.ensureSchema();
  }

  /** Called by other modules (e.g. orders) when something needs the admin's attention. */
  async create(dto: CreateNotificationDto) {
    await this.ensureSchema();

    const result = await this.db.query(
      `INSERT INTO notifications (type, title, message, detail, link, entity_type, entity_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING ${SELECT_COLUMNS}`,
      [
        dto.type,
        dto.title,
        dto.message,
        dto.detail ?? null,
        dto.link ?? null,
        dto.entityType ?? null,
        dto.entityId ?? null,
      ],
    );
    return result.rows[0];
  }

  /** Latest notifications for the bell dropdown, newest first. */
  async findRecent(limit = 20) {
    await this.ensureSchema();

    const safeLimit = Math.min(Math.max(Number(limit) || 20, 1), 100);
    const result = await this.db.query(
      `SELECT ${SELECT_COLUMNS} FROM notifications
       ORDER BY created_at DESC, id DESC
       LIMIT $1`,
      [safeLimit],
    );
    return result.rows;
  }

  /** Live unread count, plus a per-type breakdown for the individual badges. */
  async summary() {
    await this.ensureSchema();

    const result = await this.db.query(
      `SELECT type, COUNT(*)::int AS count
       FROM notifications
       WHERE read_at IS NULL
       GROUP BY type`,
    );

    const byType: Record<string, number> = {};
    let unread = 0;
    for (const row of result.rows) {
      byType[row.type] = row.count;
      unread += row.count;
    }

    return { unread, byType };
  }

  /** Everything the dashboard shell needs, in one round trip. */
  async feed(limit = 20) {
    const [items, summary] = await Promise.all([
      this.findRecent(limit),
      this.summary(),
    ]);
    return { items, ...summary };
  }

  async markRead(id: number) {
    if (!Number.isInteger(id) || id < 1) {
      throw new NotFoundException(`Notification with that id was not found`);
    }
    await this.ensureSchema();

    const result = await this.db.query(
      `UPDATE notifications SET read_at = NOW()
       WHERE id = $1 AND read_at IS NULL
       RETURNING ${SELECT_COLUMNS}`,
      [id],
    );

    if (result.rows.length === 0) {
      // Already read, or gone — confirm it exists so a bad id still 404s.
      const existing = await this.db.query(
        `SELECT ${SELECT_COLUMNS} FROM notifications WHERE id = $1`,
        [id],
      );
      if (existing.rows.length === 0) {
        throw new NotFoundException(`Notification with id ${id} not found`);
      }
      return existing.rows[0];
    }

    return result.rows[0];
  }

  /**
   * Marks every notification about one entity as read — used when the admin
   * opens or processes the order the notification points at, so the badge
   * clears without a separate click.
   */
  async markReadForEntity(entityType: string, entityId: number) {
    await this.ensureSchema();

    const result = await this.db.query(
      `UPDATE notifications SET read_at = NOW()
       WHERE entity_type = $1 AND entity_id = $2 AND read_at IS NULL`,
      [entityType, entityId],
    );
    return { updated: result.rowCount ?? 0 };
  }

  /**
   * Marks every unread notification read, optionally only those of one type.
   * Used when the admin opens the list page that a notification points at.
   */
  async markAllRead(type?: string) {
    await this.ensureSchema();

    const cleanType = type?.trim();

    const result = cleanType
      ? await this.db.query(
          `UPDATE notifications SET read_at = NOW()
           WHERE read_at IS NULL AND type = $1`,
          [cleanType],
        )
      : await this.db.query(
          `UPDATE notifications SET read_at = NOW() WHERE read_at IS NULL`,
        );

    return { updated: result.rowCount ?? 0 };
  }

  /** Removes notifications about an entity that no longer exists. */
  async removeForEntity(entityType: string, entityId: number) {
    await this.ensureSchema();
    await this.db.query(
      `DELETE FROM notifications WHERE entity_type = $1 AND entity_id = $2`,
      [entityType, entityId],
    );
  }
}
