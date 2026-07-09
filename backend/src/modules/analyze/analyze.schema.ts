import { z } from "zod";

export const AnalyzeRequestSchema =
  z.object({

    title:
      z.string().min(3),

    description:
      z.string().min(20),

    features:
      z.array(z.string()).min(1),

  });

export type AnalyzeRequestDto =
  z.infer<typeof AnalyzeRequestSchema>;