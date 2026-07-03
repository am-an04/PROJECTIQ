// src/modules/recommendation/recommendation.requirement.ts

import {
  RecommendationRequest,
  RequirementAnalysis,
} from "./recommendation.types.js";

export class RequirementAnalyzer {
  static analyze(
    request: RecommendationRequest
  ): RequirementAnalysis {
    const keywords = [
      request.title,
      request.description,
      ...request.features,
    ]
      .join(" ")
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);

    let estimatedComplexity: "Low" | "Medium" | "High" = "Low";

    if (
      request.features.length >= 8 ||
      (request.teamSize ?? 0) >= 8 ||
      request.expectedScale === "Enterprise"
    ) {
      estimatedComplexity = "High";
    } else if (
      request.features.length >= 4 ||
      (request.teamSize ?? 0) >= 4 ||
      request.expectedScale === "Large"
    ) {
      estimatedComplexity = "Medium";
    }

    const technicalProject =
      request.projectType !== "Non-Technical";

    return {
      keywords,

      estimatedComplexity,

      technicalProject,

      detectedFeatures: request.features,
    };
  }
}