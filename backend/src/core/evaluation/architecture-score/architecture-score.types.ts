import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface ArchitectureScoreResult {

  score: number;

  strengths: string[];

  weaknesses: string[];

}

export interface ArchitectureScoreEngine {

  evaluate(
    context: EvaluationContext
  ): ArchitectureScoreResult;

}