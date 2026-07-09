import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  RequirementScoreEngine,
  RequirementScoreResult,
} from "./requirement-score.types.js";

export class DefaultRequirementScoreEngine
  implements RequirementScoreEngine {

  evaluate(
    context: EvaluationContext
  ): RequirementScoreResult {

    const analysis =
      context.recommendation.requirementAnalysis;

    if (!analysis) {

      return {

        score: 0,

        strengths: [],

        weaknesses: [
          "Requirement analysis not available."
        ],

      };

    }

    let score = 0;

    const strengths: string[] = [];

    const weaknesses: string[] = [];

    const functionalCount =
      analysis.functionalRequirements?.length ?? 0;

    const nonFunctionalCount =
      analysis.nonFunctionalRequirements?.length ?? 0;

    const domainCount =
      analysis.detectedDomains?.length ?? 0;

    const missingRequirementCount =
      analysis.missingRequirements?.length ?? 0;

    /**
     * ==========================================
     * Functional Requirements
     * ==========================================
     */

    if (functionalCount >= 10) {

      score += 30;

      strengths.push(
        "Comprehensive functional requirements."
      );

    } else if (functionalCount >= 5) {

      score += 20;

      strengths.push(
        "Good functional requirement coverage."
      );

    } else {

      weaknesses.push(
        "Few functional requirements detected."
      );

    }

    /**
     * ==========================================
     * Non Functional Requirements
     * ==========================================
     */

    if (nonFunctionalCount >= 5) {

      score += 20;

      strengths.push(
        "Non-functional requirements identified."
      );

    } else if (nonFunctionalCount > 0) {

      score += 10;

    } else {

      weaknesses.push(
        "Non-functional requirements are missing."
      );

    }

    /**
     * ==========================================
     * Domain Detection
     * ==========================================
     */

    if (domainCount >= 2) {

      score += 20;

      strengths.push(
        "Multiple project domains detected."
      );

    } else if (domainCount === 1) {

      score += 10;

    } else {

      weaknesses.push(
        "Project domain not detected."
      );

    }

    /**
     * ==========================================
     * Completeness
     * ==========================================
     */

    score += Math.round(
      (analysis.completenessScore ?? 0) * 0.3
    );

    /**
     * ==========================================
     * Constraints
     * ==========================================
     */

    if (missingRequirementCount === 0) {

      score += 10;

      strengths.push(
        "Project constraints defined."
      );

    } else {

      weaknesses.push(
        "Some project constraints are missing."
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