import { z } from "zod";

/**
 * ============================================================
 * Analytics Request Schema
 * ============================================================
 *
 * Analytics consumes the outputs of:
 *
 * Recommendation
 * Planning
 * Architecture
 * Evaluation
 * Improvement
 *
 * These modules are already validated,
 * so we only verify they exist.
 */

export const AnalyticsRequestSchema = z.object({

  recommendation: z
    .unknown()
    .refine(
      value => value !== null && value !== undefined,
      {
        message: "Recommendation result is required.",
      }
    ),

  planning: z
    .unknown()
    .refine(
      value => value !== null && value !== undefined,
      {
        message: "Planning result is required.",
      }
    ),

  architecture: z
    .unknown()
    .refine(
      value => value !== null && value !== undefined,
      {
        message: "Architecture result is required.",
      }
    ),

  evaluation: z
    .unknown()
    .refine(
      value => value !== null && value !== undefined,
      {
        message: "Evaluation result is required.",
      }
    ),

  improvement: z
    .unknown()
    .refine(
      value => value !== null && value !== undefined,
      {
        message: "Improvement result is required.",
      }
    ),

});

export type AnalyticsRequestDto =
  z.infer<typeof AnalyticsRequestSchema>;