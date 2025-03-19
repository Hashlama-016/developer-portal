import express from "express";
import cors from "cors";
import defaultRouter from "./routers/index.js";
import logger from "./logger.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const port = Number(process.env.PORT || 8080);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL || ""],
  })
);

app.use("/api", defaultRouter);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`[Server]: Server is running at http://localhost:${port}`);
  logger.info(`[Server]: Server is running at http://0.0.0.0:${port}`);
});
