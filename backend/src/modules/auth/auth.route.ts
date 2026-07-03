import { Router } from "express";

import { AuthController } from "./auth.controller.js";

import { validate } from "../../middleware/validation.middleware.js";

import {
  registerUserSchema,
  loginUserSchema,
} from "./auth.validation.js";

import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();

/**
 * Register
 */
router.post(
  "/register",
  validate(registerUserSchema),
  AuthController.register
);

/**
 * Login
 */
router.post(
  "/login",
  validate(loginUserSchema),
  AuthController.login
);

/**
 * Profile
 */
router.get(
  "/profile",
  authenticate,
  AuthController.getProfile
);

export default router;