// src/modules/recommendation/recommendation.validation.ts

import { z } from "zod";

import {
  EXPERIENCE_LEVELS,
  EXPECTED_SCALES,
  DEPLOYMENT_PREFERENCES,
  PROJECT_TYPES,
} from "./recommendation.constants.js";

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
    .enum(EXPERIENCE_LEVELS)
    .optional(),

  targetUsers: z
    .number()
    .int("Target users must be a whole number.")
    .positive("Target users must be greater than zero.")
    .optional(),

  expectedScale: z
    .enum(EXPECTED_SCALES)
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
    .enum(DEPLOYMENT_PREFERENCES)
    .optional(),

  projectType: z
    .enum(PROJECT_TYPES)
    .optional(),
});

export type RecommendationInput = z.infer<
  typeof recommendationSchema
>;