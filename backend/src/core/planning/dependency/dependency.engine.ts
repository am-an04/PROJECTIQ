import {
  Dependency,
} from "../../../modules/planning/planning.types.js";

import {
  BuildDependencyOptions,
  DependencyEngine,
} from "./dependency.types.js";

export class DefaultDependencyEngine
  implements DependencyEngine {

  public build(
    options: BuildDependencyOptions
  ): Dependency[] {

    const dependencies: Dependency[] = [];

    const tasks = options.tasks;

    for (let i = 1; i < tasks.length; i++) {

      dependencies.push({

        source: tasks[i - 1].id,

        target: tasks[i].id,

      });

    }

    return dependencies;

  }

}