import {
  TechnologyRecommendation,
} from "../../../modules/recommendation/recommendation.types.js";

import {
  RiskSummary,
} from "../../../modules/planning/planning.types.js";

export interface BuildRiskSummaryOptions {

  technologies: TechnologyRecommendation[];

}

export interface RiskEngine {

  build(
    options: BuildRiskSummaryOptions
  ): RiskSummary;

}