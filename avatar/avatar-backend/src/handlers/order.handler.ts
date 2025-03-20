import { Request, Response, NextFunction } from "express";
import orderService from "../services/order.service.js";
import { StatusCodes } from "http-status-codes";
import { Order } from "@/models/order.model.js";

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await orderService.getOrders();
    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await orderService.getOrder(req.params.id);
    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const addOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await orderService.addOrder(req.body as Order);
    res.status(StatusCodes.OK).send();
  } catch (error) {
    next(error);
  }
};

export default { getOrders, getOrder, addOrder };
