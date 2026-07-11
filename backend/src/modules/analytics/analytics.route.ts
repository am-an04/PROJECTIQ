import { Router } from "express";

import {
  AnalyticsController,
} from "./analytics.controller.js";

const router = Router();

const controller =
  new AnalyticsController();

router.post(

  "/",

  controller.generateAnalytics

);

export default router;