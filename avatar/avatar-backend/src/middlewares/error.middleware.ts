import logger from "../logger.js";
import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};

export default errorMiddleware;
