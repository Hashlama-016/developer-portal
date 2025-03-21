import winston from "winston";

const logger = winston.createLogger({
  level: "http",
  format: winston.format.cli(),
  transports: [new winston.transports.Console()],
});

export default logger;
