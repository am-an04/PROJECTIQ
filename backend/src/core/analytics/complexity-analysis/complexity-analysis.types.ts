import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  ComplexityAnalysis,
} from "../../../modules/analytics/analytics.types.js";

/* ============================================================
   Engine
============================================================ */

export interface ComplexityAnalysisEngine {

  analyze(
    context: AnalyticsContext
  ): ComplexityAnalysis;

}