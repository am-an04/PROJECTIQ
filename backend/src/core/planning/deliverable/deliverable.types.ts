import {
  Milestone,
  Deliverable,
} from "../../../modules/planning/planning.types.js";

export interface BuildDeliverableOptions {

  milestones: Milestone[];

}

export interface DeliverableEngine {

  build(
    options: BuildDeliverableOptions
  ): Deliverable[];

}