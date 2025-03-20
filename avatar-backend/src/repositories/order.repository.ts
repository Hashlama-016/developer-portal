import { sql, eq } from "drizzle-orm";
import { orders } from "../db/schema.js";
import db from "../db/db.js";
import { CreateOrderDto } from "../models/order.model.js";

export const getOrders = async () => {
  try {
    return await db.query.orders.findMany({});
  } catch (error) {
    throw error;
  }
};

export const getOrder = async (id: string) => {
  try {
    return await db.query.orders.findFirst({
      where: eq(orders.id, id),
    });
  } catch (error) {
    throw error;
  }
};

export const insertOrder = async (order: CreateOrderDto): Promise<string> => {
  try {
    const results = await db
      .insert(orders)
      .values(order)
      .returning({ id: orders.id });
    return results[0].id;
  } catch (error) {
    throw error;
  }
};

export default { getOrders, getOrder, insertOrder };
