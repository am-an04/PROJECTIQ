import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface PlanningScoreResult {

  score: number;

  strengths: string[];

  weaknesses: string[];

}

export interface PlanningScoreEngine {

  evaluate(
    context: EvaluationContext
  ): PlanningScoreResult;

}