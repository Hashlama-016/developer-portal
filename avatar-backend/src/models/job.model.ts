export type Job = {
  id: string;
  name: string;
  project: string;
  description?: string;
  options: { [key: string]: unknown };
  createdAt: string;
};

export type Execution = {
  id: string;
  jobId: string;
  status: "running" | "failed" | "succeeded";
  startTime: string;
  endTime?: string;
  duration?: string;
  logs?: string[];
};

export type CreateJobRequest = {
  name: string;
  project: string;
  description?: string;
  options: { [key: string]: unknown };
};

export type JobResponse = Job;
export type GetAllJobsResponse = Job[];

export type RunJobRequest = {
  jobId: string;
  options: Record<string, string>;
};

export type RunJobResponse = {
  executionId: string;
  logs: string[];
};

export type GetAllExecutionsResponse = Execution[];
export type GetExecutionsByJobIdResponse = Execution[];
