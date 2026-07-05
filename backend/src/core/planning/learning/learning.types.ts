import {
  TechnologyRecommendation,
} from "../../../modules/recommendation/recommendation.types.js";

import {
  LearningPath,
} from "../../../modules/planning/planning.types.js";

export interface BuildLearningPathOptions {

  technologies: TechnologyRecommendation[];

}

export interface LearningEngine {

  build(
    options: BuildLearningPathOptions
  ): LearningPath;

}