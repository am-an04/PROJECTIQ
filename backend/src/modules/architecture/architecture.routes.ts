import { Router } from "express";

import { ArchitectureController } from "./architecture.controller.js";

import { validate } from "../../middleware/validation.middleware.js";

import {
  ArchitectureRequestSchema,
} from "./architecture.validation.js";

const router = Router();

router.post(

  "/",

  validate(ArchitectureRequestSchema),

  ArchitectureController.generateArchitecture

);

export default router;