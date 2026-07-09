import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  ArchitectureScoreEngine,
  ArchitectureScoreResult,
} from "./architecture-score.types.js";

export class DefaultArchitectureScoreEngine
  implements ArchitectureScoreEngine {

  evaluate(
    context: EvaluationContext
  ): ArchitectureScoreResult {

    const architecture =
      context.architecture;

    let score = 0;

    const strengths: string[] = [];

    const weaknesses: string[] = [];

    /**
     * Architecture Style
     */

    if (
      architecture.style 
    ) {

      score += 15;

      strengths.push(
        "Architecture style defined."
      );

    } else {

      weaknesses.push(
        "Architecture style missing."
      );

    }

    /**
     * Folder Structure
     */

    if (
      architecture.folderStructure.length >= 5
    ) {

      score += 15;

      strengths.push(
        "Well organized folder structure."
      );

    }

    /**
     * Components
     */

    if (
      architecture.components.length >= 10
    ) {

      score += 20;

      strengths.push(
        "Rich component design."
      );

    } else if (
      architecture.components.length >= 5
    ) {

      score += 15;

    } else {

      weaknesses.push(
        "Few architecture components."
      );

    }

    /**
     * Database
     */

    if (
      architecture.databaseDesign.collections.length > 0
    ) {

      score += 15;

    }

    /**
     * API Design
     */

    if (
      architecture.apiDesign.endpoints.length >= 5
    ) {

      score += 15;

    }

    /**
     * Deployment
     */

    if (
      architecture.deployment.cloudProvider
    ) {

      score += 10;

    }

    /**
     * Security
     */

    if (
      architecture.security.authentication.length > 0
    ) {

      score += 10;

    }

    score = Math.min(score, 100);

    return {

      score,

      strengths,

      weaknesses,

    };

  }

}