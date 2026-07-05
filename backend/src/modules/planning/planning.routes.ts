import { Router } from "express";

import { PlanningController } from "./planning.controller.js";

const router = Router();

const planningController = new PlanningController();

/**
 * Generate Project Planning
 *
 * POST /api/v1/planning
 */
router.post(
  "/",
  planningController.generatePlan
);

export default router;