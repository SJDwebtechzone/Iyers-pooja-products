import { Client } from 'pg';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

async function seedAdmin() {
  const client = new Client({
    host: 'localhost',
    port: 2653,
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'iyers_pooja_products',
  });

  await client.connect();

  const email = process.env.ADMIN_EMAIL;
  const plainPassword = process.env.ADMIN_PASSWORD;
  const passwordHash = await bcrypt.hash(plainPassword, 10);

  await client.query(
    'INSERT INTO admins (email, password_hash) VALUES ($1, $2)',
    [email, passwordHash]
  );

  console.log('Admin inserted:', email);
  await client.end();
}

seedAdmin();