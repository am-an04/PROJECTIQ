import {
  ImprovementContext,
} from "./improvement.context.js";

import {
  ImprovementResult,
  ImprovementItem,
} from "../../modules/improvement/improvement.types.js";

import {
  DefaultTechnologyImprovementEngine,
} from "./technology-improvement/index.js";

import {
  DefaultArchitectureImprovementEngine,
} from "./architecture-improvement/index.js";

import {
  DefaultPlanningImprovementEngine,
} from "./planning-improvement/index.js";

import {
  DefaultSecurityImprovementEngine,
} from "./security-improvement/index.js";

import {
  DefaultResumeImprovementEngine,
} from "./resume-improvement/index.js";

import {
  DefaultPlacementImprovementEngine,
} from "./placement-improvement/index.js";

export class ImprovementOrchestrator {

  private readonly technologyEngine =
    new DefaultTechnologyImprovementEngine();

  private readonly architectureEngine =
    new DefaultArchitectureImprovementEngine();

  private readonly planningEngine =
    new DefaultPlanningImprovementEngine();

  private readonly securityEngine =
    new DefaultSecurityImprovementEngine();

  private readonly resumeEngine =
    new DefaultResumeImprovementEngine();

  private readonly placementEngine =
    new DefaultPlacementImprovementEngine();

  improve(
    context: ImprovementContext
  ): ImprovementResult {

    /* ==========================================
       Individual Engines
    ========================================== */

    context.technology =
      this.technologyEngine.improve(
        context
      );

    context.architectureImprovement =
      this.architectureEngine.improve(
        context
      );

    context.planningImprovement =
      this.planningEngine.improve(
        context
      );

    context.security =
      this.securityEngine.improve(
        context
      );

    context.resume =
      this.resumeEngine.improve(
        context
      );

    context.placement =
      this.placementEngine.improve(
        context
      );

    /* ==========================================
       Overall Suggestions
    ========================================== */

    const overallSuggestions: ImprovementItem[] = [

      ...context.technology.recommendations,

      ...context.architectureImprovement.recommendations,

      ...context.planningImprovement.recommendations,

      ...context.security.recommendations,

      ...context.resume.recommendations,

      ...context.placement.recommendations,

    ];

    /* ==========================================
       Final Result
    ========================================== */

    return {

      technology:
        context.technology,

      architecture:
        context.architectureImprovement,

      planning:
        context.planningImprovement,

      security:
        context.security,

      resume:
        context.resume,

      placement:
        context.placement,

      overallSuggestions,

      metadata: {

        generatedAt:
          new Date().toISOString(),

        improvementVersion:
          "1.0.0",

      },

    };

  }

}