import { z } from "zod";

/**
 * ============================================================
 * Architecture Request Schema
 * ============================================================
 *
 * Architecture consumes the outputs of:
 *
 * Recommendation Module
 * Planning Module
 *
 * Those outputs are already validated, so we only ensure
 * they exist.
 */

export const ArchitectureRequestSchema = z.object({

  recommendation: z
    .unknown()
    .refine(value => value !== null, {
      message: "Recommendation result is required.",
    }),

  planning: z
    .unknown()
    .refine(value => value !== null, {
      message: "Planning result is required.",
    }),

});

export type ArchitectureRequestDto =
  z.infer<typeof ArchitectureRequestSchema>;