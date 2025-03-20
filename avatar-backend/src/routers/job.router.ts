import express from "express";
import jobHandler from "../handlers/job.handler.js";

const router = express.Router();

router.get("/rundeck/all", jobHandler.getAllJobs);
router.post("/run", jobHandler.runJob);
router.get("/executions", jobHandler.getAllExecutions);

export default router;
