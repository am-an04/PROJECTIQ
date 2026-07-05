// src/core/requirement/requirement.types.ts

export type RequirementComplexity =
  | "Low"
  | "Medium"
  | "High";

export interface ProjectConstraints {
  budget?: string;
  timeline?: string;
  teamSize?: string;
}

export interface DetectedDomain {
  name: string;
  confidence: number;
}

export interface RequirementAnalysis {
  keywords: string[];

  functionalRequirements: string[];

  nonFunctionalRequirements: string[];

  detectedDomains: DetectedDomain[];

  constraints: ProjectConstraints;

  missingRequirements: string[];

  complexity: RequirementComplexity;

  completenessScore: number;
}