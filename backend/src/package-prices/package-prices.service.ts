import { Injectable, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PackagePricesService implements OnModuleInit {
  constructor(private readonly db: DatabaseService) {}

  async onModuleInit() {
    await this.ensureColumns();
  }

  private async ensureColumns() {
    try {
      await this.db.query(`
        CREATE TABLE IF NOT EXISTS package_prices (
          category_key VARCHAR(255) PRIMARY KEY,
          price VARCHAR(255),
          availability_weekly BOOLEAN DEFAULT false,
          availability_monthly BOOLEAN DEFAULT false,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `);
      await this.db.query(`
        ALTER TABLE package_prices 
        ADD COLUMN IF NOT EXISTS availability_weekly BOOLEAN DEFAULT false;
      `);
      await this.db.query(`
        ALTER TABLE package_prices 
        ADD COLUMN IF NOT EXISTS availability_monthly BOOLEAN DEFAULT false;
      `);
    } catch (err) {
      console.error('Error ensuring package_prices table/columns:', err);
    }
  }

  async getPrice(categoryKey: string) {
    try {
      await this.ensureColumns();
      const result = await this.db.query(
        'SELECT category_key, price, availability_weekly, availability_monthly FROM package_prices WHERE category_key = $1',
        [categoryKey],
      );
      const row = result.rows[0];
      return {
        category_key: categoryKey,
        price: row?.price ?? null,
        availability_weekly: row?.availability_weekly ?? false,
        availability_monthly: row?.availability_monthly ?? false,
      };
    } catch (err) {
      console.error(`Error in getPrice for ${categoryKey}:`, err);
      return {
        category_key: categoryKey,
        price: null,
        availability_weekly: false,
        availability_monthly: false,
      };
    }
  }

  async getAllPrices() {
    await this.ensureColumns();
    const result = await this.db.query(
      'SELECT category_key, price, availability_weekly, availability_monthly FROM package_prices',
    );
    return result.rows;
  }

  async setPrice(
    categoryKey: string,
    price?: string | null,
    availability_weekly?: boolean,
    availability_monthly?: boolean,
  ) {
    await this.ensureColumns();

    const existing = await this.db.query(
      'SELECT category_key, price, availability_weekly, availability_monthly FROM package_prices WHERE category_key = $1',
      [categoryKey],
    );

    let targetPrice: string | null | undefined = price;
    let targetWeekly = availability_weekly;
    let targetMonthly = availability_monthly;

    if (existing.rows.length > 0) {
      const cur = existing.rows[0];
      if (targetPrice === undefined) targetPrice = cur.price;
      if (targetWeekly === undefined) targetWeekly = cur.availability_weekly ?? false;
      if (targetMonthly === undefined) targetMonthly = cur.availability_monthly ?? false;

      const result = await this.db.query(
        `UPDATE package_prices
         SET price = $1, availability_weekly = $2, availability_monthly = $3, updated_at = NOW()
         WHERE category_key = $4
         RETURNING category_key, price, availability_weekly, availability_monthly`,
        [targetPrice, targetWeekly, targetMonthly, categoryKey],
      );
      return result.rows[0];
    } else {
      if (targetPrice === undefined) targetPrice = null;
      if (targetWeekly === undefined) targetWeekly = false;
      if (targetMonthly === undefined) targetMonthly = false;

      const result = await this.db.query(
        `INSERT INTO package_prices (category_key, price, availability_weekly, availability_monthly, updated_at)
         VALUES ($1, $2, $3, $4, NOW())
         RETURNING category_key, price, availability_weekly, availability_monthly`,
        [categoryKey, targetPrice, targetWeekly, targetMonthly],
      );
      return result.rows[0];
    }
  }
}