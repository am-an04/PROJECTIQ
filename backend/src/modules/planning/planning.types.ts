import { RecommendationResult } from "../recommendation/recommendation.types.js";

/**
 * ============================================================
 * Planning Request
 * ============================================================
 */

export interface PlanningRequest {
  recommendation: RecommendationResult;
}

/**
 * ============================================================
 * Roadmap
 * ============================================================
 */

export interface Roadmap {

  /**
   * Machine-readable duration.
   */
  estimatedDurationWeeks: number;

  /**
   * Human-readable duration.
   */
  estimatedDurationLabel: string;

  difficulty: DifficultyLevel;

  milestones: Milestone[];

}
/**
 * ============================================================
 * Milestone
 * ============================================================
 */

export interface Milestone {
  id: string;
  title: string;
  description: string;
  order: number;
  estimatedDuration: string;
  deliverables: string[];
}

/**
 * ============================================================
 * Task
 * ============================================================
 */

export interface Task {
  id: string;
  title: string;
  description: string;
  milestoneId: string;
  estimatedHours: number;
  priority: Priority;
  dependencies: string[];
}

/**
 * ============================================================
 * Timeline
 * ============================================================
 */

export interface Timeline {
  totalWeeks: number;
  startPhase: string;
  endPhase: string;
  weeklyPlan: WeeklyPlan[];
}

export interface WeeklyPlan {
  week: number;
  title: string;
  objectives: string[];
}

/**
 * ============================================================
 * Dependency Graph
 * ============================================================
 */

export interface Dependency {
  source: string;
  target: string;
}

/**
 * ============================================================
 * Learning Path
 * ============================================================
 */

export interface LearningPath {
  estimatedLearningWeeks: number;
  steps: LearningStep[];
}

export interface LearningStep {
  order: number;
  topic: string;
  reason: string;
}

/**
 * ============================================================
 * Resource Planning
 * ============================================================
 */

export interface ResourcePlan {
  recommendedTeamSize: number;
  recommendedRoles: string[];
  requiredTools: string[];
  requiredSoftware: string[];
}

/**
 * ============================================================
 * Cost Estimation
 * ============================================================
 */

export interface CostEstimate {
  infrastructure: CostItem[];
  software: CostItem[];
  totalEstimatedCost: number;
  currency: string;
}

export interface CostItem {
  name: string;
  estimatedCost: number;
}

/**
 * ============================================================
 * Deliverables
 * ============================================================
 */

export interface Deliverable {
  title: string;
  description: string;
  milestoneId: string;
}

/**
 * ============================================================
 * Risk Summary
 * ============================================================
 */

export interface RiskSummary {
  overallRisk: RiskLevel;
  risks: Risk[];
}

export interface Risk {
  title: string;
  severity: RiskLevel;
  mitigation: string;
}

/**
 * ============================================================
 * Planning Metadata
 * ============================================================
 */

export interface PlanningMetadata {
  generatedAt: string;
  planningVersion: string;
  estimatedCompletionWeeks: number;
}

/**
 * ============================================================
 * Final Planning Response
 * ============================================================
 */

export interface PlanningResult {
  roadmap: Roadmap;

  tasks: Task[];

  timeline: Timeline;

  dependencies: Dependency[];

  learningPath: LearningPath;

  resourcePlan: ResourcePlan;

  costEstimate: CostEstimate;

  deliverables: Deliverable[];

  riskSummary: RiskSummary;

  metadata: PlanningMetadata;
}

/**
 * ============================================================
 * Shared Enums / Types
 * ============================================================
 */

export type DifficultyLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type Priority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export type RiskLevel =
  | "Low"
  | "Medium"
  | "High";