export type Job = {
  id: string;
  name: string;
  description?: string;
  options?: JobOptions[];
};

export type JobOptions = {
  name: string;
  label?: string;
  description?: string;
  defaultValue?: string;
  required?: boolean;
  multivalued?: boolean;
  values?: string[];
  delimiter?: string;
  isDate?: boolean;
  secure?: boolean;
};

export type JobRunOptions = Record<string, string>;

export type ProjectJob = Omit<Job, "options"> & {
  project: string;
  group?: string;
};

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
