import express from "express";
import cors from "cors";
import mainRouter from "./routers/index.js"

const port = Number(process.env.PORT || 8080);
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL || ""],
  })
);

app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`[Server]: Server is running at http://localhost:${port}`);
  console.log(`[Server]: Server is running at http://0.0.0.0:${port}`);
});
