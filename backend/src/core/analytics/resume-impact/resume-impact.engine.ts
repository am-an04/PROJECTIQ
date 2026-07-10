import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  ResumeImpactEngine,
} from "./resume-impact.types.js";

import {
  ResumeImpact,
} from "../../../modules/analytics/analytics.types.js";

export class DefaultResumeImpactEngine
  implements ResumeImpactEngine {

  analyze(
    context: AnalyticsContext
  ): ResumeImpact {

    let score =
      context.evaluation.resumeImpact;

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
      | "Average"
      | "Good"
      | "Excellent";

    if (score >= 85) {

      level = "Excellent";

    }

    else if (score >= 65) {

      level = "Good";

    }

    else {

      level = "Average";

    }

    return {

      score,

      level,

    };

  }

}