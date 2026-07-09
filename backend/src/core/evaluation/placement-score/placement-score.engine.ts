import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  PlacementScoreEngine,
  PlacementScoreResult,
} from "./placement-score.types.js";

export class DefaultPlacementScoreEngine
  implements PlacementScoreEngine {

  evaluate(
    context: EvaluationContext
  ): PlacementScoreResult {

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

    /* ==============================
       Modern Technology Stack
    ============================== */

    const technologies =
      recommendation.technologies.map(
        technology => technology.name.toLowerCase()
      );

    const modernStack = [

      "react",
      "node.js",
      "express",
      "mongodb",
      "docker",
      "kubernetes",
      "redis",
      "tensorflow",
      "aws"

    ];

    const matched =
      technologies.filter(
        technology =>
          modernStack.includes(technology)
      ).length;

    score += Math.min(
      matched * 5,
      30
    );

    if (matched >= 5) {

      strengths.push(
        "Modern industry technology stack."
      );

    }

    /* ==============================
       Architecture
    ============================== */

    if (
      architecture.components.length >= 8
    ) {

      score += 20;

      strengths.push(
        "Strong architecture design."
      );

    } else {

      weaknesses.push(
        "Architecture can be expanded."
      );

    }

    /* ==============================
       Planning
    ============================== */

    if (
      planning.tasks.length >= 10
    ) {

      score += 15;

      strengths.push(
        "Detailed implementation planning."
      );

    }

    /* ==============================
       Features
    ============================== */

    if (
      recommendation.requirementAnalysis
        .functionalRequirements.length >= 8
    ) {

      score += 20;

    }

    /* ==============================
       Security
    ============================== */

    if (
      architecture.security.authentication.length > 0
    ) {

      score += 15;

    }

    score = Math.min(score, 100);

    if (score < 70) {

      recommendations.push(
        "Increase project complexity with additional industry-level features."
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