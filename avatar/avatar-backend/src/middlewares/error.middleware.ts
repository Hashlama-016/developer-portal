import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "../logger.js";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ errors: [{ message: "Something went wrong" }] });
};

export default errorMiddleware;
