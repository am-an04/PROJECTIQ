import { Router } from "express";

import {
  ImprovementController,
} from "./improvement.controller.js";

const router = Router();

const controller =
  new ImprovementController();

router.post(

  "/",

  controller.generateImprovement

);

export default router;