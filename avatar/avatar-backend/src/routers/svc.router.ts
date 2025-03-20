import express from "express";
import serviceHandler from "../handlers/svc.handler.js";

const router = express.Router();

router.get("/services", serviceHandler.getServices);
router.get("/services/:id", serviceHandler.getService);
router.post("/services", serviceHandler.addService);

export default router;
