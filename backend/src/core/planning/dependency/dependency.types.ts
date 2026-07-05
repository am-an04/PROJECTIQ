import {
  Task,
  Dependency,
} from "../../../modules/planning/planning.types.js";

export interface BuildDependencyOptions {

  tasks: Task[];

}

export interface DependencyEngine {

  build(
    options: BuildDependencyOptions
  ): Dependency[];

}