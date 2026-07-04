// src/modules/recommendation/recommendation.ranker.ts

import {
  TechnologyRecommendation,
} from "./recommendation.types.js";

export class RecommendationRanker {

  static rank(
    technologies: TechnologyRecommendation[]
  ): TechnologyRecommendation[] {

    return [...technologies].sort(

      (a, b) => b.confidence - a.confidence

    );
  }

}