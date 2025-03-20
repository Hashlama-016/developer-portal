import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema.js";

// You can specify any property from the postgres-js connection options
const db = drizzle({
  schema: schema,
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});

export default db;
