import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class HomePackageImagesService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    const result = await this.db.query(`SELECT * FROM home_package_images`);
    return result.rows;
  }

  async updateImage(id: string, imageFilename: string) {
    const result = await this.db.query(
      `UPDATE home_package_images SET image_filename = $1 WHERE id = $2 RETURNING *`,
      [imageFilename, id],
    );
    return result.rows[0];
  }
}