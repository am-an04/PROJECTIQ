import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  TechnologyImprovementEngine,
} from "./technology-improvement.types.js";

import {
  TechnologyImprovement,
  ImprovementItem,
} from "../../../modules/improvement/improvement.types.js";

export class DefaultTechnologyImprovementEngine
  implements TechnologyImprovementEngine {

  improve(
    context: ImprovementContext
  ): TechnologyImprovement {

    const technologies =
      context.recommendation.technologies;

    const technologyNames =
      technologies.map(
        technology => technology.name.toLowerCase()
      );

    const missingTechnologies: string[] = [];

    const recommendations: ImprovementItem[] = [];

    /* ==========================================
       Redis
    ========================================== */

    if (
      !technologyNames.includes("redis")
    ) {

      missingTechnologies.push("Redis");

      recommendations.push({

        title: "Add Redis",

        description:
          "Use Redis for caching and performance optimization.",

        priority: "High",

      });

    }

    /* ==========================================
       Docker
    ========================================== */

    if (
      !technologyNames.includes("docker")
    ) {

      missingTechnologies.push("Docker");

      recommendations.push({

        title: "Containerize Application",

        description:
          "Use Docker for consistent deployment.",

        priority: "High",

      });

    }

    /* ==========================================
       Swagger
    ========================================== */

    if (
      !technologyNames.includes("swagger")
    ) {

      missingTechnologies.push("Swagger");

      recommendations.push({

        title: "API Documentation",

        description:
          "Generate API documentation using Swagger/OpenAPI.",

        priority: "Medium",

      });

    }

    /* ==========================================
       CI/CD
    ========================================== */

    if (
      !technologyNames.includes("github actions")
    ) {

      missingTechnologies.push(
        "GitHub Actions"
      );

      recommendations.push({

        title: "CI/CD Pipeline",

        description:
          "Automate testing and deployment using GitHub Actions.",

        priority: "Medium",

      });

    }

    return {

      missingTechnologies,

      recommendations,

    };

  }

}