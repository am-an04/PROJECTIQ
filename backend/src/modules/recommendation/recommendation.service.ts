// src/modules/recommendation/recommendation.service.ts

import { RecommendationEngine } from "./recommendation.engine.js";
import { RecommendationCompare } from "./recommendation.compare.js";
import { RecommendationConfidence } from "./recommendation.confidence.js";
import { RecommendationExplainer } from "./recommendation.explainer.js";
import { RecommendationMapper } from "./recommendation.mapper.js";
import { RecommendationML } from "./recommendation.ml.js";
import { RequirementAnalyzer } from "./recommendation.requirement.js";

import {
  RecommendationRequest,
  RecommendationResult,
} from "./recommendation.types.js";

export class RecommendationService {
  static async generateRecommendation(
    request: RecommendationRequest
  ): Promise<RecommendationResult> {

    // Try ML recommendation first
    const mlRecommendation = await RecommendationML.predict(request);

    if (mlRecommendation) {
      return RecommendationMapper.toResponse(mlRecommendation);
    }

    // Analyze project requirements
    const requirementAnalysis =
      RequirementAnalyzer.analyze(request);

    // Generate rule-based recommendation
    const engineResult =
      RecommendationEngine.analyze(request);

    // Compare technologies
    const comparisons =
      RecommendationCompare.compare(
        engineResult.technologies
      );

    // Generate explanations
    const explanations =
      RecommendationExplainer.generate(
        engineResult.technologies
      );

    // Calculate confidence
    const overallConfidence =
      RecommendationConfidence.calculate(
        request,
        engineResult.technologies
      );

    // Build final response
    const result: RecommendationResult = {
      requirementAnalysis,

      domain: engineResult.domain,

      technologies: engineResult.technologies,

      comparisons,

      explanations,

      overallConfidence,
    };

    return RecommendationMapper.toResponse(result);
  }
}