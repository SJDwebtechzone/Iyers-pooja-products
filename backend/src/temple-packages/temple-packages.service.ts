import { Injectable, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

/**
 * Quantity columns for the Package Details table.
 *
 * The table is grouped by temple type (Mid Size Temple / Divyadesam Temple)
 * and each group holds a Daily / Weekly / Monthly quantity.
 *
 * All values are free-form text ("50 grms", "1/2 kg", "3 pockets", ...) so the
 * admin can enter whatever unit the item uses. NULL / empty means "not
 * configured" and the website renders an em dash for it.
 */
const QUANTITY_COLUMNS = [
  'mid_daily',
  'mid_weekly',
  'mid_monthly',
  'divya_daily',
  'divya_weekly',
  'divya_monthly',
] as const;

type QuantityColumn = (typeof QUANTITY_COLUMNS)[number];

const SELECT_COLUMNS = `id, sno, english, tamil, ${QUANTITY_COLUMNS.join(', ')}`;

@Injectable()
export class TemplePackagesService implements OnModuleInit {
  private schemaReady = false;

  constructor(private readonly db: DatabaseService) {}

  async onModuleInit() {
    await this.ensureColumns();
  }

  /**
   * Self-migrating schema (same pattern as package-prices):
   *  - creates the table if it does not exist yet
   *  - adds the six quantity columns if they are missing
   *  - one-time copies any legacy `quantity` value into `mid_daily`
   */
  private async ensureColumns() {
    if (this.schemaReady) return;

    try {
      await this.db.query(`
        CREATE TABLE IF NOT EXISTS temple_packages (
          id SERIAL PRIMARY KEY,
          sno INTEGER,
          english VARCHAR(255),
          tamil VARCHAR(255)
        );
      `);

      for (const column of QUANTITY_COLUMNS) {
        await this.db.query(
          `ALTER TABLE temple_packages ADD COLUMN IF NOT EXISTS ${column} VARCHAR(255);`,
        );
      }

      // Legacy single-quantity column: carry its values over to Mid Size / Daily
      // so nothing looks blank after the upgrade. Runs at most once per row.
      const legacy = await this.db.query(
        `SELECT column_name FROM information_schema.columns
         WHERE table_name = 'temple_packages' AND column_name = 'quantity'`,
      );

      if (legacy.rows.length > 0) {
        await this.db.query(`
          UPDATE temple_packages
          SET mid_daily = quantity
          WHERE (mid_daily IS NULL OR mid_daily = '')
            AND quantity IS NOT NULL
            AND quantity <> '';
        `);

        // The legacy column is no longer written to, so make sure a leftover
        // NOT NULL constraint cannot block new inserts.
        await this.db.query(
          `ALTER TABLE temple_packages ALTER COLUMN quantity DROP NOT NULL;`,
        );
      }

      this.schemaReady = true;
    } catch (err) {
      console.error('Error ensuring temple_packages table/columns:', err);
    }
  }

  /** Normalises an incoming value to a trimmed string or null. */
  private clean(value: unknown): string | null {
    if (value === undefined || value === null) return null;
    const text = String(value).trim();
    return text === '' ? null : text;
  }

  private quantityValues(data: Record<string, unknown>): (string | null)[] {
    return QUANTITY_COLUMNS.map((column: QuantityColumn) =>
      this.clean(data?.[column]),
    );
  }

  async findAll() {
    await this.ensureColumns();
    const result = await this.db.query(
      `SELECT ${SELECT_COLUMNS} FROM temple_packages ORDER BY sno ASC, id ASC`,
    );
    return result.rows;
  }

  async create(data: any) {
    await this.ensureColumns();

    const values = [
      Number(data?.sno) || 0,
      this.clean(data?.english),
      this.clean(data?.tamil),
      ...this.quantityValues(data ?? {}),
    ];

    const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');

    const result = await this.db.query(
      `INSERT INTO temple_packages (sno, english, tamil, ${QUANTITY_COLUMNS.join(', ')})
       VALUES (${placeholders})
       RETURNING ${SELECT_COLUMNS}`,
      values,
    );
    return result.rows[0];
  }

  async update(id: string, data: any) {
    await this.ensureColumns();

    const values = [
      Number(data?.sno) || 0,
      this.clean(data?.english),
      this.clean(data?.tamil),
      ...this.quantityValues(data ?? {}),
    ];

    const columns = ['sno', 'english', 'tamil', ...QUANTITY_COLUMNS];
    const assignments = columns
      .map((column, i) => `${column} = $${i + 1}`)
      .join(', ');

    const result = await this.db.query(
      `UPDATE temple_packages
       SET ${assignments}
       WHERE id = $${values.length + 1}
       RETURNING ${SELECT_COLUMNS}`,
      [...values, id],
    );
    return result.rows[0];
  }

  async remove(id: string) {
    await this.ensureColumns();
    await this.db.query(`DELETE FROM temple_packages WHERE id = $1`, [id]);
    return { success: true };
  }

  async removeAll() {
    await this.ensureColumns();
    await this.db.query(`DELETE FROM temple_packages`);
    return { success: true, message: 'All items deleted successfully' };
  }
}