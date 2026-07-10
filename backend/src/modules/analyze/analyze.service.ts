import {
  AnalyzeRequest,
  AnalyzeResult,
} from "./analyze.types.js";
import {
  ImprovementService,
} from "../improvement/improvement.service.js";
import {
  RecommendationService,
} from "../recommendation/recommendation.service.js";

import {
  PlanningService,
} from "../planning/planning.service.js";

import {
  ArchitectureService,
} from "../architecture/architecture.service.js";
import {
  EvaluationService,
} from "../evaluation/evaluation.service.js";

import {
  AnalyticsService,
} from "../analytics/analytics.service.js";
export class AnalyzeService {

  private readonly planningService =
    new PlanningService();

  public async analyze(
    request: AnalyzeRequest
  ): Promise<AnalyzeResult> {

    /* =====================================================
       Recommendation
    ===================================================== */

    const recommendation =
      await RecommendationService.generateRecommendation(
        request
      );

    /* =====================================================
       Planning
    ===================================================== */

    const planning =
      this.planningService.generatePlan(
        recommendation
      );

    /* =====================================================
       Architecture
    ===================================================== */

    const architecture =
      ArchitectureService.generateArchitecture({

        recommendation,

        planning,

      });

    /* =====================================================
       Evaluation
    ===================================================== */

    const evaluation =
      EvaluationService.evaluate({

        recommendation,

        planning,

        architecture,

      });
      /* =====================================================
   Improvement
===================================================== */

const improvement =
  ImprovementService.generateImprovement({

    recommendation,

    planning,

    architecture,

    evaluation,

  });

  const analytics =
  AnalyticsService.generateAnalytics({

    recommendation,

    planning,

    architecture,

    evaluation,

    improvement,

  });

    /* =====================================================
       Final Result
    ===================================================== */

    return {

      recommendation,

      planning,

      architecture,

      evaluation,
      improvement,
      analytics,
    };

  }

}