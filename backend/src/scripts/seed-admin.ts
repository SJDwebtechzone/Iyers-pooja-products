import { Client } from 'pg';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

async function seedAdmin() {
  // Use the SAME connection settings as DatabaseService (backend/.env),
  // otherwise the admin lands in a database the app never reads.
  const config = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };

  console.log(
    `Connecting to ${config.database} at ${config.host}:${config.port} as ${config.user}`,
  );

  const client = new Client(config);
  await client.connect();

  const email = process.env.ADMIN_EMAIL;
  const plainPassword = process.env.ADMIN_PASSWORD;

  if (!email || !plainPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in backend/.env');
  }

  // Show what's already there, so a mismatch is obvious rather than silent.
  const before = await client.query('SELECT id, email FROM admins ORDER BY id');
  console.log(`Existing admin rows: ${before.rowCount}`);
  for (const row of before.rows) {
    console.log(`  - id=${row.id} email=${JSON.stringify(row.email)}`);
  }

  const passwordHash = await bcrypt.hash(plainPassword, 10);

  // Check-then-write rather than ON CONFLICT: that needs a UNIQUE constraint
  // on admins.email, which this schema may not have.
  const existing = await client.query(
    'SELECT id FROM admins WHERE email = $1',
    [email],
  );

  if (existing.rowCount && existing.rowCount > 0) {
    await client.query('UPDATE admins SET password_hash = $1 WHERE email = $2', [
      passwordHash,
      email,
    ]);
    console.log(`Updated password for existing admin: ${email}`);
  } else {
    await client.query(
      'INSERT INTO admins (email, password_hash) VALUES ($1, $2)',
      [email, passwordHash],
    );
    console.log(`Inserted new admin: ${email}`);
  }

  // Prove the app's own login query will find it.
  const verify = await client.query(
    'SELECT email, password_hash FROM admins WHERE email = $1',
    [email],
  );
  const ok =
    verify.rowCount === 1 &&
    (await bcrypt.compare(plainPassword, verify.rows[0].password_hash));

  console.log(
    ok
      ? `VERIFIED: login query finds ${email} and the password matches.`
      : `WARNING: verification failed (rows=${verify.rowCount}). Login will still be rejected.`,
  );

  await client.end();
  if (!ok) process.exit(1);
}

seedAdmin().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
