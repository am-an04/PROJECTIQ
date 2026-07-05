import {
  RequirementComplexity,
  DetectedDomain,
} from "../../requirement/index.js";

import {
  Roadmap,
} from "../../../modules/planning/planning.types.js";

export interface BuildRoadmapOptions {

  complexity: RequirementComplexity;

  detectedDomains: DetectedDomain[];

}

export interface RoadmapEngine {

  build(
    options: BuildRoadmapOptions
  ): Roadmap;

}