import jobRepository from "../repositories/job.repository.js";
import {
  GetAllJobsResponse,
  JobResponse,
  RunJobRequest,
  RunJobResponse,
  GetAllExecutionsResponse,
} from "../models/job.model.js";

// **שליפת כל ה-Jobs**
export const fetchAllJobs = async (): Promise<GetAllJobsResponse> => {
  return await jobRepository.fetchAllJobs();
};

// **הרצת Job וקבלת הלוגים**
export const runJobAndGetLogs = async (
  request: RunJobRequest
): Promise<RunJobResponse> => {
  const executionId = await jobRepository.runJob(
    request.jobId,
    request.options
  );
  await new Promise((resolve) => setTimeout(resolve, 2000)); // המתנה לפני שליפת הלוגים
  const logs = await jobRepository.fetchExecutionLogs(executionId);
  return { executionId, logs };
};

// **שליפת כל ההרצות האחרונות**
export const fetchAllExecutions =
  async (): Promise<GetAllExecutionsResponse> => {
    return await jobRepository.fetchAllExecutions();
  };

export default {
  fetchAllJobs,
  runJobAndGetLogs,
  fetchAllExecutions,
};
