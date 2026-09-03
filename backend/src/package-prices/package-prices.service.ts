import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PackagePricesService {
  constructor(private readonly db: DatabaseService) {}

  async getPrice(categoryKey: string) {
    const result = await this.db.query(
      'SELECT category_key, price FROM package_prices WHERE category_key = $1',
      [categoryKey],
    );
    return result.rows[0] || { category_key: categoryKey, price: null };
  }

  async getAllPrices() {
    const result = await this.db.query(
      'SELECT category_key, price FROM package_prices',
    );
    return result.rows;
  }

  async setPrice(categoryKey: string, price: string) {
    const result = await this.db.query(
      `INSERT INTO package_prices (category_key, price, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (category_key)
       DO UPDATE SET price = $2, updated_at = NOW()
       RETURNING category_key, price`,
      [categoryKey, price],
    );
    return result.rows[0];
  }
}