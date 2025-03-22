import { Request, Response, NextFunction } from "express";
import jobService from "../services/job.service.js";

export const getAllJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await jobService.fetchAllJobs());
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
    res.json(await jobService.runJobAndGetLogs(req.body));
  } catch (error) {
    next(error);
  }
};

export const getAllExecutions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await jobService.fetchAllExecutions());
  } catch (error) {
    next(error);
  }
};

export default {
  getAllJobs,
  runJob,
  getAllExecutions,
};
