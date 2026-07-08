// src/modules/recommendation/recommendation.compare.ts

import { TechnologyRecommendation } from "./recommendation.types.js";

export class RecommendationCompare {

  static compare(
    technologies: TechnologyRecommendation[]
  ) {

    return technologies.map((technology) => ({

      selected: technology.name,

      alternatives:
        technology.reasoning.rejectedAlternatives.map(
          (alternative) => alternative.technology
        ),

      strengths:
        technology.reasoning.selectedBecause,

      weaknesses:
        technology.reasoning.weaknesses,

      rejectionReasons:
        technology.reasoning.rejectedAlternatives.reduce(
          (result, alternative) => {

            result[alternative.technology] =
              alternative.reason;

            return result;

          },
          {} as Record<string, string>
        ),
    }));
  }
}