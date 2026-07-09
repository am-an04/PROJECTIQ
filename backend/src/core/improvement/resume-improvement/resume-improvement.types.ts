import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  ResumeImprovement,
} from "../../../modules/improvement/improvement.types.js";

/* ============================================================
   Engine
============================================================ */

export interface ResumeImprovementEngine {

  improve(
    context: ImprovementContext
  ): ResumeImprovement;

}