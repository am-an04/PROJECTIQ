// src/modules/recommendation/recommendation.selector.ts

import { KnowledgeRoleService } from "../../core/knowledge/index.js";

import { TechnologyRecommendation } from "./recommendation.types.js";

export class RecommendationSelector {

  static select(
    recommendations: TechnologyRecommendation[]
  ): TechnologyRecommendation[] {

    const selected = new Map<
      string,
      TechnologyRecommendation
    >();

    for (const recommendation of recommendations) {

      const role =
        KnowledgeRoleService.getRole(
          recommendation.name
        );

      if (!role) {
        continue;
      }

      const existing =
        selected.get(role);

      if (
        !existing ||
        recommendation.confidence >
          existing.confidence
      ) {

        selected.set(
          role,
          recommendation
        );

      }

    }

    return Array.from(
      selected.values()
    );

  }

}