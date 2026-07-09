import {
  RecommendationResult,
} from "../../modules/recommendation/recommendation.types.js";

import {
  PlanningResult,
} from "../../modules/planning/planning.types.js";

import {
  ArchitectureResult,
} from "../../modules/architecture/architecture.types.js";

import {
  EvaluationResult,
} from "../../modules/evaluation/evaluation.types.js";

import {
  TechnologyImprovement,
  ArchitectureImprovement,
  PlanningImprovement,
  SecurityImprovement,
  ResumeImprovement,
  PlacementImprovement,
} from "../../modules/improvement/improvement.types.js";

export interface ImprovementContext {

  recommendation: RecommendationResult;

  planning: PlanningResult;

  architecture: ArchitectureResult;

  evaluation: EvaluationResult;

  technology?: TechnologyImprovement;

  architectureImprovement?: ArchitectureImprovement;

  planningImprovement?: PlanningImprovement;

  security?: SecurityImprovement;

  resume?: ResumeImprovement;

  placement?: PlacementImprovement;

}