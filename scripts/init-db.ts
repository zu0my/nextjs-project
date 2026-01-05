import dotenv from "dotenv";

dotenv.config({ path: [".env.local", ".env"] });

const { default: pool } = await import("@/lib/db");

const initDb = async () => {
  try {
    const createUserTableQuery = `
    create table if not exists users (
      id uuid primary key default uuid_generate_v4(),
      username varchar(50) not null,
      email varchar(255) unique not null,
      password_hash varchar(255) not null,
      created_at timestamptz not null default current_timestamp,
      updated_at timestamptz not null default current_timestamp
    );`;

    pool.query(createUserTableQuery);
  } finally {
    await pool.end(); // 关闭脚本连接
  }
};

initDb();
