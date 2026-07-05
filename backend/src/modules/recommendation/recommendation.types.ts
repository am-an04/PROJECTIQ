// src/modules/recommendation/recommendation.types.ts

import {
  RequirementAnalysis,
} from "../../core/requirement/index.js";

import {
  ScoreBreakdown,
} from "../../core/scoring/index.js";

import {
  ExplanationResult,
} from "../../core/explainability/index.js";

import {
  MLPredictionResponse,
} from "../../core/ml/index.js";

import {
  TechnologyCategory,
} from "../../core/knowledge/index.js";

/* ===========================================================
   Request
=========================================================== */

export type ExperienceLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface RecommendationRequest {

  title: string;

  description: string;

  features: string[];

  budget?: number;

  timeline?: number;

  teamSize?: number;

  experienceLevel?: ExperienceLevel;

  targetUsers?: number;

  expectedScale?:
    | "Small"
    | "Medium"
    | "Large"
    | "Enterprise";

  preferredTechnologies?: string[];

  constraints?: string[];

  deploymentPreference?:
    | "Cloud"
    | "On-Premise"
    | "Hybrid";

  projectType?:
    | "Technical"
    | "Non-Technical"
    | "Research";
}

/* ===========================================================
   Recommendation Reason
=========================================================== */

export interface RecommendationReason {

  selectedBecause: string[];

  weaknesses: string[];

  rejectedAlternatives: Array<{

    technology: string;

    reason: string;

  }>;
}

/* ===========================================================
   Technology Recommendation
=========================================================== */

export interface TechnologyRecommendation {

  name: string;

  category: TechnologyCategory;

  confidence: number;

  reasoning: RecommendationReason;
}

/* ===========================================================
   Recommended Stack
=========================================================== */

export interface RecommendedStack {

  frontend?: TechnologyRecommendation;

  backend?: TechnologyRecommendation;

  language?: TechnologyRecommendation;

  database?: TechnologyRecommendation;

  cache?: TechnologyRecommendation;

  cloud?: TechnologyRecommendation;

  containerization?: TechnologyRecommendation;

  orchestration?: TechnologyRecommendation;

  cicd?: TechnologyRecommendation;

  ai?: TechnologyRecommendation;
}

/* ===========================================================
   Technology Comparison
=========================================================== */

export interface TechnologyComparison {

  selected: string;

  alternatives: string[];

  strengths: string[];

  weaknesses: string[];

  rejectionReasons: Record<string, string>;
}

/* ===========================================================
   Final Response
=========================================================== */

export interface RecommendationResult {

  requirementAnalysis: RequirementAnalysis;

  /**
   * Ranked & selected technologies.
   */
  technologies: TechnologyRecommendation[];

  /**
   * Intelligent architecture stack.
   */
  stack?: RecommendedStack;

  /**
   * Overall stack compatibility (0–100).
   */
  compatibility?: number;

  /**
   * Project quality score.
   */
  score: ScoreBreakdown;

  /**
   * Human-readable explanation.
   */
  explanation: ExplanationResult;

  /**
   * ML prediction result.
   */
  mlPrediction: MLPredictionResponse;

  /**
   * Technology comparisons.
   */
  comparisons: TechnologyComparison[];
}