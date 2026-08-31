import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TemplePackagesService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    const result = await this.db.query(
      `SELECT * FROM temple_packages ORDER BY sno ASC`,
    );
    return result.rows;
  }

  async create(data: any) {
    const { sno, english, tamil, quantity } = data;
    const result = await this.db.query(
      `INSERT INTO temple_packages (sno, english, tamil, quantity)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [sno, english, tamil, quantity],
    );
    return result.rows[0];
  }

  async update(id: string, data: any) {
    const { sno, english, tamil, quantity } = data;
    const result = await this.db.query(
      `UPDATE temple_packages
       SET sno = $1, english = $2, tamil = $3, quantity = $4
       WHERE id = $5 RETURNING *`,
      [sno, english, tamil, quantity, id],
    );
    return result.rows[0];
  }

  async remove(id: string) {
    await this.db.query(`DELETE FROM temple_packages WHERE id = $1`, [id]);
    return { success: true };
  }
}