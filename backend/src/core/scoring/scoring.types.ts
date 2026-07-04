// src/core/scoring/scoring.types.ts

export interface ScoreBreakdown {
  requirementScore: number;
  technologyScore: number;
  scalabilityScore: number;
  maintainabilityScore: number;
  securityScore: number;
  overallScore: number;
  grade: "A" | "B" | "C" | "D"
}

export interface ScoreInput {
  requirementCompleteness: number;
  technologyConfidence: number;
  scalability: number;
  maintainability: number;
  security: number;
}