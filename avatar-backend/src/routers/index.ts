import express from "express";
import orderRouter from "./order.router.js";
import svcRouter from "./svc.router.js";
import rudeckRouter from "./rundeck/index.js";
import logger from "../logger.js";
import { StatusCodes } from "http-status-codes";

const router = express.Router();

router.use(orderRouter);
router.use(svcRouter);
router.use("/rundeck", rudeckRouter);

router.use("/", (req, res) => {
  logger.debug("hello world!");
  res.status(StatusCodes.OK).send("hello world!");
});

export default router;
