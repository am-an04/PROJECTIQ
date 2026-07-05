// src/modules/recommendation/recommendation.constants.ts

export const EXPERIENCE_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

export const PROJECT_COMPLEXITIES = [
  "Low",
  "Medium",
  "High",
] as const;

export const EXPECTED_SCALES = [
  "Small",
  "Medium",
  "Large",
  "Enterprise",
] as const;

export const DEPLOYMENT_PREFERENCES = [
  "Cloud",
  "On-Premise",
  "Hybrid",
] as const;

export const PROJECT_TYPES = [
  "Technical",
  "Non-Technical",
  "Research",
] as const;

export const TECHNOLOGY_TYPES = [
  "Language",
  "Framework",
  "Database",
  "Cloud",
  "DevOps",
  "AI/ML",
  "Tool",
  "Architecture",
  "Platform",
  "Other",
] as const;

export const CONFIDENCE = {
  MIN: 0,
  MAX: 100,
  HIGH: 85,
  MEDIUM: 60,
  LOW: 40,
} as const;

export const DEFAULTS = {
  EXPERIENCE_LEVEL: "Intermediate",
  PROJECT_COMPLEXITY: "Medium",
  PROJECT_TYPE: "Technical",
  EXPECTED_SCALE: "Medium",
  DEPLOYMENT: "Cloud",
} as const;