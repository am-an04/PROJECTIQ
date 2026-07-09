import { Router } from "express";

import {
  AnalyzeController,
} from "./analyze.controller.js";

const router = Router();

const controller =
  new AnalyzeController();

router.post(
  "/",
  controller.analyze
);

export default router;