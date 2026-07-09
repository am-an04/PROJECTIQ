import {
  EvaluationContext,
} from "../evaluation.context.js";

export interface EvaluationSection {

  title: string;

  content: string[];

}

export interface EvaluationReport {

  title: string;

  generatedAt: string;

  version: string;

  overallScore: number;

  grade: string;

  placementReadiness: number;

  resumeImpact: number;

  sections: EvaluationSection[];

}

export interface ReportEngine {

  build(
    context: EvaluationContext
  ): EvaluationReport;

}