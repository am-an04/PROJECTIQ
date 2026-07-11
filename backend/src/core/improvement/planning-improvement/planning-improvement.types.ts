import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  PlanningImprovement,
} from "../../../modules/improvement/improvement.types.js";

/* ============================================================
   Engine
============================================================ */

export interface PlanningImprovementEngine {

  improve(
    context: ImprovementContext
  ): PlanningImprovement;

}