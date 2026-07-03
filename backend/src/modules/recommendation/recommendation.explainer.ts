// src/modules/recommendation/recommendation.explainer.ts

import {
  RecommendationExplanation,
  TechnologyRecommendation,
} from "./recommendation.types.js";

export class RecommendationExplainer {
  static generate(
    recommendations: TechnologyRecommendation[]
  ): RecommendationExplanation[] {
    return recommendations.map((recommendation) => {
      const selectedReasons = recommendation.reasoning.selectedBecause.join(", ");

      const rejectedReasons = recommendation.reasoning.rejectedAlternatives
        .map(
          (alternative) =>
            `${alternative.technology} was not selected because ${alternative.reason}`
        )
        .join(" ");

      const weaknesses =
        recommendation.reasoning.weaknesses.length > 0
          ? ` Known limitations: ${recommendation.reasoning.weaknesses.join(", ")}.`
          : "";

      return {
        title: recommendation.name,
        explanation: `${recommendation.name} is recommended because ${selectedReasons}. ${rejectedReasons}.${weaknesses}`,
      };
    });
  }
}