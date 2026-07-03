// src/modules/recommendation/recommendation.types.ts

/**
 * Supported experience levels.
 */
export type ExperienceLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

/**
 * Technology categories that ProjectIQ can recommend.
 * Extend this union as new recommendation categories are introduced.
 */
export type TechnologyType =
  | "Language"
  | "Framework"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "AI Model"
  | "Tool"
  | "Architecture"
  | "Platform"
  | "Other";

/**
 * Incoming request payload for generating recommendations.
 */
export interface RecommendationRequest {
  title: string;
  description: string;
  features: string[];

  budget?: number;

  /**
   * Estimated timeline in weeks.
   */
  timeline?: number;

  teamSize?: number;

  experienceLevel?: ExperienceLevel;

  targetUsers?: number;

  expectedScale?: "Small" | "Medium" | "Large" | "Enterprise";

  preferredTechnologies?: string[];

  constraints?: string[];

  deploymentPreference?: "Cloud" | "On-Premise" | "Hybrid";

  projectType?: "Technical" | "Non-Technical" | "Research";
}

/**
 * Result of requirement analysis.
 */
export interface RequirementAnalysis {
  /**
   * Important keywords extracted from user input.
   */
  keywords: string[];

  /**
   * Overall project complexity.
   */
  estimatedComplexity: "Low" | "Medium" | "High";

  /**
   * Indicates whether the project is technical.
   */
  technicalProject: boolean;

  /**
   * Features detected from the requirements.
   */
  detectedFeatures: string[];
}

/**
 * Domain classification result.
 * Dynamic instead of enum-based to support future domains.
 */
export interface DomainResult {
  /**
   * Primary detected domain.
   * Examples:
   * AI
   * Healthcare
   * FinTech
   * Agriculture
   * Education
   * Drone Technology
   */
  domain: string;

  /**
   * Confidence score (0-100).
   */
  confidence: number;

  /**
   * Keywords that contributed to domain detection.
   */
  matchedKeywords: string[];

  /**
   * Alternative possible domains.
   */
  suggestedDomains: string[];
}

/**
 * Reason why a technology was selected and
 * why alternatives were rejected.
 */
export interface RecommendationReason {
  /**
   * Reasons why the technology was selected.
   */
  selectedBecause: string[];

  /**
   * Known limitations of the selected technology.
   */
  weaknesses: string[];

  /**
   * Alternative technologies and why they were not selected.
   */
  rejectedAlternatives: Array<{
    technology: string;
    reason: string;
  }>;
}
/**
 * Individual technology recommendation.
 */
export interface TechnologyRecommendation {
  /**
   * Category of recommendation.
   */
  type: TechnologyType;

  /**
   * Technology name.
   * Example:
   * React
   * MongoDB
   * Docker
   * AWS
   */
  name: string;

  /**
   * Confidence score (0-100).
   */
  confidence: number;

  /**
   * Explainable recommendation.
   */
  reasoning: RecommendationReason;
}

/**
 * Technology comparison.
 */
export interface TechnologyComparison {
  /**
   * Selected technology.
   */
  selected: string;

  /**
   * Compared technologies.
   */
  alternatives: string[];

  /**
   * Advantages.
   */
  strengths: string[];

  /**
   * Limitations.
   */
  weaknesses: string[];

  /**
   * Why alternatives were rejected.
   */
  rejectionReasons: Record<string, string>;
}

/**
 * Human-readable explanation.
 */
export interface RecommendationExplanation {
  /**
   * Explanation title.
   */
  title: string;

  /**
   * Detailed explanation.
   */
  explanation: string;
}

/**
 * Final recommendation response.
 */
export interface RecommendationResult {
  /**
   * Requirement analysis output.
   */
  requirementAnalysis: RequirementAnalysis;

  /**
   * Identified project domain.
   */
  domain: DomainResult;

  /**
   * Recommended technologies.
   */
  technologies: TechnologyRecommendation[];

  /**
   * Technology comparisons.
   */
  comparisons: TechnologyComparison[];

  /**
   * Explainable recommendations.
   */
  explanations: RecommendationExplanation[];

  /**
   * Overall recommendation confidence.
   */
  overallConfidence: number;
}