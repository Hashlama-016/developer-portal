import api from "../axios";
import {
  Job,
  Execution,
  JobRunOptions,
  ProjectJob,
  ExecutionLogEntry,
} from "./types";

const RUNDECK_BASE_PATH = "/rundeck";

export const rundeckApi = {
  getJobs: async (): Promise<ProjectJob[]> => {
    const response = await api.get<ProjectJob[]>(`${RUNDECK_BASE_PATH}/jobs`);
    return response.data;
  },
  getJobById: async (jobId: string): Promise<Job> => {
    const response = await api.get<Job>(`${RUNDECK_BASE_PATH}/jobs/${jobId}`);
    return response.data;
  },

  runJob: async (jobId: string, options: JobRunOptions): Promise<string> => {
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
  getExecutionLogs: async (
    executionId: string
  ): Promise<ExecutionLogEntry[]> => {
    const response = await api.get<ExecutionLogEntry[]>(
      `${RUNDECK_BASE_PATH}/executions/${executionId}/output`
    );
    return response.data;
  },
};
