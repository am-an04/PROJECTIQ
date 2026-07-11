import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  PlacementImprovement,
} from "../../../modules/improvement/improvement.types.js";

/* ============================================================
   Engine
============================================================ */

export interface PlacementImprovementEngine {

  improve(
    context: ImprovementContext
  ): PlacementImprovement;

}