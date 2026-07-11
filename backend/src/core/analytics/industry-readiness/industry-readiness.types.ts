import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  IndustryReadiness,
} from "../../../modules/analytics/analytics.types.js";

/* ============================================================
   Engine
============================================================ */

export interface IndustryReadinessEngine {

  analyze(
    context: AnalyticsContext
  ): IndustryReadiness;

}