import { Injectable, BadRequestException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

const CATEGORY_TABLE_MAP: Record<string, string> = {
  'friday-poojas': 'friday_poojas_items',
  'amavasai-poojas': 'amavasai_poojas_items',
  'ganapathy-homam': 'ganapathy_homam_corp_items',
  'ayudha-pooja-vehicle-pooja': 'ayudha_pooja_vehicle_items',
  'aarthi-prasadam-distribution': 'aarthi_prasadam_items',
};

@Injectable()
export class CorporatePackagesService {
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
       SET sno = $1, name_english = $2, name_tamil = $3, quantity = $4, updated_at = NOW()
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