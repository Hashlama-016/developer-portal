export type Job = {
  id: string;
  name: string;
  project: string;
  group?: string;
  description?: string;
  options?: JobOptions;
};

export type JobOptions = {
  name: string;
  defaultValue: string;
};

export type JobRunOptions = Record<string, string>;

export type ProjectJob = Omit<Job, "options">;

export type Execution = {
  id: string;
  jobId: string;
  jobName: string;
  project: string;
  status: string;
  startTime?: string;
  endTime?: string;
  user?: string;
};

export type ExecutionLogEntry = {
  time: string;
  level: string;
  log: string;
  user: string;
};
