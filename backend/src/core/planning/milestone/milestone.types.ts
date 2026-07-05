import {
  Milestone,
} from "../../../modules/planning/planning.types.js";

import {
  DevelopmentPhase,
} from "../../knowledge/index.js";

export interface BuildMilestoneOptions {

  phases: DevelopmentPhase[];

}

export interface MilestoneEngine {

  build(
    options: BuildMilestoneOptions
  ): Milestone[];

}