import axios from "axios";
import { Job, Execution } from "../models/job.model.js";

const RUNDECK_BASE_URL = process.env.RUNDECK_BASE_URL;
const AUTH_TOKEN = process.env.RUNDECK_AUTH_TOKEN;

const headers = {
  "X-Rundeck-Auth-Token": AUTH_TOKEN,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const fetchAllJobs = async (): Promise<Job[]> => {
  console.log("aaa");
  const response = await axios.get(`${RUNDECK_BASE_URL}/projects`, { headers });
  return response.data;
};

export const fetchJobsByProject = async (
  projectName: string
): Promise<Job[]> => {
  const response = await axios.get(
    `${RUNDECK_BASE_URL}/project/${projectName}/jobs`,
    { headers }
  );
  return response.data;
};

export const fetchJobById = async (jobId: string): Promise<Job> => {
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

export const fetchExecutionLogs = async (
  executionId: string
): Promise<string[]> => {
  const response = await axios.get(
    `${RUNDECK_BASE_URL}/execution/${executionId}/output`,
    { headers }
  );
  return response.data.entries.map((entry: any) => entry.log);
};

export const fetchAllExecutions = async (
  max: number = 50,
  offset: number = 0
): Promise<Execution[]> => {
  const response = await axios.get(
    `${RUNDECK_BASE_URL}/executions?max=${max}&offset=${offset}`,
    { headers }
  );
  return response.data.executions || [];
};

export const fetchExecutionsByJobId = async (
  jobId: string,
  max: number = 50
): Promise<Execution[]> => {
  const response = await axios.get(
    `${RUNDECK_BASE_URL}/job/${jobId}/executions?max=${max}`,
    { headers }
  );
  return response.data.executions || [];
};

export default {
  fetchAllJobs,
  fetchJobsByProject,
  fetchJobById,
  runJob,
  fetchExecutionLogs,
  fetchAllExecutions,
  fetchExecutionsByJobId,
};
