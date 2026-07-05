import {
  Deliverable,
} from "../../../modules/planning/planning.types.js";

import {
  BuildDeliverableOptions,
  DeliverableEngine,
} from "./deliverable.types.js";

export class DefaultDeliverableEngine
  implements DeliverableEngine {

  public build(
    options: BuildDeliverableOptions
  ): Deliverable[] {

    return options.milestones.map((milestone) => ({

      title: milestone.title,

      description:
        `Complete ${milestone.title}`,

      milestoneId: milestone.id,

    }));

  }

}