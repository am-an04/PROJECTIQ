import {
  RecommendationResult,
} from "../recommendation/recommendation.types.js";

import {
  PlanningResult,
} from "./planning.types.js";

import {
  PlanningOrchestrator,
} from "../../core/planning/index.js";

export class PlanningService {

  private readonly orchestrator =
    new PlanningOrchestrator();

  /**
   * Generate complete project planning.
   */
  public generatePlan(
    recommendation: RecommendationResult
  ): PlanningResult {

    return this.orchestrator.generate(
      recommendation
    );

  }

}