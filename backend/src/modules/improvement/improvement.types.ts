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

/* ============================================================
   Request
============================================================ */

export interface ImprovementRequest {

  recommendation: RecommendationResult;

  planning: PlanningResult;

  architecture: ArchitectureResult;

  evaluation: EvaluationResult;

}

/* ============================================================
   Improvement Item
============================================================ */

export interface ImprovementItem {

  title: string;

  description: string;

  priority:
    | "Low"
    | "Medium"
    | "High"
    | "Critical";

}

/* ============================================================
   Technology Improvement
============================================================ */

export interface TechnologyImprovement {

  missingTechnologies: string[];

  recommendations: ImprovementItem[];

}

/* ============================================================
   Architecture Improvement
============================================================ */

export interface ArchitectureImprovement {

  missingComponents: string[];

  recommendations: ImprovementItem[];

}

/* ============================================================
   Planning Improvement
============================================================ */

export interface PlanningImprovement {

  missingTasks: string[];

  recommendations: ImprovementItem[];

}

/* ============================================================
   Security Improvement
============================================================ */

export interface SecurityImprovement {

  missingPractices: string[];

  recommendations: ImprovementItem[];

}

/* ============================================================
   Resume Improvement
============================================================ */

export interface ResumeImprovement {

  currentScore: number;

  targetScore: number;

  recommendations: ImprovementItem[];

}

/* ============================================================
   Placement Improvement
============================================================ */

export interface PlacementImprovement {

  currentScore: number;

  targetScore: number;

  recommendations: ImprovementItem[];

}

/* ============================================================
   Metadata
============================================================ */

export interface ImprovementMetadata {

  generatedAt: string;

  improvementVersion: string;

}

/* ============================================================
   Final Result
============================================================ */

export interface ImprovementResult {

  technology: TechnologyImprovement;

  architecture: ArchitectureImprovement;

  planning: PlanningImprovement;

  security: SecurityImprovement;

  resume: ResumeImprovement;

  placement: PlacementImprovement;

  overallSuggestions: ImprovementItem[];

  metadata: ImprovementMetadata;

}

/* ============================================================
   Engine
============================================================ */

export interface ImprovementEngine {

  improve(
    request: ImprovementRequest
  ): ImprovementResult;

}