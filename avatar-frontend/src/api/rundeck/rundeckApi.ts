import api from "../axios";
import { Job, Execution, JobRunOptions } from "./types";

const RUNDECK_BASE_PATH = "/rundeck";

export const rundeckApi = {
  getJobs: async (): Promise<Job[]> => {
    const response = await api.get<Job[]>(`${RUNDECK_BASE_PATH}/jobs`);
    return response.data;
  },

  runJob: async (
    jobId: string,
    options: JobRunOptions
  ): Promise<string> => {
    const response = await api.post<string>(
      `${RUNDECK_BASE_PATH}/jobs/${jobId}/run`,
      { options }
    );
    return response.data;
  },

  getExecutions: async (): Promise<Execution[]> => {
    const response = await api.get<Execution[]>(
      `${RUNDECK_BASE_PATH}/executions`
    );
    return response.data;
  },
};
