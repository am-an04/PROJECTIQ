import { randomUUID } from "crypto";

import {
  KnowledgeService,
  DevelopmentPhase,
} from "../../knowledge/index.js";

import {
  BuildRoadmapOptions,
  RoadmapEngine,
} from "./roadmap.types.js";

import {
  Roadmap,
  Milestone,
  DifficultyLevel,
} from "../../../modules/planning/planning.types.js";

export class DefaultRoadmapEngine implements RoadmapEngine {

  public build(
    options: BuildRoadmapOptions
  ): Roadmap {

    const phases: DevelopmentPhase[] =
      KnowledgeService.getDevelopmentPhases();

    const milestones: Milestone[] = phases.map(
      (phase, index) => ({
        id: randomUUID(),

        title: phase.title,

        description: phase.description,

        order: index + 1,

        estimatedDuration:
          `${phase.defaultDurationWeeks} Week${phase.defaultDurationWeeks > 1 ? "s" : ""}`,

        deliverables: phase.deliverables,
      })
    );

    const totalWeeks = phases.reduce(
      (total, phase) => total + phase.defaultDurationWeeks,
      0
    );

    return {

      estimatedDurationWeeks: totalWeeks,

      estimatedDurationLabel: `${totalWeeks} Weeks`,

      difficulty: this.getDifficulty(options.complexity),

      milestones,

    };
  }

  /**
   * Maps requirement complexity
   * to roadmap difficulty.
   */
  private getDifficulty(
    complexity: BuildRoadmapOptions["complexity"]
  ): DifficultyLevel {

    switch (complexity) {

      case "High":
        return "Advanced";

      case "Medium":
        return "Intermediate";

      case "Low":
      default:
        return "Beginner";

    }

  }

}