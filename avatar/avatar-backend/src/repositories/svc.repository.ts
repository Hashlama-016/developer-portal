import { services } from "../db/schema.js";
import db from "../db/db.js";

export const getServices = async () => {
  try {
    return await db.select().from(services).execute();
  } catch (error) {
    throw error;
  }
};

export default { getServices };
