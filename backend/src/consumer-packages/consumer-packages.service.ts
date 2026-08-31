import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

// Whitelisted mapping: category slug -> actual table name
const CATEGORY_TABLE_MAP: Record<string, string> = {
  'ganapathi-homam': 'ganapathi_homam_items',
  'marriage': 'marriage_items',
  'grahapravesam': 'grahapravesam_items',
  'bhoomi-poojai': 'bhoomi_poojai_items',
  'punyahavachanam': 'punyahavachanam_items',
  'ruthu-punyahavachanam': 'ruthu_punyahavachanam_items',
  'ayush-homam': 'ayush_homam_items',
};

@Injectable()
export class ConsumerPackagesService {
  constructor(private readonly db: DatabaseService) {}

  private getTableName(category: string): string {
    const table = CATEGORY_TABLE_MAP[category];
    if (!table) {
      throw new BadRequestException(`Unknown category: ${category}`);
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

  async create(category: string, dto: { sno: number; name_english: string; name_tamil?: string; quantity?: string }) {
    const table = this.getTableName(category);
    const result = await this.db.query(
      `INSERT INTO ${table} (sno, name_english, name_tamil, quantity) VALUES ($1, $2, $3, $4) RETURNING *`,
      [dto.sno, dto.name_english, dto.name_tamil ?? null, dto.quantity ?? null],
    );
    return result.rows[0];
  }

  async update(category: string, id: number, dto: { sno?: number; name_english?: string; name_tamil?: string; quantity?: string }) {
    const table = this.getTableName(category);
    const existing = await this.db.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
    if (existing.rows.length === 0) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    const current = existing.rows[0];
    const result = await this.db.query(
      `UPDATE ${table} SET sno = $1, name_english = $2, name_tamil = $3, quantity = $4, updated_at = NOW() WHERE id = $5 RETURNING *`,
      [
        dto.sno ?? current.sno,
        dto.name_english ?? current.name_english,
        dto.name_tamil ?? current.name_tamil,
        dto.quantity ?? current.quantity,
        id,
      ],
    );
    return result.rows[0];
  }

  async remove(category: string, id: number) {
    const table = this.getTableName(category);
    const result = await this.db.query(`DELETE FROM ${table} WHERE id = $1 RETURNING *`, [id]);
    if (result.rows.length === 0) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    return { message: 'Deleted successfully' };
  }
}