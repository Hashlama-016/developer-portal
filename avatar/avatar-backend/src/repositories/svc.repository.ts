import { services } from "../db/schema.js";
import db from "../db/db.js";
import { sql, eq } from "drizzle-orm";
import { Service } from "@/models/svc.model.js";

export const getServices = async () => {
  try {
    return await db.query.services.findMany({});
  } catch (error) {
    throw error;
  }
};

export const getService = async (id: string) => {
  try {
    return await db
      .select()
      .from(services)
      .where(eq(services.id, sql.placeholder("id")));
  } catch (error) {
    throw error;
  }
};

export const insertService = async (service: Service) => {
  try {
    return await db.insert(services).values(service);
  } catch (error) {
    throw error;
  }
};

export default { getServices, getService, insertService };
