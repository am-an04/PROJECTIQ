import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface ImprovementSuggestion {

  category: string;

  priority: "High" | "Medium" | "Low";

  title: string;

  description: string;

}

export interface ImprovementResult {

  suggestions: ImprovementSuggestion[];

}

export interface ImprovementEngine {

  evaluate(
    context: EvaluationContext
  ): ImprovementResult;

}