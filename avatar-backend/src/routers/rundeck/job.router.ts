import express from "express";
import jobHandler from "../../handlers/job.handler.js";

const router = express.Router();

router.get("/jobs", jobHandler.getAllJobs);
router.post("/jobs/run", jobHandler.runJob);
router.get("/executions", jobHandler.getAllExecutions);

export default router;
