import { Request, Response, NextFunction } from "express";
import logger from "../logger.js";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(req.url);

  next()
};

export default loggerMiddleware;
