import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  PlacementImprovementEngine,
} from "./placement-improvement.types.js";

import {
  PlacementImprovement,
  ImprovementItem,
} from "../../../modules/improvement/improvement.types.js";

export class DefaultPlacementImprovementEngine
  implements PlacementImprovementEngine {

  improve(
    context: ImprovementContext
  ): PlacementImprovement {

    const recommendation =
      context.recommendation;

    const architecture =
      context.architecture;

    const evaluation =
      context.evaluation;

    const recommendations: ImprovementItem[] = [];

    const currentScore =
      evaluation.placementReadiness;

    const targetScore = 100;

    /* ==========================================
       Cloud
    ========================================== */

    if (
      !recommendation.technologies.some(
        technology =>
          technology.name.toLowerCase().includes("aws") ||
          technology.name.toLowerCase().includes("azure") ||
          technology.name.toLowerCase().includes("gcp")
      )
    ) {

      recommendations.push({

        title: "Learn Cloud Deployment",

        description:
          "Deploy the project on AWS, Azure or Google Cloud.",

        priority: "High",

      });

    }

    /* ==========================================
       Docker
    ========================================== */

    if (
      !architecture.deployment.containerization
    ) {

      recommendations.push({

        title: "Use Docker",

        description:
          "Containerize the application for production deployment.",

        priority: "High",

      });

    }

    /* ==========================================
       CI/CD
    ========================================== */

    recommendations.push({

      title: "Build CI/CD Pipeline",

      description:
        "Automate testing and deployment using GitHub Actions.",

      priority: "Medium",

    });

    /* ==========================================
       Testing
    ========================================== */

    recommendations.push({

      title: "Increase Test Coverage",

      description:
        "Add unit, integration and API tests using Jest or Vitest.",

      priority: "Medium",

    });

    /* ==========================================
       Documentation
    ========================================== */

    recommendations.push({

      title: "Improve Project Documentation",

      description:
        "Create architecture diagrams, API documentation and deployment guide.",

      priority: "Medium",

    });

    /* ==========================================
       Monitoring
    ========================================== */

    if (
      architecture.scalability.monitoring.length === 0
    ) {

      recommendations.push({

        title: "Implement Monitoring",

        description:
          "Use Prometheus and Grafana to monitor production systems.",

        priority: "Low",

      });

    }

    return {

      currentScore,

      targetScore,

      recommendations,

    };

  }

}