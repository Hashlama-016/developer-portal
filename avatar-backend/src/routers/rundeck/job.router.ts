import express from "express";
import jobHandler from "../handlers/job.handler.js";

const router = express.Router();

router.get("/jobs", jobHandler.getJobs);
router.post("/jobs/:id/run", jobHandler.runJob);
router.get("/executions", jobHandler.getExecutions);

export default router;
