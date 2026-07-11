import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  TechnicalMaturity,
} from "../../../modules/analytics/analytics.types.js";

/* ============================================================
   Engine
============================================================ */

export interface TechnicalMaturityEngine {

  analyze(
    context: AnalyticsContext
  ): TechnicalMaturity;

}