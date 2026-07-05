// src/core/knowledge/knowledge.types.ts

export type TechnologyCategory =
  | "Language"
  | "Framework"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "AI/ML"
  | "Tool"
  | "Architecture"
  | "Platform"
  | "Other";

export type TechnologyRole =
  | "Frontend"
  | "Backend"
  | "Language"
  | "Database"
  | "Cache"
  | "Cloud"
  | "Containerization"
  | "Orchestration"
  | "CI/CD"
  | "AI Framework"
  | "Testing"
  | "Authentication"
  | "API"
  | "Monitoring"
  | "Mobile"
  | "Desktop"
  | "Other";

export interface TechnologyCompatibility {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  devops: string[];
  ai: string[];
}

export interface Technology {

  id: string;

  name: string;

  category: TechnologyCategory;

  description: string;

  tags: string[];

  bestUseCases: string[];

  supportedProjectTypes: string[];

  strengths: string[];

  weaknesses: string[];

  alternatives: string[];

  compatibility: TechnologyCompatibility;

  learningCurve: string;

  scalability: string;

  popularity: number;

  recommendationScore: number;

  enterpriseReady: boolean;

  openSource: boolean;

  license: string;

  officialWebsite: string;

  documentationUrl: string;

  maturity: string;

  lastUpdated: string;
}

/* ===========================================================
   Planning Knowledge Types
=========================================================== */

export interface DevelopmentPhase {

  id: string;

  title: string;

  description: string;

  applicableTo: Array<
    "Technical" |
    "Non-Technical" |
    "Research"
  >;

  defaultDurationWeeks: number;

  deliverables: string[];

}

export interface MilestoneTemplate {

  id: string;

  phase: string;

  title: string;

  description: string;

}

export interface TaskTemplate {

  id: string;

  milestone: string;

  title: string;

  description: string;

  estimatedHours: number;

  priority: "Low" | "Medium" | "High" | "Critical";

}

export interface LearningPathTemplate {

  technology: string;

  steps: string[];

}

export interface DurationEstimate {

  phase: string;

  weeks: number;

}

export interface ResourceTemplate {

  projectType: string;

  recommendedRoles: string[];

  recommendedTools: string[];

}

export interface CostTemplate {

  projectType: string;

  estimatedCost: number;

  currency: string;

}

export interface RiskTemplate {

  title: string;

  severity: "Low" | "Medium" | "High";

  mitigation: string;

}