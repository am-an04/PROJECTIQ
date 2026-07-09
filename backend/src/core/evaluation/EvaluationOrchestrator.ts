import {
  EvaluationContext,
} from "./evaluation.context.js";

import {
  EvaluationResult,
  EvaluationMetric,
} from "../../modules/evaluation/evaluation.types.js";

export class EvaluationOrchestrator {

  evaluate(
    context: EvaluationContext
  ): EvaluationResult {

    const metrics: EvaluationMetric[] = [

      {
        name: "Requirements",
        score: context.requirementScore ?? 0,
        maxScore: 100,
        grade: this.calculateGrade(
          context.requirementScore ?? 0
        ),
        remarks: [],
      },

      {
        name: "Technology",
        score: context.technologyScore ?? 0,
        maxScore: 100,
        grade: this.calculateGrade(
          context.technologyScore ?? 0
        ),
        remarks: [],
      },

      {
        name: "Planning",
        score: context.planningScore ?? 0,
        maxScore: 100,
        grade: this.calculateGrade(
          context.planningScore ?? 0
        ),
        remarks: [],
      },

      {
        name: "Architecture",
        score: context.architectureScore ?? 0,
        maxScore: 100,
        grade: this.calculateGrade(
          context.architectureScore ?? 0
        ),
        remarks: [],
      },

      {
        name: "Security",
        score: context.securityScore ?? 0,
        maxScore: 100,
        grade: this.calculateGrade(
          context.securityScore ?? 0
        ),
        remarks: [],
      },

      {
        name: "Scalability",
        score: context.scalabilityScore ?? 0,
        maxScore: 100,
        grade: this.calculateGrade(
          context.scalabilityScore ?? 0
        ),
        remarks: [],
      },

      {
        name: "Maintainability",
        score: context.maintainabilityScore ?? 0,
        maxScore: 100,
        grade: this.calculateGrade(
          context.maintainabilityScore ?? 0
        ),
        remarks: [],
      },

    ];

    const overallScore =
      Math.round(

        metrics.reduce(

          (sum, metric) =>

            sum + metric.score,

          0

        ) / metrics.length

      );

    return {

      overallScore,

      overallGrade:
        this.calculateGrade(
          overallScore
        ),

      projectComplexity:
        this.calculateComplexity(
          overallScore
        ),

      placementReadiness:
        context.placementScore ?? overallScore,

      resumeImpact:
        context.resumeScore ?? overallScore,

      metrics,

      strengths:
        context.strengths ?? [],

      weaknesses:
        context.weaknesses ?? [],

      improvements:
        context.improvements ?? [],

      summary:
        context.summary ??
        "Evaluation completed successfully."

    };

  }

  private calculateGrade(
    score: number
  ): string {

    if (score >= 90) return "A+";

    if (score >= 80) return "A";

    if (score >= 70) return "B";

    if (score >= 60) return "C";

    return "D";

  }

  private calculateComplexity(
    score: number
  ): "Low" | "Medium" | "High" {

    if (score >= 85) {

      return "High";

    }

    if (score >= 60) {

      return "Medium";

    }

    return "Low";

  }

}