// src/modules/recommendation/recommendation.confidence.ts

import {
  RecommendationRequest,
  TechnologyRecommendation,
} from "./recommendation.types.js";

export class RecommendationConfidence {
  static calculate(
    request: RecommendationRequest,
    recommendations: TechnologyRecommendation[]
  ): number {
    if (recommendations.length === 0) {
      return 0;
    }

    let score = 0;

    // Average confidence from recommended technologies
    const technologyConfidence =
      recommendations.reduce(
        (total, technology) => total + technology.confidence,
        0
      ) / recommendations.length;

    score += technologyConfidence;

    // Requirement completeness bonus
    if (request.features.length >= 3) {
      score += 2;
    }

    if (request.description.length >= 100) {
      score += 2;
    }

    if (request.teamSize) {
      score += 1;
    }

    if (request.timeline) {
      score += 1;
    }

    if (request.budget) {
      score += 1;
    }

    if (request.expectedScale) {
      score += 1;
    }

    if (request.projectType) {
      score += 1;
    }

    if (request.deploymentPreference) {
      score += 1;
    }

    // Clamp between 0 and 100
    return Math.min(Math.round(score), 100);
  }
}