import { Request, Response, NextFunction } from "express";
import serviceService from "../services/svc.service.js";

export const getServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await serviceService.getServices();
    res.json(results);
  } catch (error) {
    next(error);
  }
};

export default { getServices };
