import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  PlanningScoreEngine,
  PlanningScoreResult,
} from "./planning-score.types.js";

export class DefaultPlanningScoreEngine
  implements PlanningScoreEngine {

  evaluate(
    context: EvaluationContext
  ): PlanningScoreResult {

    const planning =
      context.planning;

    let score = 0;

    const strengths: string[] = [];

    const weaknesses: string[] = [];

    /**
     * Roadmap
     */

   if (
  planning.roadmap.milestones.length >= 5
){

      score += 25;

      strengths.push(
        "Detailed project roadmap."
      );

    } else {

      weaknesses.push(
        "Roadmap is too short."
      );

    }

    /**
     * Milestones
     */

    if (
  planning.roadmap.milestones.length >= 4
) {

      score += 20;

      strengths.push(
        "Well-defined milestones."
      );

    } else {

      weaknesses.push(
        "Few milestones defined."
      );

    }

    /**
     * Tasks
     */

    if (
      planning.tasks?.length >= 10
    ) {

      score += 20;

      strengths.push(
        "Comprehensive task breakdown."
      );

    } else {

      weaknesses.push(
        "Task breakdown is limited."
      );

    }

    /**
     * Timeline
     */

    if (
      planning.roadmap.estimatedDurationWeeks > 0
    ) {

      score += 15;

      strengths.push(
        "Project timeline estimated."
      );

    }

    /**
     * Learning Path
     */

    if (
  planning.learningPath.steps.length > 0
) {

  score += 10;

  strengths.push(
    "Learning roadmap included."
  );

} {

      score += 10;

      strengths.push(
        "Learning roadmap included."
      );

    }

    /**
     * Risk Assessment
     */

    if (
  planning.riskSummary.risks.length > 0
){

      score += 10;

      strengths.push(
        "Project risks identified."
      );

    }

    score = Math.min(score, 100);

    return {

      score,

      strengths,

      weaknesses,

    };

  }

}