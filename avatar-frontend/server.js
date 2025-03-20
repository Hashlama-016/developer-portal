import express from "express";
import httpProxy from "http-proxy";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const rootDir = process.env.APP_DIR || "dist";
const port = Number(process.env.PORT || 8080);

const proxy = httpProxy.createProxyServer({
  target: `http://${process.env.API_HOST}`,
  ws: true,
  changeOrigin: true,
});

const server = express();

server.use("/api", (req, res) => {
  req.url = req.originalUrl;
  proxy.web(req, res, {});
});

server.use("/socket.io", (req, res) => {
  req.url = req.originalUrl;
  proxy.web(req, res, {});
});

server.on("upgrade", (req, socket, head) => {
  proxy.ws(req, socket, head);
});

server.use(
  express.static(path.resolve(import.meta.dirname, rootDir), {
    index: ["index.html", "index.htm"],
  })
);

server.listen(port, () => {
    console.log(`[Server]: Server is running at http://localhost:${port}`)
    console.log(`[Server]: Server is running at http://0.0.0.0:${port}`)
});
