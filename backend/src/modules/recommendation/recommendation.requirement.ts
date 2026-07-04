// src/modules/recommendation/recommendation.requirement.ts

import { RequirementService } from "../../core/requirement/index.js";
import { RecommendationRequest } from "./recommendation.types.js";

export class RequirementAnalyzer {
  static analyze(request: RecommendationRequest) {
    const input = [
      request.title,
      request.description,
      ...request.features,
    ].join(" ");

    return RequirementService.analyze(input);
  }
}