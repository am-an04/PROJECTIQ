// src/core/explainability/explainability.types.ts

export interface ExplanationInput {
  title: string;

  strengths: string[];

  weaknesses: string[];

  alternatives: Array<{
    name: string;
    reason: string;
  }>;
}

export interface ExplanationResult {
  title: string;

  whySelected: string;

  strengths: string[];

  weaknesses: string[];

  alternatives: {
    name: string;
    reason: string;
  }[];

  recommendation: string;
}