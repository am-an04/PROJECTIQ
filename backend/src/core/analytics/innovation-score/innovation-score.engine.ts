import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  InnovationScoreEngine,
} from "./innovation-score.types.js";

import {
  InnovationScore,
} from "../../../modules/analytics/analytics.types.js";

export class DefaultInnovationScoreEngine
  implements InnovationScoreEngine {

  analyze(
    context: AnalyticsContext
  ): InnovationScore {

    let score = 0;

    /* ==========================================
       Modern Technologies
    ========================================== */

    score += Math.min(

      context.recommendation.technologies.length * 3,

      30

    );

    /* ==========================================
       Cloud Adoption
    ========================================== */

    const technologies =
      context.recommendation.technologies.map(
        technology => technology.name.toLowerCase()
      );

    if (

      technologies.includes("aws") ||

      technologies.includes("azure") ||

      technologies.includes("gcp")

    ) {

      score += 15;

    }

    /* ==========================================
       Containerization
    ========================================== */

    if (

      context.architecture.deployment.containerization

    ) {

      score += 10;

    }

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

    /* ==========================================
       Security Practices
    ========================================== */

    score += Math.min(

      context.architecture.security.securityPractices.length,

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

      | "Low"

      | "Medium"

      | "High"

      | "Excellent";

    if (score >= 90) {

      level = "Excellent";

    }

    else if (score >= 75) {

      level = "High";

    }

    else if (score >= 50) {

      level = "Medium";

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