import { Injectable, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

/**
 * Payment settings shown on Step 2 of the Order Now flow.
 *
 * Exactly one row is kept (id = 1). Everything the customer sees is stored
 * here so the admin can change it without a redeploy — nothing is hardcoded
 * in the frontend.
 *
 * NOTE: seeded with obvious placeholder values. Real bank credentials, UPI
 * IDs and QR codes must only ever be entered through the admin dashboard.
 */
const FIELDS = [
  'business_name',
  'account_holder',
  'account_number',
  'ifsc_code',
  'upi_id',
  'qr_filename',
  'payment_note',
] as const;

type Field = (typeof FIELDS)[number];

export type PaymentSettings = Record<Field, string | null> & { id: number };

const PLACEHOLDERS: Record<Field, string | null> = {
  business_name: "Iyer's Pooja Products",
  account_holder: 'Not configured yet',
  account_number: 'Not configured yet',
  ifsc_code: 'Not configured yet',
  upi_id: 'Not configured yet',
  qr_filename: null,
  payment_note: 'Please complete the payment using the QR code or UPI ID.',
};

@Injectable()
export class PaymentSettingsService implements OnModuleInit {
  private schemaReady = false;

  constructor(private readonly db: DatabaseService) {}

  async onModuleInit() {
    await this.ensureSchema();
  }

  private async ensureSchema() {
    if (this.schemaReady) return;

    try {
      await this.db.query(`
        CREATE TABLE IF NOT EXISTS payment_settings (
          id INTEGER PRIMARY KEY DEFAULT 1,
          business_name VARCHAR(255),
          account_holder VARCHAR(255),
          account_number VARCHAR(255),
          ifsc_code VARCHAR(255),
          upi_id VARCHAR(255),
          qr_filename VARCHAR(255),
          payment_note TEXT,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          CONSTRAINT payment_settings_single_row CHECK (id = 1)
        );
      `);

      for (const field of FIELDS) {
        const type = field === 'payment_note' ? 'TEXT' : 'VARCHAR(255)';
        await this.db.query(
          `ALTER TABLE payment_settings ADD COLUMN IF NOT EXISTS ${field} ${type};`,
        );
      }

      // Seed the single row with placeholders if it does not exist yet.
      await this.db.query(
        `INSERT INTO payment_settings
           (id, business_name, account_holder, account_number, ifsc_code, upi_id, qr_filename, payment_note)
         VALUES (1, $1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (id) DO NOTHING;`,
        [
          PLACEHOLDERS.business_name,
          PLACEHOLDERS.account_holder,
          PLACEHOLDERS.account_number,
          PLACEHOLDERS.ifsc_code,
          PLACEHOLDERS.upi_id,
          PLACEHOLDERS.qr_filename,
          PLACEHOLDERS.payment_note,
        ],
      );

      this.schemaReady = true;
    } catch (err) {
      console.error('Error ensuring payment_settings table/columns:', err);
    }
  }

  private clean(value: unknown): string | null | undefined {
    if (value === undefined) return undefined;
    if (value === null) return null;
    const text = String(value).trim();
    return text === '' ? null : text;
  }

  /**
   * Reads the stored row. Throws if the database is unreachable — callers that
   * write MUST use this, never `find()`, so a transient read failure can never
   * cause placeholder values to be written over real payment details.
   */
  private async readRow(): Promise<PaymentSettings> {
    const result = await this.db.query(
      `SELECT id, ${FIELDS.join(', ')} FROM payment_settings WHERE id = 1`,
    );
    if (!result.rows[0]) {
      throw new Error('payment_settings row is missing');
    }
    return result.rows[0] as PaymentSettings;
  }

  /**
   * Public — used by the Order Now modal.
   * Falls back to placeholders so a database hiccup cannot break checkout;
   * this fallback is read-only and is never used as the base for an update.
   */
  async find(): Promise<PaymentSettings> {
    await this.ensureSchema();

    try {
      return await this.readRow();
    } catch (err) {
      console.error('Error reading payment_settings:', err);
      return { id: 1, ...PLACEHOLDERS };
    }
  }

  /** Admin — partial update; fields that are not sent keep their value. */
  async update(data: Record<string, unknown>): Promise<PaymentSettings> {
    await this.ensureSchema();

    // Read through readRow(): if this throws, the request fails loudly instead
    // of silently overwriting saved details with placeholder text.
    const current = await this.readRow();

    const values = FIELDS.map((field) => {
      const incoming = this.clean(data?.[field]);
      return incoming === undefined ? current[field] : incoming;
    });

    const assignments = FIELDS.map(
      (field, index) => `${field} = $${index + 1}`,
    ).join(', ');

    const result = await this.db.query(
      `UPDATE payment_settings
       SET ${assignments}, updated_at = NOW()
       WHERE id = 1
       RETURNING id, ${FIELDS.join(', ')}`,
      values,
    );

    return result.rows[0] as PaymentSettings;
  }
}
