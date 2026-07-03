// src/modules/recommendation/recommendation.engine.ts

import {
  DomainResult,
  RecommendationRequest,
  TechnologyRecommendation,
} from "./recommendation.types.js";

import { DOMAIN_KNOWLEDGE_BASE } from "./recommendation.data.js";
import { DomainIdentifier } from "./recommendation.domain.js";

export interface RecommendationEngineResult {
  domain: DomainResult;
  technologies: TechnologyRecommendation[];
}

export class RecommendationEngine {
  static analyze(
    request: RecommendationRequest
  ): RecommendationEngineResult {
    const input = [
      request.title,
      request.description,
      ...request.features,
    ].join(" ");

    const domain = DomainIdentifier.identify(input);

    const knowledge = DOMAIN_KNOWLEDGE_BASE.find(
      (item) => item.domain === domain.domain
    );

    return {
      domain,
      technologies: knowledge?.technologies ?? [],
    };
  }
}