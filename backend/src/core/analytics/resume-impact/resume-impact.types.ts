import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  ResumeImpact,
} from "../../../modules/analytics/analytics.types.js";

/* ============================================================
   Engine
============================================================ */

export interface ResumeImpactEngine {

  analyze(
    context: AnalyticsContext
  ): ResumeImpact;

}