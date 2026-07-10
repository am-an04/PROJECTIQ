import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  TechnicalMaturityEngine,
} from "./technical-maturity.types.js";

import {
  TechnicalMaturity,
} from "../../../modules/analytics/analytics.types.js";

export class DefaultTechnicalMaturityEngine
  implements TechnicalMaturityEngine {

  analyze(
    context: AnalyticsContext
  ): TechnicalMaturity {

    let score = 0;

    /* ==========================================
       Architecture Components
    ========================================== */

    score += Math.min(

      context.architecture.components.length * 3,

      25

    );

    /* ==========================================
       API Design
    ========================================== */

    score += Math.min(

      context.architecture.apiDesign.endpoints.length * 2,

      15

    );

    /* ==========================================
       Database Design
    ========================================== */

    score += Math.min(

      context.architecture.databaseDesign.collections.length * 2,

      10

    );

    /* ==========================================
       Deployment
    ========================================== */

    if (
      context.architecture.deployment.containerization
    ) {

      score += 10;

    }

    /* ==========================================
       Security
    ========================================== */

    score += Math.min(

      context.architecture.security.securityPractices.length * 2,

      15

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

      score += 5;

    }

    if (
      context.architecture.scalability.monitoring.length > 0
    ) {

      score += 10;

    }

    score = Math.min(score, 100);

    let level:
      | "Basic"
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

      level = "Basic";

    }

    return {

      score,

      level,

    };

  }

}