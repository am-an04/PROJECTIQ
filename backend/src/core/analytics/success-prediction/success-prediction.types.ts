import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  SuccessPrediction,
} from "../../../modules/analytics/analytics.types.js";

/* ============================================================
   Engine
============================================================ */

export interface SuccessPredictionEngine {

  analyze(
    context: AnalyticsContext
  ): SuccessPrediction;

}