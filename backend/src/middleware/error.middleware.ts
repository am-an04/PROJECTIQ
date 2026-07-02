import { NextFunction, Request, Response } from "express";
import { AppError } from "../core/errors/AppError.js";
import { ApiResponse } from "../core/response/apiResponse.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // Log the error for debugging
  console.error(err);

  if (err instanceof AppError) {

    const response: ApiResponse = {
      success: false,
      message: err.message,
    };

    return res.status(err.statusCode).json(response);
  }

  const response: ApiResponse = {
    success: false,
    message: "Internal Server Error",
  };

  return res.status(500).json(response);
};