import winston from "winston";
import expressWinston from "express-winston";
import { Express } from "express";

export default function initializeLogger(expressApp: Express) {
  expressApp.use(
    expressWinston.logger({
      transports: [new winston.transports.Console()],
      format: winston.format.simple(),
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      responseWhitelist: ["body"],
      requestWhitelist: ["body", "headers"],
      colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      // ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
      level: function (req, res) {
        let level = "";
        if (res.statusCode >= 200) {
          level = "info";
        }
        if (res.statusCode >= 400) {
          level = "error";
        }
        return level;
      },
    })
  );
}
