import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface ResumeScoreResult {

  score: number;

  strengths: string[];

  weaknesses: string[];

  recommendations: string[];

}

export interface ResumeScoreEngine {

  evaluate(
    context: EvaluationContext
  ): ResumeScoreResult;

}