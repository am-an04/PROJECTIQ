import { Request, Response } from "express";
import { getHealthStatus } from "./health.service.js";

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Backend is healthy",
    data: getHealthStatus(),
  });
};