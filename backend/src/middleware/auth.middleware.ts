import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../core/utils/jwt.js";
import { AppError } from "../core/errors/AppError.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const authorization = req.headers.authorization;

  if (!authorization) {
    return next(
      new AppError("Authorization token is required", 401)
    );
  }

  if (!authorization.startsWith("Bearer ")) {
    return next(
      new AppError("Invalid authorization format", 401)
    );
  }

  const token = authorization.split(" ")[1];

  const payload = verifyAccessToken(token);

  req.userId = payload.id;

  next();

};