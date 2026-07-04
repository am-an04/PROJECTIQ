// src/modules/recommendation/recommendation.mapper.ts

import { Technology } from "../../core/knowledge/index.js";

import {
  RecommendationResult,
  TechnologyRecommendation,
} from "./recommendation.types.js";

export class RecommendationMapper {

  /**
   * Converts a Technology into a TechnologyRecommendation.
   *
   * @param technology Technology from Knowledge Base
   * @param matchingScore Score calculated by RecommendationMatcher (0-100)
   */
  static toTechnologyRecommendation(
    technology: Technology,
    matchingScore: number
  ): TechnologyRecommendation {

    // Final confidence combines:
    // 70% project-specific matching
    // 30% technology quality

    const confidence = Math.round(
      matchingScore * 0.7 +
      technology.recommendationScore * 0.3
    );

    return {

      name: technology.name,

      category: technology.category,

      confidence: Math.min(confidence, 100),

      reasoning: {

        selectedBecause: technology.strengths,

        weaknesses: technology.weaknesses,

        rejectedAlternatives:
          technology.alternatives.map(
            alternative => ({

              technology: alternative,

              reason:
                `${technology.name} better satisfies the detected project requirements.`

            })
          )

      }

    };

  }

  /**
   * Final API response mapper.
   */
  static toResponse(
    recommendation: RecommendationResult
  ): RecommendationResult {

    return recommendation;

  }

}