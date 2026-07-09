import { RecommendationResult } from "../../../modules/recommendation/recommendation.types.js";
import { PlanningResult } from "../../../modules/planning/planning.types.js";

export interface ScalingStrategy {

  title: string;

  description: string;

}

export interface ScalabilityResult {

  scalabilityLevel: "Small" | "Medium" | "Large" | "Enterprise";

  horizontalScaling: boolean;

  verticalScaling: boolean;

  autoScaling: boolean;

  caching: string[];

  loadBalancing: string[];

  databaseScaling: string[];

  messaging: string[];

  monitoring: string[];

  strategies: ScalingStrategy[];

}

export interface BuildScalabilityOptions {

  recommendation: RecommendationResult;

  planning: PlanningResult;

}

export interface ScalabilityEngine {

  build(
    options: BuildScalabilityOptions
  ): ScalabilityResult;

}