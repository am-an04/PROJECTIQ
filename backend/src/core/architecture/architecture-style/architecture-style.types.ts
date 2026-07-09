import { RecommendationResult } from "../../../modules/recommendation/recommendation.types.js";
import { PlanningResult } from "../../../modules/planning/planning.types.js";
import { ArchitectureStyle } from "../../../modules/architecture/architecture.types.js";

export interface BuildArchitectureStyleOptions {

  recommendation: RecommendationResult;

  planning: PlanningResult;

}

export interface ArchitectureStyleMatch {

  style: ArchitectureStyle;

  confidence: number;

  reason: string;

}

export interface ArchitectureStyleEngine {

  build(
    options: BuildArchitectureStyleOptions
  ): ArchitectureStyle;

}