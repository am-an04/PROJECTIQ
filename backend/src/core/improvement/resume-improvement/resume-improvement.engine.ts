import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  ResumeImprovementEngine,
} from "./resume-improvement.types.js";

import {
  ResumeImprovement,
  ImprovementItem,
} from "../../../modules/improvement/improvement.types.js";

export class DefaultResumeImprovementEngine
  implements ResumeImprovementEngine {

  improve(
    context: ImprovementContext
  ): ResumeImprovement {

    const recommendation =
      context.recommendation;

    const architecture =
      context.architecture;

    const evaluation =
      context.evaluation;

    const recommendations: ImprovementItem[] = [];

    let currentScore =
      evaluation.resumeImpact;

    const targetScore = 100;

    /* ==========================================
       Technology Diversity
    ========================================== */

    if (
      recommendation.technologies.length < 8
    ) {

      recommendations.push({

        title: "Expand Technology Stack",

        description:
          "Include additional modern technologies such as Redis, Kubernetes, GraphQL or Elasticsearch.",

        priority: "High",

      });

    }

    /* ==========================================
       Architecture
    ========================================== */

    if (
      architecture.components.length < 8
    ) {

      recommendations.push({

        title: "Improve Project Architecture",

        description:
          "Design more modular components to demonstrate software architecture skills.",

        priority: "Medium",

      });

    }

    /* ==========================================
       Deployment
    ========================================== */

    if (
      !architecture.deployment.containerization
    ) {

      recommendations.push({

        title: "Containerize the Project",

        description:
          "Deploy the project using Docker to improve resume value.",

        priority: "High",

      });

    }

    /* ==========================================
       Documentation
    ========================================== */

    recommendations.push({

      title: "Prepare Professional Documentation",

      description:
        "Include README, API documentation, architecture diagrams and setup guide.",

      priority: "Medium",

    });

    /* ==========================================
       Testing
    ========================================== */

    recommendations.push({

      title: "Add Unit & Integration Tests",

      description:
        "Include Jest or Vitest test coverage to improve industry readiness.",

      priority: "Medium",

    });

    return {

      currentScore,

      targetScore,

      recommendations,

    };

  }

}