import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  ImprovementEngine,
  ImprovementResult,
  ImprovementSuggestion,
} from "./improvement.types.js";

export class DefaultImprovementEngine
  implements ImprovementEngine {

  evaluate(
    context: EvaluationContext
  ): ImprovementResult {

    const suggestions: ImprovementSuggestion[] = [];

    /* ==========================================
       Requirement Analysis
    ========================================== */

    if (
      context.requirementScore !== undefined &&
      context.requirementScore < 80
    ) {

      suggestions.push({

        category: "Requirements",

        priority: "High",

        title: "Improve Requirement Analysis",

        description:
          "Add more functional and non-functional requirements."

      });

    }

    /* ==========================================
       Technology
    ========================================== */

    if (
      context.technologyScore !== undefined &&
      context.technologyScore < 80
    ) {

      suggestions.push({

        category: "Technology",

        priority: "High",

        title: "Improve Technology Stack",

        description:
          "Use modern industry-standard technologies."

      });

    }

    /* ==========================================
       Architecture
    ========================================== */

    if (
      context.architectureScore !== undefined &&
      context.architectureScore < 80
    ) {

      suggestions.push({

        category: "Architecture",

        priority: "High",

        title: "Improve Architecture",

        description:
          "Increase modularity and component separation."

      });

    }

    /* ==========================================
       Planning
    ========================================== */

    if (
      context.planningScore !== undefined &&
      context.planningScore < 80
    ) {

      suggestions.push({

        category: "Planning",

        priority: "Medium",

        title: "Improve Project Planning",

        description:
          "Create more milestones and implementation tasks."

      });

    }

    /* ==========================================
       Quality
    ========================================== */

    if (
      context.securityScore !== undefined &&
      context.securityScore < 80
    ) {

      suggestions.push({

        category: "Security",

        priority: "High",

        title: "Improve Security",

        description:
          "Implement authentication, authorization and encryption."

      });

    }

    if (
      context.scalabilityScore !== undefined &&
      context.scalabilityScore < 80
    ) {

      suggestions.push({

        category: "Scalability",

        priority: "Medium",

        title: "Improve Scalability",

        description:
          "Introduce caching, monitoring and load balancing."

      });

    }

    if (
      context.maintainabilityScore !== undefined &&
      context.maintainabilityScore < 80
    ) {

      suggestions.push({

        category: "Maintainability",

        priority: "Medium",

        title: "Improve Maintainability",

        description:
          "Use clean architecture and modular design."

      });

    }

    return {

      suggestions,

    };

  }

}