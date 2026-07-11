import {
  RecommendationRequest,
  RecommendationResult,
} from "../recommendation/recommendation.types.js";
import {
  ImprovementResult,
} from "../improvement/improvement.types.js";
import {
  PlanningResult,
} from "../planning/planning.types.js";

import {
  ArchitectureResult,
} from "../architecture/architecture.types.js";

import {
  EvaluationResult,
} from "../evaluation/evaluation.types.js";
import {
  AnalyticsResult,
} from "../analytics/analytics.types.js";
/* ==========================================================
   Analyze Request
========================================================== */

export interface AnalyzeRequest
  extends RecommendationRequest {}

/* ==========================================================
   Analyze Result
========================================================== */

export interface AnalyzeResult {

  recommendation: RecommendationResult;

  planning: PlanningResult;

  architecture: ArchitectureResult;

  evaluation: EvaluationResult;
  
  improvement: ImprovementResult;
  analytics: AnalyticsResult;
}