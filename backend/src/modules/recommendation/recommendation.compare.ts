// src/modules/recommendation/recommendation.compare.ts

import {
  TechnologyComparison,
  TechnologyRecommendation,
} from "./recommendation.types.js";

export class RecommendationCompare {
  static compare(
    recommendations: TechnologyRecommendation[]
  ): TechnologyComparison[] {
    return recommendations.map((recommendation) => ({
      selected: recommendation.name,

      alternatives: recommendation.reasoning.rejectedAlternatives.map(
        (alternative) => alternative.technology
      ),

      strengths: recommendation.reasoning.selectedBecause,

      weaknesses: [],

      rejectionReasons:
        recommendation.reasoning.rejectedAlternatives.reduce(
          (result, alternative) => {
            result[alternative.technology] = alternative.reason;

            return result;
          },
          {} as Record<string, string>
        ),
    }));
  }
}