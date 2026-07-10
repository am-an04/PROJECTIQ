import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  PlacementReadinessEngine,
} from "./placement-readiness.types.js";

import {
  PlacementReadiness,
} from "../../../modules/analytics/analytics.types.js";

export class DefaultPlacementReadinessEngine
  implements PlacementReadinessEngine {

  analyze(
    context: AnalyticsContext
  ): PlacementReadiness {

    let score =
      context.evaluation.placementReadiness;

    /* ==========================================
       High Priority Improvements
    ========================================== */

    const highPriorityCount =

      context.improvement.overallSuggestions.filter(

        suggestion => suggestion.priority === "High"

      ).length;

    score -= highPriorityCount * 2;

    score = Math.max(0, Math.min(score, 100));

    let level:
      | "Low"
      | "Moderate"
      | "High"
      | "Excellent";

    if (score >= 90) {

      level = "Excellent";

    }

    else if (score >= 75) {

      level = "High";

    }

    else if (score >= 55) {

      level = "Moderate";

    }

    else {

      level = "Low";

    }

    return {

      score,

      level,

    };

  }

}