import axios from "axios";
import { Job, Execution } from "../models/job.model.js";

const RUNDECK_BASE_URL = process.env.RUNDECK_BASE_URL;
const AUTH_TOKEN = process.env.RUNDECK_AUTH_TOKEN;

const headers = {
  "X-Rundeck-Auth-Token": AUTH_TOKEN,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getAllProjects = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${RUNDECK_BASE_URL}/projects`, {
      headers,
    });
    return response.data.map((p: { name: string }) => p.name);
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const getJobsByProject = async (project: string): Promise<Job[]> => {
  try {
    const response = await axios.get(
      `${RUNDECK_BASE_URL}/project/${project}/jobs`,
      { headers }
    );
    return response.data.map((job: any) => ({
      id: job.id,
      name: job.name,
      project,
      group: job.group || "",
      description: job.description || "",
      uuid: job.uuid || "",
      options: job.options || {},
    }));
  } catch (error) {
    console.error(`Error fetching jobs for project ${project}:`, error);
    return [];
  }
};

export const getAllJobs = async (): Promise<Job[]> => {
  const projects = await getAllProjects();
  const jobPromises = projects.map(getJobsByProject);
  const allJobs = await Promise.all(jobPromises);
  return allJobs.flat();
};

export const getJobById = async (jobId: string): Promise<Job> => {
  const response = await axios.get(`${RUNDECK_BASE_URL}/job/${jobId}`, {
    headers,
  });
  return response.data;
};

export const runJob = async (
  jobId: string,
  options: Record<string, string>
): Promise<string> => {
  const response = await axios.post(
    `${RUNDECK_BASE_URL}/job/${jobId}/run`,
    options,
    { headers }
  );
  return response.data.id;
};

export const getExecutionLogs = async (
  executionId: string
): Promise<string[]> => {
  try {
    const response = await axios.get(
      `${RUNDECK_BASE_URL}/execution/${executionId}/output`,
      { headers }
    );
    return response.data.entries
      ? response.data.entries.map((entry: any) => entry.log)
      : [];
  } catch (error) {
    console.error(`Error fetching logs for execution ${executionId}:`, error);
    return [];
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
    return response.data.executions.map((execution: any) => ({
      id: execution.id,
      jobId,
      jobName: execution.job?.name || "",
      project: execution.job?.project || "",
      status: execution.status,
      startTime: execution.dateStarted?.date || "",
      endTime: execution.dateEnded?.date || "",
      user: execution.user || "",
    }));
  } catch (error) {
    console.error(`Error fetching executions for job ${jobId}:`, error);
    return [];
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
