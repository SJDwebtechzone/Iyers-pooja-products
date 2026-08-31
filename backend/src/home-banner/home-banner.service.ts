import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HomeBannerService {
  constructor(private readonly db: DatabaseService) {}

  async find() {
    const result = await this.db.query(`SELECT * FROM home_banner ORDER BY id ASC LIMIT 1`);
    return result.rows[0];
  }

  async update(data: any) {
    const { heading_line1, heading_line2, description, image_filename } = data;

    // Fetch existing row first, so we don't overwrite fields that weren't sent
    const existing = await this.find();

    const result = await this.db.query(
      `UPDATE home_banner
       SET heading_line1 = $1, heading_line2 = $2, description = $3, image_filename = $4
       WHERE id = $5 RETURNING *`,
      [
        heading_line1 ?? existing.heading_line1,
        heading_line2 ?? existing.heading_line2,
        description ?? existing.description,
        image_filename ?? existing.image_filename,
        existing.id,
      ],
    );
    return result.rows[0];
  }
}