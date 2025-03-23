import jobRepository from "../repositories/job.repository.js";
import { Execution, ExecutionLogEntry, Job } from "../models/job.model.js";

export const getJobs = (): Promise<Job[]> => jobRepository.getAllJobs();

export const runJob = (
  id: string,
  options: Record<string, string>
): Promise<string> => jobRepository.runJob(id, options);

export const getExecutions = (): Promise<Execution[]> =>
  jobRepository.getAllExecutions();

export const getExecutionLogs = (id: string): Promise<ExecutionLogEntry[]> =>
  jobRepository.getExecutionLogs(id);

export default {
  getJobs,
  runJob,
  getExecutionLogs,
  getExecutions,
};
