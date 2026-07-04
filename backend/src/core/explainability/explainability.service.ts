// src/core/explainability/explainability.service.ts

import {
  ExplanationInput,
  ExplanationResult,
} from "./explainability.types.js";

export class ExplainabilityService {
  static generate(
    input: ExplanationInput
  ): ExplanationResult {

    const whySelected =
      `${input.title} is recommended because ${input.strengths.join(", ")}.`;

    const recommendation =
      input.weaknesses.length > 0
        ? `Recommended with consideration for: ${input.weaknesses.join(", ")}.`
        : "Highly recommended without major limitations.";

    return {
      title: input.title,

      whySelected,

      strengths: input.strengths,

      weaknesses: input.weaknesses,

      alternatives: input.alternatives,

      recommendation,
    };
  }
}