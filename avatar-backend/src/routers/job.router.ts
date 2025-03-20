import express from "express";
import jobHandler from "../handlers/job.handler.js";

const router = express.Router();

router.get("/rundeck/jobs", jobHandler.getAllJobs);
router.post("/rundeck/run", jobHandler.runJob);
router.get("/rundeck/executions", jobHandler.getAllExecutions);

export default router;
