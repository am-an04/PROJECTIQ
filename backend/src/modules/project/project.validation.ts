import { z } from "zod";

export const createProjectSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description cannot exceed 1000 characters"),

  domain: z
    .string()
    .min(2, "Domain is required"),

  projectType: z.enum([
    "Technical",
    "Non-Technical",
  ]),

  difficulty: z.enum([
    "Easy",
    "Medium",
    "Hard",
  ]),
});
