export interface Job {
  id: string;
  name: string;
  project: string;
  group?: string;
  description?: string;
  uuid?: string;
  options?: Record<string, any>;
}

export interface Execution {
  id: string;
  jobId: string;
  jobName: string;
  project: string;
  status: string;
  startTime?: string;
  endTime?: string;
  user?: string;
  logs?: string[] | null;
}

export interface GetAllJobsResponse {
  jobs: Job[];
}

export interface RunJobRequest {
  jobId: string;
  options: Record<string, string>;
}

export interface RunJobResponse {
  executionId: string;
  logs: string[];
}

export interface GetAllExecutionsResponse {
  executions: Execution[];
}
