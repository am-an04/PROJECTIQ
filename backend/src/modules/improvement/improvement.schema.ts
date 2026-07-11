import { z } from "zod";

/**
 * ============================================================
 * Improvement Request Schema
 * ============================================================
 *
 * Improvement consumes the outputs of:
 *
 * Recommendation
 * Planning
 * Architecture
 * Evaluation
 *
 * These modules are already validated, so we only ensure
 * they are present.
 */

export const ImprovementRequestSchema = z.object({

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

});

/**
 * ============================================================
 * DTO
 * ============================================================
 */

export type ImprovementRequestDto =
  z.infer<typeof ImprovementRequestSchema>;