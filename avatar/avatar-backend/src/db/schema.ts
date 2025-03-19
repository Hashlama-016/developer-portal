import { OrderMetadata } from "@/models/order.model.js";
import { ServiceData } from "@/models/svc.model.js";
import { pgSchema, json, uuid, timestamp, pgTable } from "drizzle-orm/pg-core";

export const services = pgTable("services", {
  id: uuid().primaryKey().defaultRandom(),
  data: json().$type<ServiceData>().notNull(),
});

export const orders = pgTable("orders", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid(),
  serviceId: uuid()
    .notNull()
    .references(() => services.id),
  metadata: json().$type<OrderMetadata>(),
  createdAt: timestamp({ mode: "string", withTimezone: true })
    .notNull()
    .defaultNow(),
});
