import {
  BuildResourcePlanOptions,
  ResourceEngine,
} from "./resource.types.js";

import {
  ResourcePlan,
} from "../../../modules/planning/planning.types.js";

export class DefaultResourceEngine
  implements ResourceEngine {

  public build(
    options: BuildResourcePlanOptions
  ): ResourcePlan {

    const recommendedRoles = new Set<string>();
    const requiredTools = new Set<string>();
    const requiredSoftware = new Set<string>();

    let recommendedTeamSize = 1;

    for (const technology of options.technologies) {

      switch (technology.category) {

        case "Language":
          recommendedRoles.add("Software Developer");
          break;

        case "Framework":
          recommendedRoles.add("Full Stack Developer");
          break;

        case "Database":
          recommendedRoles.add("Database Engineer");
          break;

        case "Cloud":
          recommendedRoles.add("Cloud Engineer");
          break;

        case "DevOps":
          recommendedRoles.add("DevOps Engineer");
          break;

        case "AI/ML":
          recommendedRoles.add("Machine Learning Engineer");
          break;

        default:
          recommendedRoles.add("Software Developer");

      }

      requiredTools.add(technology.name);

      requiredSoftware.add(technology.name);

    }

    if (recommendedRoles.size >= 5) {
      recommendedTeamSize = 5;
    } else if (recommendedRoles.size >= 3) {
      recommendedTeamSize = 3;
    } else if (recommendedRoles.size >= 2) {
      recommendedTeamSize = 2;
    }

    return {

      recommendedTeamSize,

      recommendedRoles: [...recommendedRoles],

      requiredTools: [...requiredTools],

      requiredSoftware: [...requiredSoftware],

    };

  }

}