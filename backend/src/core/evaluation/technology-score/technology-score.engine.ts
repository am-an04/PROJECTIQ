import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  TechnologyScoreEngine,
  TechnologyScoreResult,
} from "./technology-score.types.js";

export class DefaultTechnologyScoreEngine
  implements TechnologyScoreEngine {

  evaluate(
    context: EvaluationContext
  ): TechnologyScoreResult {

    const technologies =
      context.recommendation.technologies;

    let score = 0;

    const strengths: string[] = [];

    const weaknesses: string[] = [];

    /**
     * Number of Technologies
     */

    if (technologies.length >= 8) {

      score += 20;

      strengths.push(
        "Comprehensive technology stack."
      );

    } else if (technologies.length >= 5) {

      score += 15;

    } else {

      weaknesses.push(
        "Limited technology stack."
      );

    }

    const names =
      technologies.map(
        technology =>
          technology.name.toLowerCase()
      );

    /**
     * Backend
     */

    if (

      names.includes("node.js") ||

      names.includes("java") ||

      names.includes("spring boot")

    ) {

      score += 15;

      strengths.push(
        "Modern backend technology."
      );

    }

    /**
     * Frontend
     */

    if (

      names.includes("react") ||

      names.includes("angular") ||

      names.includes("vue")

    ) {

      score += 10;

    }

    /**
     * Database
     */

    if (

      names.includes("mongodb") ||

      names.includes("postgresql") ||

      names.includes("mysql")

    ) {

      score += 15;

    }

    /**
     * Cloud
     */

    if (

      names.includes("aws") ||

      names.includes("azure") ||

      names.includes("google cloud")

    ) {

      score += 10;

      strengths.push(
        "Cloud deployment supported."
      );

    }

    /**
     * DevOps
     */

    if (

      names.includes("docker")

    ) {

      score += 10;

    }

    if (

      names.includes("kubernetes")

    ) {

      score += 10;

    }

    /**
     * AI
     */

    if (

      names.includes("tensorflow") ||

      names.includes("pytorch")

    ) {

      score += 10;

      strengths.push(
        "Artificial Intelligence support."
      );

    }

    score = Math.min(score, 100);

    return {

      score,

      strengths,

      weaknesses,

    };

  }

}