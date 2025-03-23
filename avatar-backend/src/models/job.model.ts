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
