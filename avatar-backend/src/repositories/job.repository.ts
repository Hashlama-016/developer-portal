import axios from "axios";
import {
  Job,
  Execution,
  ProjectJob,
  ExecutionLogEntry,
  JobOptions,
  Project,
} from "../models/job.model.js";

const RUNDECK_BASE_URL = process.env.RUNDECK_BASE_URL;
const AUTH_TOKEN = process.env.RUNDECK_AUTH_TOKEN;

const headers = {
  "X-Rundeck-Auth-Token": AUTH_TOKEN,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`${RUNDECK_BASE_URL}/projects`, {
      headers,
    });
    return response.data.map(
      (project: any): Project => ({
        name: project.name,
        label: project.label,
      })
    );
  } catch (error) {
    throw error;
  }
};

export const getJobsByProject = async (
  project: Project
): Promise<ProjectJob[]> => {
  try {
    const response = await axios.get(
      `${RUNDECK_BASE_URL}/project/${project.name}/jobs`,
      { headers }
    );
    return response.data.map(
      (job: any): ProjectJob => ({
        id: job.id,
        name: job.name,
        project: project,
        group: job.group,
        description: job.description,
      })
    );
  } catch (error) {
    throw error;
  }
};

export const getAllJobs = async (): Promise<ProjectJob[]> => {
  const projects = await getAllProjects();
  const allJobs = await Promise.all(projects.map(getJobsByProject));

  return allJobs.flat();
};

export const getJobById = async (jobId: string): Promise<Job> => {
  try {
    const response = await axios.get(`${RUNDECK_BASE_URL}/job/${jobId}`, {
      headers,
    });
    const data = response.data[0];

    return {
      id: jobId,
      name: data.name,
      description: data.description,
      options: data.options?.map(
        (option: any): JobOptions => ({
          name: option.name,
          label: option.label,
          defaultValue: option.value,
          values: option.values,
          delimiter: option.delimiter,
          description: option.description,
          isDate: option.isDate,
          multivalued: option.multivalued,
          required: option.required,
          secure: option.secure,
        })
      ),
    };
  } catch (error) {
    throw error;
  }
};

export const runJob = async (
  jobId: string,
  options: Record<string, string>
): Promise<string> => {
  try {
    const response = await axios.post(
      `${RUNDECK_BASE_URL}/job/${jobId}/run`,
      { options },
      { headers }
    );
    return response.data.id as string;
  } catch (error) {
    throw error;
  }
};

export const getExecutionLogs = async (
  executionId: string
): Promise<ExecutionLogEntry[]> => {
  try {
    const response = await axios.get(
      `${RUNDECK_BASE_URL}/execution/${executionId}/output`,
      { headers }
    );
    return (
      response.data.entries?.map(
        (logEntry: any): ExecutionLogEntry => ({
          time: logEntry.time,
          level: logEntry.level,
          log: logEntry.log,
          user: logEntry.user,
        })
      ) || []
    );
  } catch (error) {
    throw error;
  }
};

export const getExecutionsByJobId = async (
  jobId: string
): Promise<Execution[]> => {
  try {
    const response = await axios.get(
      `${RUNDECK_BASE_URL}/job/${jobId}/executions`,
      { headers }
    );
    return response.data.executions.map(
      (execution: any): Execution => ({
        id: execution.id,
        jobId,
        jobName: execution.job.name,
        project: execution.project,
        status: execution.status,
        startTime: execution["date-started"]?.date,
        endTime: execution["date-ended"]?.date,
        user: execution.user,
      })
    );
  } catch (error) {
    throw error;
  }
};

export const getAllExecutions = async (): Promise<Execution[]> => {
  const jobs = await getAllJobs();
  const executionPromises = jobs.map((job) => getExecutionsByJobId(job.id));
  const allExecutions = await Promise.all(executionPromises);
  return allExecutions.flat();
};

export default {
  getAllJobs,
  getJobById,
  runJob,
  getExecutionLogs,
  getAllExecutions,
  getExecutionsByJobId,
};
