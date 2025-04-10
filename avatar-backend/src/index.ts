import express from "express";
import cors from "cors";
import defaultRouter from "./routers/index.js";
import logger from "./logger.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";

const port = Number(process.env.PORT || 8080);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL || ""],
  })
);
app.use(loggerMiddleware);

app.use("/api", defaultRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  logger.info(`[Server]: Listening at http://localhost:${port}`);
  logger.info(`[Server]: Listening at http://0.0.0.0:${port}`);
});
