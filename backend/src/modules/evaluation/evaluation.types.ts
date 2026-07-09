import {
  RecommendationResult,
} from "../recommendation/recommendation.types.js";

import {
  PlanningResult,
} from "../planning/planning.types.js";

import {
  ArchitectureResult,
} from "../architecture/architecture.types.js";

/* ============================================================
   Request
============================================================ */

export interface EvaluationRequest {

  recommendation: RecommendationResult;

  planning: PlanningResult;

  architecture: ArchitectureResult;

}

/* ============================================================
   Individual Score
============================================================ */

export interface EvaluationMetric {

  name: string;

  score: number;

  maxScore: number;

  grade: string;

  remarks: string[];

}

/* ============================================================
   Overall Evaluation
============================================================ */

export interface EvaluationResult {

  overallScore: number;

  overallGrade: string;

  projectComplexity:
    | "Low"
    | "Medium"
    | "High";

  placementReadiness: number;

  resumeImpact: number;

  metrics: EvaluationMetric[];

  strengths: string[];

  weaknesses: string[];

  improvements: string[];

  summary: string;

}

/* ============================================================
   Engine
============================================================ */

export interface IEvaluationEngine {

  evaluate(
    request: EvaluationRequest
  ): EvaluationResult;

}