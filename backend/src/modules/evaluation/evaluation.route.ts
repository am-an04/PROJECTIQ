import { Router } from "express";

import {
  EvaluationController,
} from "./evaluation.controller.js";

const router = Router();

/**
 * ==========================================
 * Evaluation
 * ==========================================
 */

router.post(
  "/",
  EvaluationController.evaluate
);

export default router;