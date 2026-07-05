// src/core/scoring/scoring.service.ts

import {
  ScoreBreakdown,
  ScoreInput,
} from "./scoring.types.js";

export class ScoringService {
  static calculate(input: ScoreInput): ScoreBreakdown {

    const overallScore = Math.min(
      Math.round(
        input.requirementCompleteness * 0.30 +
        input.technologyConfidence * 0.30 +
        input.scalability * 0.15 +
        input.maintainability * 0.15 +
        input.security * 0.10
      ),
      100
    );

    let grade: "A" | "B" | "C" | "D";

    if (overallScore >= 90) {
      grade = "A";
    } else if (overallScore >= 75) {
      grade = "B";
    } else if (overallScore >= 60) {
      grade = "C";
    } else {
      grade = "D";
    }

    return {
      requirementScore: input.requirementCompleteness,
      technologyScore: input.technologyConfidence,
      scalabilityScore: input.scalability,
      maintainabilityScore: input.maintainability,
      securityScore: input.security,
      overallScore,
      grade,
    };
  }
}