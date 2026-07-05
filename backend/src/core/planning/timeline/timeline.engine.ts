import {
  Timeline,
  WeeklyPlan,
  Task,
} from "../../../modules/planning/planning.types.js";

import {
  BuildTimelineOptions,
  TimelineEngine,
} from "./timeline.types.js";

export class DefaultTimelineEngine implements TimelineEngine {

  public build(
    options: BuildTimelineOptions
  ): Timeline {

    const weeklyPlan: WeeklyPlan[] = [];

    let currentWeek = 1;

    for (const task of options.tasks) {

      const objectives: string[] = [];

      objectives.push(task.title);

      weeklyPlan.push({

        week: currentWeek,

        title: task.title,

        objectives,

      });

      currentWeek++;

    }

    return {

      totalWeeks: weeklyPlan.length,

      startPhase:
        options.tasks.length > 0
          ? options.tasks[0].title
          : "",

      endPhase:
        options.tasks.length > 0
          ? options.tasks[options.tasks.length - 1].title
          : "",

      weeklyPlan,

    };

  }

}