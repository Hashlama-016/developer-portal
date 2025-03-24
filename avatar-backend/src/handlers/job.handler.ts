import { Request, Response, NextFunction } from "express";
import jobService from "../services/job.service.js";
import { StatusCodes } from "http-status-codes";

export const getJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await jobService.getJobs();

    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await jobService.getJobById(req.params.id);

    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const runJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await jobService.runJob(req.params.id, req.body.options);

    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const getExecutions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await jobService.getExecutions();

    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export const getExecutionLogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await jobService.getExecutionLogs(req.params.id);
    res.status(StatusCodes.OK).json(results);
  } catch (error) {
    next(error);
  }
};

export default {
  getJobs,
  runJob,
  getExecutions,
  getExecutionLogs,
  getJobById,
};
