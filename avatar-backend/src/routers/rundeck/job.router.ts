import express from "express";
import jobHandler from "../../handlers/job.handler.js";

const router = express.Router();

router.get("/jobs", jobHandler.getJobs);
router.get("/jobs/:id", jobHandler.getJobById);
router.post("/jobs/:id/run", jobHandler.runJob);
router.get("/executions", jobHandler.getExecutions);
router.get("/executions/:id/output", jobHandler.getExecutionLogs);

export default router;
