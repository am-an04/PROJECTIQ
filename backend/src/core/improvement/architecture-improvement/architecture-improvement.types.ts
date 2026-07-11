import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  ArchitectureImprovement,
} from "../../../modules/improvement/improvement.types.js";

/* ============================================================
   Engine
============================================================ */

export interface ArchitectureImprovementEngine {

  improve(
    context: ImprovementContext
  ): ArchitectureImprovement;

}