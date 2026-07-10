import {
  RecommendationResult,
} from "../recommendation/recommendation.types.js";

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
  ImprovementResult,
} from "../improvement/improvement.types.js";

/* ============================================================
   Request
============================================================ */

export interface AnalyticsRequest {

  recommendation: RecommendationResult;

  planning: PlanningResult;

  architecture: ArchitectureResult;

  evaluation: EvaluationResult;

  improvement: ImprovementResult;

}

/* ============================================================
   Success Prediction
============================================================ */

export interface SuccessPrediction {

  score: number;

  probability:
    | "Very Low"
    | "Low"
    | "Medium"
    | "High"
    | "Very High";

  reasoning: string[];

}

/* ============================================================
   Industry Readiness
============================================================ */

export interface IndustryReadiness {

  score: number;

  level:
    | "Beginner"
    | "Intermediate"
    | "Advanced"
    | "Production Ready";

}

/* ============================================================
   Technical Maturity
============================================================ */

export interface TechnicalMaturity {

  score: number;

  level:
    | "Basic"
    | "Intermediate"
    | "Advanced"
    | "Production Ready";

}

/* ============================================================
   Innovation Score
============================================================ */

export interface InnovationScore {

  score: number;

  level:
    | "Low"
    | "Medium"
    | "High"
    | "Excellent";

}

/* ============================================================
   Complexity Analysis
============================================================ */

export interface ComplexityAnalysis {

  score: number;

  level:
    | "Simple"
    | "Moderate"
    | "Complex"
    | "Enterprise";

}

/* ============================================================
   Resume Impact
============================================================ */

export interface ResumeImpact {

  score: number;

  level:
    | "Average"
    | "Good"
    | "Excellent";

}

/* ============================================================
   Placement Readiness
============================================================ */

export interface PlacementReadiness {

  score: number;

  level:
    | "Low"
    | "Moderate"
    | "High"
    | "Excellent";

}

/* ============================================================
   Overall Analytics
============================================================ */

export interface OverallAnalytics {

  overallScore: number;

  overallGrade: string;

  strengths: string[];

  weaknesses: string[];

  summary: string;

}

/* ============================================================
   Metadata
============================================================ */

export interface AnalyticsMetadata {

  generatedAt: string;

  analyticsVersion: string;

}

/* ============================================================
   Final Result
============================================================ */

export interface AnalyticsResult {

  successPrediction: SuccessPrediction;

  industryReadiness: IndustryReadiness;

  technicalMaturity: TechnicalMaturity;

  innovation: InnovationScore;

  complexity: ComplexityAnalysis;

  resumeImpact: ResumeImpact;

  placementReadiness: PlacementReadiness;

  overallAnalytics: OverallAnalytics;

  metadata: AnalyticsMetadata;

}

/* ============================================================
   Engine
============================================================ */

export interface AnalyticsEngine {

  analyze(
    request: AnalyticsRequest
  ): AnalyticsResult;

}