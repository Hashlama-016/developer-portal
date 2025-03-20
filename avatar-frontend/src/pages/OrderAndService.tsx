import React, { useEffect, useState } from "react";
import { rundeckApi } from "../api/rundeck/rundeckApi";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Button,
  Grid,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

interface RundeckJob {
  id: string;
  name: string;
  description?: string;
  project: string;
  href: string;
  permalink: string;
  group?: string;
  averageDuration?: number;
}

interface RundeckExecution {
  id: number;
  status: string;
  project: string;
  job: {
    id: string;
    name: string;
    group?: string;
  };
  dateStarted: string;
  dateEnded?: string;
  duration?: number;
}

const OrderAndService: React.FC = () => {
  const [jobs, setJobs] = useState<RundeckJob[]>([]);
  const [executions, setExecutions] = useState<RundeckExecution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [jobsData, executionsData] = await Promise.all([
        rundeckApi.getAllJobs(),
        rundeckApi.getAllExecutions(),
      ]);
      setJobs(jobsData);
      setExecutions(executionsData);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRunJob = async (jobId: string) => {
    try {
      const execution = await rundeckApi.runJob(jobId);
      setExecutions((prev) => [execution, ...prev]);
    } catch (err) {
      console.error("Error running job:", err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "succeeded":
        return "success";
      case "failed":
        return "error";
      case "running":
        return "primary";
      default:
        return "default";
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4">Order and Service Management</Typography>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Select Post</InputLabel>
          <Select
            value={selectedPost}
            label="Select Post"
            onChange={(e) => setSelectedPost(e.target.value)}
            sx={{ height: 40 }}
          >
            <MenuItem value="post1">Post 1</MenuItem>
            <MenuItem value="post2">Post 2</MenuItem>
            <MenuItem value="post3">Post 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Services Section (Jobs) */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Available Services
        </Typography>
        <Grid container spacing={3}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {job.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Project: {job.project}
                  </Typography>
                  {job.group && (
                    <Typography color="textSecondary" gutterBottom>
                      Group: {job.group}
                    </Typography>
                  )}
                  {job.description && (
                    <Typography variant="body2" color="textSecondary">
                      {job.description}
                    </Typography>
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleRunJob(job.id)}
                  >
                    Run Service
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Orders Section (Executions) */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Recent Orders
        </Typography>
        <Grid container spacing={3}>
          {executions.map((execution) => (
            <Grid item xs={12} sm={6} md={4} key={execution.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {execution.job.name}
                  </Typography>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Chip
                      label={execution.status}
                      color={getStatusColor(execution.status)}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {execution.project}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    Started: {new Date(execution.dateStarted).toLocaleString()}
                  </Typography>
                  {execution.duration && (
                    <Typography variant="body2" color="textSecondary">
                      Duration: {execution.duration}ms
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderAndService;
