// src/modules/recommendation/recommendation.mapper.ts

import { RecommendationResult } from "./recommendation.types.js";

export class RecommendationMapper {
  static toResponse(
    recommendation: RecommendationResult
  ): RecommendationResult {
    return {
      requirementAnalysis: recommendation.requirementAnalysis,

      domain: recommendation.domain,

      technologies: recommendation.technologies,

      comparisons: recommendation.comparisons,

      explanations: recommendation.explanations,

      overallConfidence: recommendation.overallConfidence,
    };
  }
}