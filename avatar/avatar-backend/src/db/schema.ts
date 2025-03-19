import { pgSchema, json, uuid, timestamp } from "drizzle-orm/pg-core";

export const schema = pgSchema("services");

export const services = schema.table("services", {
  id: uuid().primaryKey().defaultRandom(),
  data: json(),
});

export const orders = schema.table("orders", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid(),
  serviceId: uuid()
    .notNull()
    .references(() => services.id),
  metadata: json(),
  createdAt: timestamp({ mode: "string", withTimezone: true })
    .notNull()
    .defaultNow(),
});
