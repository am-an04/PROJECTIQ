import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError.js";
import { env } from "../../config/env.js";

const JWT_SECRET = env.JWT_SECRET;
const JWT_EXPIRES_IN = env.JWT_EXPIRES_IN;

/**
 * Generate JWT Access Token
 */
export function generateAccessToken(userId: string): string {
  return jwt.sign(
    {
      id: userId,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN,
    }
  );
}

/**
 * Verify JWT Access Token
 */
export function verifyAccessToken(token: string): { id: string } {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string };
  } catch {
    throw new AppError("Invalid or expired token", 401);
  }
}