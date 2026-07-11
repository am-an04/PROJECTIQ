import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  PlanningImprovementEngine,
} from "./planning-improvement.types.js";

import {
  PlanningImprovement,
  ImprovementItem,
} from "../../../modules/improvement/improvement.types.js";

export class DefaultPlanningImprovementEngine
  implements PlanningImprovementEngine {

  improve(
    context: ImprovementContext
  ): PlanningImprovement {

    const planning =
      context.planning;

    const missingTasks: string[] = [];

    const recommendations: ImprovementItem[] = [];

    /* ==========================================
       Roadmap
    ========================================== */

    if (
      planning.roadmap.milestones.length < 5
    ) {

      missingTasks.push(
        "Additional Milestones"
      );

      recommendations.push({

        title: "Expand Project Roadmap",

        description:
          "Break the project into more detailed milestones.",

        priority: "High",

      });

    }

    /* ==========================================
       Tasks
    ========================================== */

    if (
      planning.tasks.length < 15
    ) {

      missingTasks.push(
        "Task Breakdown"
      );

      recommendations.push({

        title: "Increase Task Granularity",

        description:
          "Divide milestones into smaller actionable tasks.",

        priority: "High",

      });

    }

    /* ==========================================
       Learning Path
    ========================================== */

    if (
      planning.learningPath.steps.length < 3
    ) {

      missingTasks.push(
        "Learning Path"
      );

      recommendations.push({

        title: "Improve Learning Path",

        description:
          "Include prerequisite technologies and learning resources.",

        priority: "Medium",

      });

    }

    /* ==========================================
       Risks
    ========================================== */

    if (
      planning.riskSummary.risks.length < 3
    ) {

      missingTasks.push(
        "Risk Assessment"
      );

      recommendations.push({

        title: "Enhance Risk Planning",

        description:
          "Identify more project risks with mitigation strategies.",

        priority: "Medium",

      });

    }

    /* ==========================================
       Timeline
    ========================================== */

    if (
      planning.timeline.weeklyPlan.length < 4
    ) {

      missingTasks.push(
        "Weekly Timeline"
      );

      recommendations.push({

        title: "Improve Timeline",

        description:
          "Prepare a more detailed week-by-week execution plan.",

        priority: "Low",

      });

    }

    return {

      missingTasks,

      recommendations,

    };

  }

}