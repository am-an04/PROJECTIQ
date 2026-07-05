import { z } from "zod";

/**
 * ============================================================
 * Planning Request Schema
 * ============================================================
 *
 * The Planning Module consumes the output of the
 * Recommendation Module.
 *
 * We intentionally do NOT re-validate the complete
 * RecommendationResult here because it has already been
 * validated by the Recommendation Module.
 */

export const PlanningRequestSchema = z.object({

  recommendation: z
    .unknown()
    .refine(
      (value) => value !== null && value !== undefined,
      {
        message: "Recommendation result is required.",
      }
    ),

});

/**
 * ============================================================
 * DTO
 * ============================================================
 */

export type PlanningRequestDto =
  z.infer<typeof PlanningRequestSchema>;