import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  ResumeScoreEngine,
  ResumeScoreResult,
} from "./resume-score.types.js";

export class DefaultResumeScoreEngine
  implements ResumeScoreEngine {

  evaluate(
    context: EvaluationContext
  ): ResumeScoreResult {

    const recommendation =
      context.recommendation;

    const architecture =
      context.architecture;

    const planning =
      context.planning;

    let score = 0;

    const strengths: string[] = [];

    const weaknesses: string[] = [];

    const recommendations: string[] = [];

    /* ==========================================
       Technology Diversity
    ========================================== */

    if (
      recommendation.technologies.length >= 6
    ) {

      score += 20;

      strengths.push(
        "Uses a diverse technology stack."
      );

    } else {

      weaknesses.push(
        "Technology stack is limited."
      );

    }

    /* ==========================================
       Architecture Quality
    ========================================== */

    if (
      architecture.components.length >= 8
    ) {

      score += 20;

      strengths.push(
        "Well-designed modular architecture."
      );

    }

    /* ==========================================
       API Design
    ========================================== */

    if (
      architecture.apiDesign.endpoints.length >= 5
    ) {

      score += 15;

      strengths.push(
        "REST API design included."
      );

    }

    /* ==========================================
       Planning Quality
    ========================================== */

    if (
      planning.tasks.length >= 10
    ) {

      score += 15;

      strengths.push(
        "Detailed project planning."
      );

    }

    /* ==========================================
       Security
    ========================================== */

    if (
      architecture.security.authentication.length > 0
    ) {

      score += 15;

    }

    /* ==========================================
       Deployment
    ========================================== */

    if (
      architecture.deployment.containerization
    ) {

      score += 15;

      strengths.push(
        "Deployment strategy included."
      );

    }

    score = Math.min(score, 100);

    if (score < 75) {

      recommendations.push(
        "Include more industry-standard technologies and architecture details."
      );

    }

    return {

      score,

      strengths,

      weaknesses,

      recommendations,

    };

  }

}