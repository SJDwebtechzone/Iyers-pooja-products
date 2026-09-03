import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class IyerRegistrationsService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    const result = await this.db.query(
      `SELECT * FROM iyer_registrations ORDER BY created_at DESC`,
    );
    return result.rows;
  }

  async create(dto: { name: string; phone: string; email: string; location: string }) {
    const result = await this.db.query(
      `INSERT INTO iyer_registrations (name, phone, email, location) VALUES ($1, $2, $3, $4) RETURNING *`,
      [dto.name, dto.phone, dto.email, dto.location],
    );
    return result.rows[0];
  }

  async remove(id: number) {
    const result = await this.db.query(`DELETE FROM iyer_registrations WHERE id = $1 RETURNING *`, [id]);
    if (result.rows.length === 0) {
      throw new NotFoundException(`Registration with id ${id} not found`);
    }
    return { message: 'Deleted successfully' };
  }
}