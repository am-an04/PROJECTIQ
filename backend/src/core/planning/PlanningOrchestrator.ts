import {
  RecommendationResult,
} from "../../modules/recommendation/recommendation.types.js";

import {
  PlanningResult,
} from "../../modules/planning/planning.types.js";

import {
  DefaultRoadmapEngine,
} from "./roadmap/index.js";

import {
  DefaultMilestoneEngine,
} from "./milestone/index.js";

import {
  DefaultTaskEngine,
} from "./task/index.js";

import {
  DefaultTimelineEngine,
} from "./timeline/index.js";

import {
  DefaultLearningEngine,
} from "./learning/index.js";

import {
  DefaultResourceEngine,
} from "./resource/index.js";

import {
  DefaultCostEngine,
} from "./cost/index.js";

import {
  DefaultRiskEngine,
} from "./risk/index.js";

import {
  DefaultDependencyEngine,
} from "./dependency/index.js";

import {
  DefaultDeliverableEngine,
} from "./deliverable/index.js";

import {
  KnowledgeService,
} from "../knowledge/index.js";

export class PlanningOrchestrator {

  private readonly roadmapEngine = new DefaultRoadmapEngine();

  private readonly milestoneEngine = new DefaultMilestoneEngine();

  private readonly taskEngine = new DefaultTaskEngine();

  private readonly timelineEngine = new DefaultTimelineEngine();

  private readonly learningEngine = new DefaultLearningEngine();

  private readonly resourceEngine = new DefaultResourceEngine();

  private readonly costEngine = new DefaultCostEngine();

  private readonly riskEngine = new DefaultRiskEngine();

  private readonly dependencyEngine = new DefaultDependencyEngine();

  private readonly deliverableEngine = new DefaultDeliverableEngine();

  public generate(
    recommendation: RecommendationResult
  ): PlanningResult {

    const roadmap = this.roadmapEngine.build({

      complexity:
        recommendation.requirementAnalysis.complexity,

      detectedDomains:
        recommendation.requirementAnalysis.detectedDomains,

    });

    const milestones =
      this.milestoneEngine.build({

        phases:
          KnowledgeService.getDevelopmentPhases(),

      });

    roadmap.milestones = milestones;

    const tasks =
      this.taskEngine.build({

        milestones,

      });

    const timeline =
      this.timelineEngine.build({

        tasks,

      });

    const learningPath =
      this.learningEngine.build({

        technologies:
          recommendation.technologies,

      });

    const resourcePlan =
      this.resourceEngine.build({

        technologies:
          recommendation.technologies,

      });

    const costEstimate =
      this.costEngine.build({

        technologies:
          recommendation.technologies,

      });

    const riskSummary =
      this.riskEngine.build({

        technologies:
          recommendation.technologies,

      });

    const dependencies =
      this.dependencyEngine.build({

        tasks,

      });

    const deliverables =
      this.deliverableEngine.build({

        milestones,

      });

    return {

      roadmap,

      tasks,

      timeline,

      dependencies,

      learningPath,

      resourcePlan,

      costEstimate,

      deliverables,

      riskSummary,

      metadata: {

        generatedAt:
          new Date().toISOString(),

        planningVersion: "1.0.0",

        estimatedCompletionWeeks:
          timeline.totalWeeks,

      },

    };

  }

}