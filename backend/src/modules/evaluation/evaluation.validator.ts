// src/modules/recommendation/recommendation.validator.ts

import {
  TechnologyRecommendation,
} from "./recommendation.types.js";

export class RecommendationValidator {

  static validate(
    recommendations: TechnologyRecommendation[]
  ): boolean {

    return recommendations.length > 0;

  }

}