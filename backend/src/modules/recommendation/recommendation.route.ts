// src/modules/recommendation/recommendation.route.ts

import { Router } from "express";

import { RecommendationController } from "./recommendation.controller.js";

import { validate } from "../../middleware/validation.middleware.js";

import { recommendationSchema } from "./recommendation.validation.js";

const router = Router();

router.post(
  "/",
  validate(recommendationSchema),
  RecommendationController.generateRecommendation
);

export default router;