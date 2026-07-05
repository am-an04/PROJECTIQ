import {
  Task,
  Timeline,
} from "../../../modules/planning/planning.types.js";

export interface BuildTimelineOptions {

  tasks: Task[];

}

export interface TimelineEngine {

  build(
    options: BuildTimelineOptions
  ): Timeline;

}