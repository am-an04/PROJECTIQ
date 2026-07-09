import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  QualityMetric,
  QualityScoreEngine,
  QualityScoreResult,
} from "./quality-score.types.js";

export class DefaultQualityScoreEngine
  implements QualityScoreEngine {

  evaluate(
    context: EvaluationContext
  ): QualityScoreResult {

    const architecture =
      context.architecture;

    let security = 0;

    let scalability = 0;

    let maintainability = 0;

    const strengths: string[] = [];

    const weaknesses: string[] = [];

    const recommendations: string[] = [];

    /* ==========================================
       Security
    ========================================== */

    if (
      architecture.security.authentication.length > 0
    ) {

      security += 25;

      strengths.push(
        "Authentication mechanism implemented."
      );

    } else {

      weaknesses.push(
        "Authentication mechanism missing."
      );

      recommendations.push(
        "Implement JWT or OAuth authentication."
      );

    }

    if (
      architecture.security.authorization.length > 0
    ) {

      security += 20;

    }

    if (
      architecture.security.encryption.length >= 2
    ) {

      security += 25;

    }

    if (
      architecture.security.securityPractices.length >= 5
    ) {

      security += 30;

    } else {

      recommendations.push(
        "Improve API security using Helmet, Rate Limiting and CORS."
      );

    }

    /* ==========================================
       Scalability
    ========================================== */

    if (
      architecture.scalability.horizontalScaling
    ) {

      scalability += 30;

    }

    if (
      architecture.scalability.loadBalancing
    ) {

      scalability += 20;

    }

    if (
      architecture.scalability.caching.length > 0
    ) {

      scalability += 25;

    }

    if (
      architecture.scalability.monitoring.length > 0
    ) {

      scalability += 25;

    }

    /* ==========================================
       Maintainability
    ========================================== */

    if (
      architecture.folderStructure.length >= 5
    ) {

      maintainability += 30;

    }

    if (
      architecture.components.length >= 5
    ) {

      maintainability += 30;

    }

    if (
      architecture.apiDesign.endpoints.length >= 5
    ) {

      maintainability += 20;

    }

    if (
      architecture.databaseDesign.collections.length > 0
    ) {

      maintainability += 20;

    }

    security =
      Math.min(security, 100);

    scalability =
      Math.min(scalability, 100);

    maintainability =
      Math.min(maintainability, 100);

    const metrics: QualityMetric[] = [

      {

        name: "Security",

        score: security,

        maxScore: 100,

      },

      {

        name: "Scalability",

        score: scalability,

        maxScore: 100,

      },

      {

        name: "Maintainability",

        score: maintainability,

        maxScore: 100,

      }

    ];

    return {

      score: Math.round(

        (

          security +

          scalability +

          maintainability

        ) / 3

      ),

      securityScore: security,

      scalabilityScore: scalability,

      maintainabilityScore: maintainability,

      metrics,

      strengths,

      weaknesses,

      recommendations,

    };

  }

}