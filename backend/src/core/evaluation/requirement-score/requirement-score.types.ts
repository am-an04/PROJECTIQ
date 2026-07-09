import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface RequirementScoreResult {

  score: number;

  strengths: string[];

  weaknesses: string[];

}

export interface RequirementScoreEngine {

  evaluate(
    context: EvaluationContext
  ): RequirementScoreResult;

}