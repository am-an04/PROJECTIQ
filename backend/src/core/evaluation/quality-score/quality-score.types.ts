import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface QualityMetric {

  name: string;

  score: number;

  maxScore: number;

}

export interface QualityScoreResult {

  score: number;

  securityScore: number;

  scalabilityScore: number;

  maintainabilityScore: number;

  metrics: QualityMetric[];

  strengths: string[];

  weaknesses: string[];

  recommendations: string[];

}

export interface QualityScoreEngine {

   evaluate(
    context: EvaluationContext
  ): QualityScoreResult;

}