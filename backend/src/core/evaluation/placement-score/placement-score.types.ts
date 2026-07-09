import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface PlacementScoreResult {

  score: number;

  strengths: string[];

  weaknesses: string[];

  recommendations: string[];

}

export interface PlacementScoreEngine {

  evaluate(
    context: EvaluationContext
  ): PlacementScoreResult;

}