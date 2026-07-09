import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface TechnologyScoreResult {

  score: number;

  strengths: string[];

  weaknesses: string[];

}

export interface TechnologyScoreEngine {

  evaluate(
    context: EvaluationContext
  ): TechnologyScoreResult;

}