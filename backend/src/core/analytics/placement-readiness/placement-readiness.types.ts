import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  PlacementReadiness,
} from "../../../modules/analytics/analytics.types.js";

/* ============================================================
   Engine
============================================================ */

export interface PlacementReadinessEngine {

  analyze(
    context: AnalyticsContext
  ): PlacementReadiness;

}