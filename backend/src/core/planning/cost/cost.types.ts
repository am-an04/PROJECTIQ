import {
  TechnologyRecommendation,
} from "../../../modules/recommendation/recommendation.types.js";

import {
  CostEstimate,
} from "../../../modules/planning/planning.types.js";

export interface BuildCostEstimateOptions {

  technologies: TechnologyRecommendation[];

}

export interface CostEngine {

  build(
    options: BuildCostEstimateOptions
  ): CostEstimate;

}