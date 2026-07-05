import {
  TechnologyRecommendation,
} from "../../../modules/recommendation/recommendation.types.js";

import {
  ResourcePlan,
} from "../../../modules/planning/planning.types.js";

export interface BuildResourcePlanOptions {

  technologies: TechnologyRecommendation[];

}

export interface ResourceEngine {

  build(
    options: BuildResourcePlanOptions
  ): ResourcePlan;

}