import { Injectable, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

/**
 * Business contact details used by the floating WhatsApp / Call buttons.
 *
 * Exactly one row is kept (id = 1). Every value the website shows comes from
 * here, so the admin can change the numbers without a code change or redeploy.
 *
 * Seeded empty on purpose: an unset number hides its button rather than
 * dialling a placeholder.
 */
const FIELDS = ['whatsapp_number', 'phone_number', 'whatsapp_message'] as const;

type Field = (typeof FIELDS)[number];

export type ContactSettings = Record<Field, string | null> & { id: number };

const DEFAULTS: Record<Field, string | null> = {
  whatsapp_number: null,
  phone_number: null,
  whatsapp_message:
    'Hello, I would like to know more about your pooja packages.',
};

/** Don't re-run migrations more than once every 30s after a failure. */
const SCHEMA_RETRY_MS = 30000;

@Injectable()
export class ContactSettingsService implements OnModuleInit {
  private schemaReady = false;
  private lastSchemaAttempt = 0;

  constructor(private readonly db: DatabaseService) {}

  async onModuleInit() {
    await this.ensureSchema();
  }

  private async ensureSchema() {
    if (this.schemaReady) return;

    const now = Date.now();
    if (
      this.lastSchemaAttempt &&
      now - this.lastSchemaAttempt < SCHEMA_RETRY_MS
    ) {
      return;
    }
    this.lastSchemaAttempt = now;

    try {
      await this.db.query(`
        CREATE TABLE IF NOT EXISTS contact_settings (
          id INTEGER PRIMARY KEY DEFAULT 1,
          whatsapp_number VARCHAR(32),
          phone_number VARCHAR(32),
          whatsapp_message TEXT,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          CONSTRAINT contact_settings_single_row CHECK (id = 1)
        );
      `);

      for (const field of FIELDS) {
        const type = field === 'whatsapp_message' ? 'TEXT' : 'VARCHAR(32)';
        await this.db.query(
          `ALTER TABLE contact_settings ADD COLUMN IF NOT EXISTS ${field} ${type};`,
        );
      }

      await this.db.query(
        `INSERT INTO contact_settings (id, whatsapp_number, phone_number, whatsapp_message)
         VALUES (1, $1, $2, $3)
         ON CONFLICT (id) DO NOTHING;`,
        [
          DEFAULTS.whatsapp_number,
          DEFAULTS.phone_number,
          DEFAULTS.whatsapp_message,
        ],
      );

      this.schemaReady = true;
    } catch (err) {
      console.error('Error ensuring contact_settings table/columns:', err);
    }
  }

  private clean(value: unknown): string | null | undefined {
    if (value === undefined) return undefined;
    if (value === null) return null;
    const text = String(value).trim();
    return text === '' ? null : text;
  }

  /**
   * Reads the stored row, throwing if the database is unreachable. Callers
   * that write use this so a transient read failure can never overwrite saved
   * numbers with defaults.
   */
  private async readRow(): Promise<ContactSettings> {
    const result = await this.db.query(
      `SELECT id, ${FIELDS.join(', ')} FROM contact_settings WHERE id = 1`,
    );
    if (!result.rows[0]) {
      throw new Error('contact_settings row is missing');
    }
    return result.rows[0] as ContactSettings;
  }

  /** Public — read by the floating contact buttons on every page. */
  async find(): Promise<ContactSettings> {
    await this.ensureSchema();

    try {
      return await this.readRow();
    } catch (err) {
      console.error('Error reading contact_settings:', err);
      return { id: 1, ...DEFAULTS };
    }
  }

  /** Admin — partial update; fields that are not sent keep their value. */
  async update(data: Record<string, unknown>): Promise<ContactSettings> {
    await this.ensureSchema();

    const current = await this.readRow();

    const values = FIELDS.map((field) => {
      const incoming = this.clean(data?.[field]);
      return incoming === undefined ? current[field] : incoming;
    });

    const assignments = FIELDS.map(
      (field, index) => `${field} = $${index + 1}`,
    ).join(', ');

    const result = await this.db.query(
      `UPDATE contact_settings
       SET ${assignments}, updated_at = NOW()
       WHERE id = 1
       RETURNING id, ${FIELDS.join(', ')}`,
      values,
    );

    return result.rows[0] as ContactSettings;
  }
}
