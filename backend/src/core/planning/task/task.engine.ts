import { randomUUID } from "crypto";

import {
  Task,
  Milestone,
} from "../../../modules/planning/planning.types.js";

import {
  BuildTaskOptions,
  TaskEngine,
} from "./task.types.js";

export class DefaultTaskEngine implements TaskEngine {

  public build(
    options: BuildTaskOptions
  ): Task[] {

    const tasks: Task[] = [];

    for (const milestone of options.milestones) {

      tasks.push(...this.generateTasks(milestone));

    }

    return tasks;

  }

  /**
   * Generate default tasks for a milestone.
   */
  private generateTasks(
    milestone: Milestone
  ): Task[] {

    return [

      {
        id: randomUUID(),

        milestoneId: milestone.id,

        title: `Analyze ${milestone.title}`,

        description:
          `Analyze requirements for ${milestone.title}.`,

        estimatedHours: 4,

        priority: "High",

        dependencies: [],
      },

      {
        id: randomUUID(),

        milestoneId: milestone.id,

        title: `Implement ${milestone.title}`,

        description:
          `Complete implementation of ${milestone.title}.`,

        estimatedHours: 16,

        priority: "High",

        dependencies: [],
      },

      {
        id: randomUUID(),

        milestoneId: milestone.id,

        title: `Review ${milestone.title}`,

        description:
          `Review completed work for ${milestone.title}.`,

        estimatedHours: 2,

        priority: "Medium",

        dependencies: [],
      },

    ];

  }

}