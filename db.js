const Pool = require("pg").Pool;
require("dotenv").config();

// Prefer discrete settings so Kubernetes Secrets and ConfigMaps can configure
// the connection without constructing a URL containing an unescaped password.
const pool = new Pool(
  process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : {
        user: process.env.PG_USER || process.env.POSTGRES_USER,
        password: process.env.PG_PASSWORD || process.env.POSTGRES_PASSWORD,
        host: process.env.PG_HOST || "localhost",
        port: Number(process.env.PG_PORT || 5432),
        database: process.env.PG_DATABASE || process.env.POSTGRES_DB,
      }
);

module.exports = pool;
