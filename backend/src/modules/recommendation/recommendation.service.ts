// src/modules/recommendation/recommendation.service.ts

import { RecommendationEngine } from "./recommendation.engine.js";
import { RecommendationSelector } from "./recommendation.selector.js";
import { RecommendationStackBuilder } from "./recommendation.stack-builder.js";
import { RecommendationCompatibility } from "./recommendation.compatibility.js";
import { RecommendationCompare } from "./recommendation.compare.js";
import { RecommendationMapper } from "./recommendation.mapper.js";

import {
  RecommendationRequest,
  RecommendationResult,
} from "./recommendation.types.js";

export class RecommendationService {

  static async generateRecommendation(
    request: RecommendationRequest
  ): Promise<RecommendationResult> {

    // Step 1 - Generate recommendations
    const engineResult =
      await RecommendationEngine.analyze(request);

    // Step 2 - Select best technologies
    const selectedTechnologies =
      RecommendationSelector.select(
        engineResult.technologies
      );

    // Step 3 - Build recommended stack
    const stack =
      RecommendationStackBuilder.build(
        selectedTechnologies
      );

    // Step 4 - Calculate compatibility
    const compatibility =
      RecommendationCompatibility.compatibilityScore(
        selectedTechnologies.map(
          technology => technology.name
        )
      );

    // Step 5 - Generate comparisons
    const comparisons =
      RecommendationCompare.compare(
        selectedTechnologies
      );

    // Step 6 - Build response
    const result: RecommendationResult = {

      requirementAnalysis:
        engineResult.requirementAnalysis,

      technologies:
        selectedTechnologies,

      stack,

      compatibility,

      score:
        engineResult.score,

      explanation:
        engineResult.explanation,

      mlPrediction:
        engineResult.mlPrediction,

      comparisons,

    };

    return RecommendationMapper.toResponse(
      result
    );

  }

}