import express from "express";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL || ""],
  })
);

export default app;
