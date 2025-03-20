import express from "express";
import orderHandler from "../handlers/order.handler.js";

const router = express.Router();

router.get("/orders", orderHandler.getOrders);
router.get("/orders/:id", orderHandler.getOrder);
router.post("/orders", orderHandler.addOrder);

export default router;
