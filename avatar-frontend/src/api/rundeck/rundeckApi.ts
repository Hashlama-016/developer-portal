import api from "../axios";
import { Job, Execution } from "./types";

const RUNDECK_BASE_URL = "/rundeck";

export const rundeckApi = {
  /** Fetch all jobs */
  getAllJobs: async (): Promise<Job[]> => {
    const response = await api.get<Job[]>(`${RUNDECK_BASE_URL}/jobs`);
    return response.data;
  },

  /** Run a job */
  runJob: async (
    jobId: string,
    options: Record<string, string>
  ): Promise<string> => {
    const response = await api.post<{ executionId: string }>(
      `${RUNDECK_BASE_URL}/run`,
      { jobId, options }
    );
    return response.data.executionId;
  },

  /** Fetch all executions */
  getAllExecutions: async (): Promise<Execution[]> => {
    const response = await api.get<Execution[]>(
      `${RUNDECK_BASE_URL}/executions`
    );
    return response.data;
  },
};
