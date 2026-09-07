import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { NotificationsService } from '../notifications/notifications.service';

const REGISTRATION_ENTITY = 'registration';

@Injectable()
export class IyerRegistrationsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly notifications: NotificationsService,
  ) {}

  async findAll() {
    const result = await this.db.query(
      `SELECT * FROM iyer_registrations ORDER BY created_at DESC`,
    );
    return result.rows;
  }

  async create(dto: {
    name: string;
    phone: string;
    email: string;
    location: string;
  }) {
    const result = await this.db.query(
      `INSERT INTO iyer_registrations (name, phone, email, location) VALUES ($1, $2, $3, $4) RETURNING *`,
      [dto.name, dto.phone, dto.email, dto.location],
    );

    const registration = result.rows[0];

    try {
      await this.notifications.create({
        type: 'registration',
        title: 'New Iyer Registration',
        message: `${dto.name} has registered as an Iyer.`,
        detail: dto.location ? `Location: ${dto.location}` : null,
        link: '/dashboard/iyer-registrations',
        entityType: REGISTRATION_ENTITY,
        entityId: registration.id,
      });
    } catch (err) {
      console.error(
        `Registration ${registration.id} saved but notification failed:`,
        err,
      );
    }

    return registration;
  }

  async remove(id: number) {
    const result = await this.db.query(
      `DELETE FROM iyer_registrations WHERE id = $1 RETURNING *`,
      [id],
    );
    if (result.rows.length === 0) {
      throw new NotFoundException(`Registration with id ${id} not found`);
    }

    try {
      await this.notifications.removeForEntity(REGISTRATION_ENTITY, id);
    } catch (err) {
      console.error(
        `Could not remove notifications for registration ${id}:`,
        err,
      );
    }

    return { message: 'Deleted successfully' };
  }
}
