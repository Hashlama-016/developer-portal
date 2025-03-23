import { Request, Response, NextFunction } from "express";
import jobService from "../services/job.service.js";

export const getJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await jobService.getJobs());
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
    res.json(await jobService.runJob(req.params.id, req.body.options));
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
    res.json(await jobService.getExecutions());
  } catch (error) {
    next(error);
  }
};

export default {
  getJobs,
  runJob,
  getExecutions,
};
