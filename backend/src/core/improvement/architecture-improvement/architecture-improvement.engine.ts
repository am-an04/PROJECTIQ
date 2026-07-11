import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  ArchitectureImprovementEngine,
} from "./architecture-improvement.types.js";

import {
  ArchitectureImprovement,
  ImprovementItem,
} from "../../../modules/improvement/improvement.types.js";

export class DefaultArchitectureImprovementEngine
  implements ArchitectureImprovementEngine {

  improve(
    context: ImprovementContext
  ): ArchitectureImprovement {

    const architecture =
      context.architecture;

    const missingComponents: string[] = [];

    const recommendations: ImprovementItem[] = [];

    /* ==========================================
       API Documentation
    ========================================== */

    if (
      architecture.apiDesign.endpoints.length < 10
    ) {

      missingComponents.push(
        "More REST Endpoints"
      );

      recommendations.push({

        title: "Expand API Design",

        description:
          "Add CRUD endpoints for all major entities.",

        priority: "Medium",

      });

    }

    /* ==========================================
       Monitoring
    ========================================== */

    if (
      !architecture.scalability.monitoring.includes(
        "Prometheus"
      )
    ) {

      missingComponents.push(
        "Monitoring"
      );

      recommendations.push({

        title: "Add Monitoring",

        description:
          "Integrate Prometheus and Grafana for monitoring.",

        priority: "High",

      });

    }

    /* ==========================================
       Load Balancer
    ========================================== */

    if (
      !architecture.scalability.loadBalancing
    ) {

      missingComponents.push(
        "Load Balancer"
      );

      recommendations.push({

        title: "Horizontal Scaling",

        description:
          "Introduce a load balancer to improve scalability.",

        priority: "High",

      });

    }

    /* ==========================================
       Docker
    ========================================== */

    if (
      !architecture.deployment.containerization
    ) {

      missingComponents.push(
        "Containerization"
      );

      recommendations.push({

        title: "Dockerize Application",

        description:
          "Use Docker for deployment consistency.",

        priority: "High",

      });

    }

    /* ==========================================
       Components
    ========================================== */

    if (
      architecture.components.length < 8
    ) {

      missingComponents.push(
        "Additional Modules"
      );

      recommendations.push({

        title: "Increase Modularity",

        description:
          "Split responsibilities into dedicated components.",

        priority: "Medium",

      });

    }

    return {

      missingComponents,

      recommendations,

    };

  }

}