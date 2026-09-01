import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class BookingsService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    const result = await this.db.query(
      `SELECT * FROM bookings ORDER BY created_at DESC`,
    );
    return result.rows;
  }

  async create(dto: { name: string; mobile: string; email: string; address: string; pooja?: string }) {
    const result = await this.db.query(
      `INSERT INTO bookings (name, mobile, email, address, pooja) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [dto.name, dto.mobile, dto.email, dto.address, dto.pooja ?? null],
    );
    return result.rows[0];
  }

  async remove(id: number) {
    const result = await this.db.query(`DELETE FROM bookings WHERE id = $1 RETURNING *`, [id]);
    if (result.rows.length === 0) {
      throw new NotFoundException(`Booking with id ${id} not found`);
    }
    return { message: 'Deleted successfully' };
  }
}