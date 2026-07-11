import {
  AnalyticsContext,
} from "./analytics.context.js";

import {
  AnalyticsResult,
} from "../../modules/analytics/analytics.types.js";

import {
  DefaultSuccessPredictionEngine,
} from "./success-prediction/index.js";

import {
  DefaultIndustryReadinessEngine,
} from "./industry-readiness/index.js";

import {
  DefaultTechnicalMaturityEngine,
} from "./technical-maturity/index.js";

import {
  DefaultInnovationScoreEngine,
} from "./innovation-score/index.js";

import {
  DefaultComplexityAnalysisEngine,
} from "./complexity-analysis/index.js";

import {
  DefaultResumeImpactEngine,
} from "./resume-impact/index.js";

import {
  DefaultPlacementReadinessEngine,
} from "./placement-readiness/index.js";

export class AnalyticsOrchestrator {

  private readonly successPredictionEngine =
    new DefaultSuccessPredictionEngine();

  private readonly industryReadinessEngine =
    new DefaultIndustryReadinessEngine();

  private readonly technicalMaturityEngine =
    new DefaultTechnicalMaturityEngine();

  private readonly innovationEngine =
    new DefaultInnovationScoreEngine();

  private readonly complexityEngine =
    new DefaultComplexityAnalysisEngine();

  private readonly resumeImpactEngine =
    new DefaultResumeImpactEngine();

  private readonly placementReadinessEngine =
    new DefaultPlacementReadinessEngine();

  analyze(
    context: AnalyticsContext
  ): AnalyticsResult {

    /* =====================================================
       Success Prediction
    ===================================================== */

    context.successPrediction =
      this.successPredictionEngine.analyze(
        context
      );

    /* =====================================================
       Industry Readiness
    ===================================================== */

    context.industryReadiness =
      this.industryReadinessEngine.analyze(
        context
      );

    /* =====================================================
       Technical Maturity
    ===================================================== */

    context.technicalMaturity =
      this.technicalMaturityEngine.analyze(
        context
      );

    /* =====================================================
       Innovation
    ===================================================== */

    context.innovation =
      this.innovationEngine.analyze(
        context
      );

    /* =====================================================
       Complexity
    ===================================================== */

    context.complexity =
      this.complexityEngine.analyze(
        context
      );

    /* =====================================================
       Resume Impact
    ===================================================== */

    context.resumeImpact =
      this.resumeImpactEngine.analyze(
        context
      );

    /* =====================================================
       Placement Readiness
    ===================================================== */

    context.placementReadiness =
      this.placementReadinessEngine.analyze(
        context
      );

    /* =====================================================
       Overall Analytics
    ===================================================== */

    const overallScore = Math.round(

      (

        context.successPrediction.score +

        context.industryReadiness.score +

        context.technicalMaturity.score +

        context.innovation.score +

        context.complexity.score +

        context.resumeImpact.score +

        context.placementReadiness.score

      ) / 7

    );

    let overallGrade = "D";

    if (overallScore >= 90) {

      overallGrade = "A+";

    }

    else if (overallScore >= 80) {

      overallGrade = "A";

    }

    else if (overallScore >= 70) {

      overallGrade = "B";

    }

    else if (overallScore >= 60) {

      overallGrade = "C";

    }

    return {

      successPrediction:
        context.successPrediction,

      industryReadiness:
        context.industryReadiness,

      technicalMaturity:
        context.technicalMaturity,

      innovation:
        context.innovation,

      complexity:
        context.complexity,

      resumeImpact:
        context.resumeImpact,

      placementReadiness:
        context.placementReadiness,

      overallAnalytics: {

        overallScore,

        overallGrade,

        strengths: [

          "Modular architecture",

          "Explainable analytics",

          "Production-ready design",

        ],

        weaknesses: [],

        summary:

          "Analytics generated successfully by ProjectIQ.",

      },

      metadata: {

        generatedAt:

          new Date().toISOString(),

        analyticsVersion:

          "1.0.0",

      },

    };

  }

}