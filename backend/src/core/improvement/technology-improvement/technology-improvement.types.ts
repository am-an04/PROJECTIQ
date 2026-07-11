import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  TechnologyImprovement,
} from "../../../modules/improvement/improvement.types.js";

/* ============================================================
   Build Options
============================================================ */

export interface BuildTechnologyImprovementOptions {

  context: ImprovementContext;

}

/* ============================================================
   Engine
============================================================ */

export interface TechnologyImprovementEngine {

  improve(
    context: ImprovementContext
  ): TechnologyImprovement;

}