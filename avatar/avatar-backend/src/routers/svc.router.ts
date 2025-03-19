import express from "express";
import serviceHandler from "../handlers/svc.handler.js";

const router = express.Router();

router.get("/services", serviceHandler.getServices);

export default router;
