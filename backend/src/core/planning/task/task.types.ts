import {
  Milestone,
  Task,
} from "../../../modules/planning/planning.types.js";

export interface BuildTaskOptions {

  milestones: Milestone[];

}

export interface TaskEngine {

  build(
    options: BuildTaskOptions
  ): Task[];

}