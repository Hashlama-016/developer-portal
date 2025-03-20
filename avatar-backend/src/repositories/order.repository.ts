import { sql, eq } from "drizzle-orm";
import { orders } from "../db/schema.js";
import db from "../db/db.js";
import { Order } from "../models/order.model.js";

export const getOrders = async () => {
  try {
    return await db.query.services.findMany({});
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (id: string) => {
  try {
    return await db
      .select()
      .from(orders)
      .where(eq(orders.id, sql.placeholder("id")));
  } catch (error) {
    throw error;
  }
};

export const insertOrder = async (order: Order) => {
  try {
    return await db.insert(orders).values(order);
  } catch (error) {
    throw error;
  }
};

export default { getOrders, getOrder, insertOrder };
