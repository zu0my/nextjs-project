import { Pool, type PoolConfig } from "pg";

const poolConfig: PoolConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST || "localhost",
  port: parseInt(process.env.PG_PORT || "5432", 10),
  database: process.env.PG_DATABASE,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

declare global {
  var postgresPool: Pool | undefined;
}

let pool: Pool;

if (process.env.NODE_ENV === "production") {
  pool = new Pool(poolConfig);
} else {
  if (!global.postgresPool) {
    global.postgresPool = new Pool(poolConfig);
  }
  pool = global.postgresPool;
}

export default pool;
