import jobRepository from "../repositories/job.repository.js";
import { Execution, Job } from "../models/job.model.js";

export const getJobs = (): Promise<Job[]> => jobRepository.getAllJobs();

export const runJob = (
  id: string,
  options: Record<string, string>
): Promise<string> => jobRepository.runJob(id, options);

export const getExecutions = (): Promise<Execution[]> =>
  jobRepository.getAllExecutions();

export default {
  getJobs,
  runJob,
  getExecutions,
};
