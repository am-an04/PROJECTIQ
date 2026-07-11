import {
  RecommendationResult,
} from "../../modules/recommendation/recommendation.types.js";

import {
  PlanningResult,
} from "../../modules/planning/planning.types.js";

import {
  ArchitectureResult,
} from "../../modules/architecture/architecture.types.js";

import {
  EvaluationResult,
} from "../../modules/evaluation/evaluation.types.js";

import {
  ImprovementResult,
} from "../../modules/improvement/improvement.types.js";

import {
  SuccessPrediction,
  IndustryReadiness,
  TechnicalMaturity,
  InnovationScore,
  ComplexityAnalysis,
  ResumeImpact,
  PlacementReadiness,
} from "../../modules/analytics/analytics.types.js";

export interface AnalyticsContext {

  /* ============================================================
     Input
  ============================================================ */

  recommendation: RecommendationResult;

  planning: PlanningResult;

  architecture: ArchitectureResult;

  evaluation: EvaluationResult;

  improvement: ImprovementResult;

  /* ============================================================
     Engine Outputs
  ============================================================ */

  successPrediction?: SuccessPrediction;

  industryReadiness?: IndustryReadiness;

  technicalMaturity?: TechnicalMaturity;

  innovation?: InnovationScore;

  complexity?: ComplexityAnalysis;

  resumeImpact?: ResumeImpact;

  placementReadiness?: PlacementReadiness;

}