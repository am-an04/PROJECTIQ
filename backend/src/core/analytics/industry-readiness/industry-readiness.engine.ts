import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  IndustryReadinessEngine,
} from "./industry-readiness.types.js";

import {
  IndustryReadiness,
} from "../../../modules/analytics/analytics.types.js";

export class DefaultIndustryReadinessEngine
  implements IndustryReadinessEngine {

  analyze(
    context: AnalyticsContext
  ): IndustryReadiness {

    let score = 0;

    /* ==========================================
       Technology Stack
    ========================================== */

    if (
      context.recommendation.technologies.length >= 6
    ) {

      score += 20;

    } else {

      score += Math.min(
        context.recommendation.technologies.length * 3,
        20
      );

    }

    /* ==========================================
       Deployment
    ========================================== */

    if (
      context.architecture.deployment.containerization
    ) {

      score += 15;

    }

    /* ==========================================
       Security
    ========================================== */

    score += Math.min(

      context.architecture.security.securityPractices.length * 3,

      20

    );

    /* ==========================================
       Scalability
    ========================================== */

    if (
      context.architecture.scalability.horizontalScaling
    ) {

      score += 10;

    }

    if (
      context.architecture.scalability.loadBalancing
    ) {

      score += 10;

    }

    score += Math.min(

      context.architecture.scalability.monitoring.length * 5,

      10

    );

    /* ==========================================
       Evaluation
    ========================================== */

    score += Math.round(

      context.evaluation.overallScore * 0.15

    );

    score = Math.min(score, 100);

    let level:
      | "Beginner"
      | "Intermediate"
      | "Advanced"
      | "Production Ready";

    if (score >= 90) {

      level = "Production Ready";

    } else if (score >= 75) {

      level = "Advanced";

    } else if (score >= 50) {

      level = "Intermediate";

    } else {

      level = "Beginner";

    }

    return {

      score,

      level,

    };

  }

}