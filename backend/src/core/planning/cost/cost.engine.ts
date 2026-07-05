import {
  CostEstimate,
  CostItem,
} from "../../../modules/planning/planning.types.js";

import {
  BuildCostEstimateOptions,
  CostEngine,
} from "./cost.types.js";

export class DefaultCostEngine
  implements CostEngine {

  public build(
    options: BuildCostEstimateOptions
  ): CostEstimate {

    const infrastructure: CostItem[] = [];

    const software: CostItem[] = [];

    let totalEstimatedCost = 0;

    for (const technology of options.technologies) {

      switch (technology.category) {

        case "Cloud":

          infrastructure.push({

            name: technology.name,

            estimatedCost: 50,

          });

          totalEstimatedCost += 50;

          break;

        case "Database":

          infrastructure.push({

            name: technology.name,

            estimatedCost: 25,

          });

          totalEstimatedCost += 25;

          break;

        case "Framework":

        case "Language":

        case "Tool":

        case "DevOps":

        case "AI/ML":

          software.push({

            name: technology.name,

            estimatedCost: 0,

          });

          break;

        default:

          software.push({

            name: technology.name,

            estimatedCost: 0,

          });

      }

    }

    return {

      infrastructure,

      software,

      totalEstimatedCost,

      currency: "USD",

    };

  }

}