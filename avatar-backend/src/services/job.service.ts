import jobRepository from "../repositories/job.repository.js";
import {
  GetAllJobsResponse,
  RunJobRequest,
  RunJobResponse,
  GetAllExecutionsResponse,
} from "../models/job.model.js";

/**
 * שליפת כל ה-Jobs מכל הפרויקטים
 */
export const fetchAllJobs = async (): Promise<GetAllJobsResponse> => ({
  jobs: await jobRepository.fetchAllJobs(),
});

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
  const logs = await jobRepository.fetchExecutionLogs(executionId);
  return { executionId, logs };
};

/**
 * שליפת כל ההרצות האחרונות מכל ה-Jobs
 */
export const fetchAllExecutions =
  async (): Promise<GetAllExecutionsResponse> => ({
    executions: await jobRepository.fetchAllExecutions(),
  });

export default {
  fetchAllJobs,
  runJobAndGetLogs,
  fetchAllExecutions,
};
