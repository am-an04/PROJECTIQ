import {
  AnalyticsContext,
} from "../analytics.context.js";

import {
  ComplexityAnalysisEngine,
} from "./complexity-analysis.types.js";

import {
  ComplexityAnalysis,
} from "../../../modules/analytics/analytics.types.js";

export class DefaultComplexityAnalysisEngine
  implements ComplexityAnalysisEngine {

  analyze(
    context: AnalyticsContext
  ): ComplexityAnalysis {

    let score = 0;

    /* ==========================================
       Technology Stack
    ========================================== */

    score += Math.min(

      context.recommendation.technologies.length * 3,

      20

    );

    /* ==========================================
       Components
    ========================================== */

    score += Math.min(

      context.architecture.components.length * 3,

      20

    );

    /* ==========================================
       API Design
    ========================================== */

    score += Math.min(

      context.architecture.apiDesign.endpoints.length * 2,

      15

    );

    /* ==========================================
       Database Collections
    ========================================== */

    score += Math.min(

      context.architecture.databaseDesign.collections.length * 2,

      10

    );

    /* ==========================================
       Project Planning
    ========================================== */

    score += Math.min(

      context.planning.tasks.length,

      15

    );

    /* ==========================================
       Evaluation
    ========================================== */

    score += Math.round(

      context.evaluation.overallScore * 0.20

    );

    score = Math.min(score, 100);

    let level:
      | "Simple"
      | "Moderate"
      | "Complex"
      | "Enterprise";

    if (score >= 90) {

      level = "Enterprise";

    } else if (score >= 70) {

      level = "Complex";

    } else if (score >= 45) {

      level = "Moderate";

    } else {

      level = "Simple";

    }

    return {

      score,

      level,

    };

  }

}