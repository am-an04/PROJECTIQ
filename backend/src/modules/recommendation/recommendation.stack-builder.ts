// src/modules/recommendation/recommendation.stack-builder.ts

import {
  TechnologyRecommendation,
} from "./recommendation.types.js";

import {
  KnowledgeRoleService,
} from "../../core/knowledge/index.js";

export interface RecommendedStack {

  frontend?: TechnologyRecommendation;

  backend?: TechnologyRecommendation;

  language?: TechnologyRecommendation;

  database?: TechnologyRecommendation;

  cache?: TechnologyRecommendation;

  cloud?: TechnologyRecommendation;

  containerization?: TechnologyRecommendation;

  orchestration?: TechnologyRecommendation;

  cicd?: TechnologyRecommendation;

  ai?: TechnologyRecommendation;

}

export class RecommendationStackBuilder {

  static build(
    recommendations: TechnologyRecommendation[]
  ): RecommendedStack {

    const stack: RecommendedStack = {};

    for (const technology of recommendations) {

      const role =
        KnowledgeRoleService.getRole(
          technology.name
        );

      switch (role) {

        case "Frontend":

          stack.frontend ??= technology;
          break;

        case "Backend":

          stack.backend ??= technology;
          break;

        case "Language":

          stack.language ??= technology;
          break;

        case "Database":

          stack.database ??= technology;
          break;

        case "Cache":

          stack.cache ??= technology;
          break;

        case "Cloud":

          stack.cloud ??= technology;
          break;

        case "Containerization":

          stack.containerization ??= technology;
          break;

        case "Orchestration":

          stack.orchestration ??= technology;
          break;

        case "CI/CD":

          stack.cicd ??= technology;
          break;

        case "AI Framework":

          stack.ai ??= technology;
          break;

      }

    }

    return stack;

  }

}