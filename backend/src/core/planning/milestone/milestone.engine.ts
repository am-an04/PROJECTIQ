import { randomUUID } from "crypto";

import {
  Milestone,
} from "../../../modules/planning/planning.types.js";

import {
  BuildMilestoneOptions,
  MilestoneEngine,
} from "./milestone.types.js";

export class DefaultMilestoneEngine
  implements MilestoneEngine {

  public build(
    options: BuildMilestoneOptions
  ): Milestone[] {

    return options.phases.map(
      (phase, index): Milestone => ({

        id: randomUUID(),

        title: phase.title,

        description: phase.description,

        order: index + 1,

        estimatedDuration:
          `${phase.defaultDurationWeeks} Week${
            phase.defaultDurationWeeks > 1 ? "s" : ""
          }`,

        deliverables:
          phase.deliverables,

      })
    );

  }

}