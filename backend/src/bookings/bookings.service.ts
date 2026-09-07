import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { NotificationsService } from '../notifications/notifications.service';

const BOOKING_ENTITY = 'booking';

@Injectable()
export class BookingsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly notifications: NotificationsService,
  ) {}

  async findAll() {
    const result = await this.db.query(
      `SELECT * FROM bookings ORDER BY created_at DESC`,
    );
    return result.rows;
  }

  async create(dto: {
    name: string;
    mobile: string;
    email: string;
    address: string;
    pooja?: string;
  }) {
    const result = await this.db.query(
      `INSERT INTO bookings (name, mobile, email, address, pooja) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [dto.name, dto.mobile, dto.email, dto.address, dto.pooja ?? null],
    );

    const booking = result.rows[0];

    // Persist the notification so the badge is identical after a refresh,
    // a re-login, or on another device. Never blocks the request.
    try {
      await this.notifications.create({
        type: 'booking',
        title: 'New Iyer Request',
        message: dto.pooja
          ? `${dto.name} is looking for an Iyer for ${dto.pooja}.`
          : `${dto.name} is looking for an experienced Iyer.`,
        detail: dto.mobile ? `Mobile: ${dto.mobile}` : null,
        link: '/dashboard/bookings',
        entityType: BOOKING_ENTITY,
        entityId: booking.id,
      });
    } catch (err) {
      console.error(
        `Booking ${booking.id} saved but notification failed:`,
        err,
      );
    }

    return booking;
  }

  async remove(id: number) {
    const result = await this.db.query(
      `DELETE FROM bookings WHERE id = $1 RETURNING *`,
      [id],
    );
    if (result.rows.length === 0) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }

    try {
      await this.notifications.removeForEntity(BOOKING_ENTITY, id);
    } catch (err) {
      console.error(`Could not remove notifications for booking ${id}:`, err);
    }

    return { message: 'Deleted successfully' };
  }
}
