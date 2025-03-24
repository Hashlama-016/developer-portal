import express from "express";
import jobRouter from "./job.router.js";

const router = express.Router();

router.use(jobRouter);

export default router;
