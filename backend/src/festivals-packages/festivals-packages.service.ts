import { Injectable, BadRequestException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

const CATEGORY_TABLE_MAP: Record<string, string> = {
  'new-year-festival': 'new_year_festival',
  'pongal': 'pongal',
  'maatu-pongal': 'maatu_pongal',
  'telugu-new-year': 'telugu_new_year',
  'gokulaastami': 'gokulaastami',
  'vinayagarchaturthi': 'vinayagar_chaturthi',
  'ayudha-pooja': 'ayudha_pooja',
  'vijayadasami': 'vijayadasami',
  'deepavali': 'deepavali',
};

@Injectable()
export class FestivalsPackagesService {
  constructor(private readonly db: DatabaseService) {}

  private getTableName(category: string): string {
    const table = CATEGORY_TABLE_MAP[category];
    if (!table) {
      throw new BadRequestException(`Invalid category: ${category}`);
    }
    return table;
  }

  async findAll(category: string) {
    const table = this.getTableName(category);
    const result = await this.db.query(
      `SELECT * FROM ${table} ORDER BY sno ASC`,
    );
    return result.rows;
  }

  async create(category: string, data: any) {
    const table = this.getTableName(category);
    const { sno, name_english, name_tamil, quantity } = data;
    const result = await this.db.query(
      `INSERT INTO ${table} (sno, name_english, name_tamil, quantity)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [sno, name_english, name_tamil, quantity],
    );
    return result.rows[0];
  }

  async update(category: string, id: string, data: any) {
    const table = this.getTableName(category);
    const { sno, name_english, name_tamil, quantity } = data;
    const result = await this.db.query(
      `UPDATE ${table}
       SET sno = $1, name_english = $2, name_tamil = $3, quantity = $4
       WHERE id = $5 RETURNING *`,
      [sno, name_english, name_tamil, quantity, id],
    );
    return result.rows[0];
  }

  async remove(category: string, id: string) {
    const table = this.getTableName(category);
    await this.db.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
    return { success: true };
  }
}