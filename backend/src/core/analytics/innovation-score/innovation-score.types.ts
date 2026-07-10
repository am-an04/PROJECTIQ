import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  InnovationScore,
} from "../../../modules/analytics/analytics.types.js";

/* ============================================================
   Engine
============================================================ */

export interface InnovationScoreEngine {

  analyze(
    context: AnalyticsContext
  ): InnovationScore;

}