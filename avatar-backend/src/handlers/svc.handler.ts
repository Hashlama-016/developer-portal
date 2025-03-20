import { Request, Response, NextFunction } from "express";
import serviceService from "../services/svc.service.js";
import { StatusCodes } from "http-status-codes";
import { CreateServiceDto } from "../models/svc.model.js";

export const getServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await serviceService.getServices();
    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const getService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await serviceService.getService(req.params.id);
    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const addService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await serviceService.addService(
      req.body as CreateServiceDto
    );

    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export default { getServices, getService, addService };
