import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// You can specify any property from the postgres-js connection options
const queryClient = postgres({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  db: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
const db = drizzle({ client: queryClient });

export default db;
