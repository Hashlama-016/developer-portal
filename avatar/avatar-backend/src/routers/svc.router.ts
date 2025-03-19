import express from "express";
import serviceService from "../services/svc.service.js";

const router = express.Router();

router.get("/services", async (req, res, next) => {
  try {
    const results = await serviceService.getServices();
    res.json(results);
  } catch (error) {
    console.log(error)
  }
});

export default router;
