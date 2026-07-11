import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  SuccessPredictionEngine,
} from "./success-prediction.types.js";

import {
  SuccessPrediction,
} from "../../../modules/analytics/analytics.types.js";

export class DefaultSuccessPredictionEngine
  implements SuccessPredictionEngine {

  analyze(
    context: AnalyticsContext
  ): SuccessPrediction {

    let score = 0;

    const reasoning: string[] = [];

    /* ==========================================
       Evaluation Score
    ========================================== */

    score += Math.round(
      context.evaluation.overallScore * 0.40
    );

    /* ==========================================
       Resume Impact
    ========================================== */

    score += Math.round(
      context.evaluation.resumeImpact * 0.20
    );

    /* ==========================================
       Placement Readiness
    ========================================== */

    score += Math.round(
      context.evaluation.placementReadiness * 0.20
    );

    /* ==========================================
       Technology Stack
    ========================================== */

    score += Math.min(

      context.recommendation.technologies.length * 2,

      10

    );

    /* ==========================================
       Architecture
    ========================================== */

    score += Math.min(

      context.architecture.components.length,

      10

    );

    score = Math.min(score, 100);

    let probability:
      | "Very Low"
      | "Low"
      | "Medium"
      | "High"
      | "Very High";

    if (score >= 90) {

      probability = "Very High";

    } else if (score >= 75) {

      probability = "High";

    } else if (score >= 60) {

      probability = "Medium";

    } else if (score >= 40) {

      probability = "Low";

    } else {

      probability = "Very Low";

    }

    reasoning.push(

      `Overall evaluation score: ${context.evaluation.overallScore}`,

      `Resume impact: ${context.evaluation.resumeImpact}`,

      `Placement readiness: ${context.evaluation.placementReadiness}`,

      `Technologies selected: ${context.recommendation.technologies.length}`,

      `Architecture components: ${context.architecture.components.length}`

    );

    return {

      score,

      probability,

      reasoning,

    };

  }

}