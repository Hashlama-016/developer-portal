import { Request, Response, NextFunction } from "express";
import jobService from "../services/job.service.js";
import {
  GetAllJobsResponse,
  JobResponse,
  RunJobRequest,
  RunJobResponse,
  GetAllExecutionsResponse,
} from "../models/job.model.js";

export const getAllJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobs: GetAllJobsResponse = await jobService.fetchAllJobs();
    res.json(jobs);
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
    const requestBody: RunJobRequest = req.body;
    const logs: RunJobResponse = await jobService.runJobAndGetLogs(requestBody);
    res.json(logs);
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
    const executions: GetAllExecutionsResponse =
      await jobService.fetchAllExecutions();
    res.json(executions);
  } catch (error) {
    next(error);
  }
};

export default {
  getAllJobs,
  runJob,
  getAllExecutions,
};
