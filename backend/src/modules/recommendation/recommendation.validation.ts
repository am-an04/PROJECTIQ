// src/modules/recommendation/recommendation.validation.ts

import { z } from "zod";

export const recommendationSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Project title must be at least 3 characters.")
    .max(150, "Project title cannot exceed 150 characters."),

  description: z
    .string()
    .trim()
    .min(20, "Project description must be at least 20 characters.")
    .max(5000, "Project description cannot exceed 5000 characters."),

  features: z
    .array(
      z
        .string()
        .trim()
        .min(1, "Feature cannot be empty.")
    )
    .min(1, "At least one feature is required.")
    .max(100, "Maximum 100 features are allowed."),

  budget: z
    .number()
    .positive("Budget must be greater than zero.")
    .optional(),

  timeline: z
    .number()
    .int("Timeline must be a whole number.")
    .positive("Timeline must be greater than zero.")
    .optional(),

  teamSize: z
    .number()
    .int("Team size must be a whole number.")
    .positive("Team size must be greater than zero.")
    .max(1000, "Team size cannot exceed 1000.")
    .optional(),

  experienceLevel: z
    .enum(["Beginner", "Intermediate", "Advanced"])
    .optional(),

  targetUsers: z
    .number()
    .int("Target users must be a whole number.")
    .positive("Target users must be greater than zero.")
    .optional(),

  expectedScale: z
    .enum(["Small", "Medium", "Large", "Enterprise"])
    .optional(),

  preferredTechnologies: z
    .array(
      z
        .string()
        .trim()
        .min(1, "Technology name cannot be empty.")
    )
    .optional(),

  constraints: z
    .array(
      z
        .string()
        .trim()
        .min(1, "Constraint cannot be empty.")
    )
    .optional(),

  deploymentPreference: z
    .enum(["Cloud", "On-Premise", "Hybrid"])
    .optional(),

  projectType: z
    .enum(["Technical", "Non-Technical", "Research"])
    .optional(),
});

export type RecommendationInput = z.infer<typeof recommendationSchema>;// src/modules/recommendation/recommendation.constants.ts

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
  "AI Model",
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