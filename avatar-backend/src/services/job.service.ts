import jobRepository from "../repositories/job.repository.js";
import {
  RunJobRequest,
  RunJobResponse,
  GetAllExecutionsResponse,
  Job,
} from "../models/job.model.js";

/**
 * שליפת כל ה-Jobs מכל הפרויקטים
 */
export const fetchAllJobs = (): Promise<Job[]> => jobRepository.getAllJobs();

/**
 * הרצת Job וקבלת הלוגים
 */
export const runJobAndGetLogs = async (
  request: RunJobRequest
): Promise<RunJobResponse> => {
  const executionId = await jobRepository.runJob(
    request.jobId,
    request.options
  );
  await new Promise((resolve) => setTimeout(resolve, 2000)); // המתנה ללוגים
  const logs = await jobRepository.getExecutionLogs(executionId);
  return { executionId, logs };
};

/**
 * שליפת כל ההרצות האחרונות מכל ה-Jobs
 */
export const fetchAllExecutions =
  async (): Promise<GetAllExecutionsResponse> => ({
    executions: await jobRepository.getAllExecutions(),
  });

export default {
  fetchAllJobs,
  runJobAndGetLogs,
  fetchAllExecutions,
};
