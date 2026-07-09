import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  SecurityImprovement,
} from "../../../modules/improvement/improvement.types.js";

/* ============================================================
   Engine
============================================================ */

export interface SecurityImprovementEngine {

  improve(
    context: ImprovementContext
  ): SecurityImprovement;

}