import express from "express";
import "express-async-errors";
import { Response, Request, NextFunction } from "express";
import cors from "cors";

import router from "./shared/infra/http/routes";
import { APIError } from "./shared/error";

const app = express();

// JSON config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// every request to the API will pass through this function first
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

// set routes
app.use(router);

// standart response for unknown requisitions
app.use((req, res) => {
  return res.status(404).json({
    msg: "service not found",
    statusCode: 404,
  });
});

// response for errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      msg: err.message,
      statusCode: err.statusCode,
    });
  }

  return res.status(500).json({
    msg: `internal server error - ${err.message}`,
    statusCode: 500,
  });
});

export default app;
