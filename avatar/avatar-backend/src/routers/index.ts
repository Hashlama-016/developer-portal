import express from "express";
import orderRouter from "./order.router.js";
import svcRouter from "./svc.router.js";

const router = express.Router();

router.use(orderRouter);
router.use(svcRouter);

export default router;
