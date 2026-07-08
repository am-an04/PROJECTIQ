import {
  ConstraintPattern,
  CONSTRAINT_PATTERNS,
} from "./requirement.constraints.js";

import {
  RequirementComplexity,
  ProjectConstraints,
  DetectedDomain,
} from "./requirement.types.js";

/**
 * ============================================================
 * Remove Duplicate Strings
 * ============================================================
 */

export function unique(
  values: string[]
): string[] {

  return [...new Set(values)];

}

/**
 * ============================================================
 * Normalize Tokens
 * ============================================================
 */

export function normalizeTokens(
  tokens: string[]
): string[] {

  return unique(

    tokens

      .map(token =>
        token.trim().toLowerCase()
      )

      .filter(token => token.length > 1)

  );

}

/**
 * ============================================================
 * Calculate Domain Confidence
 * ============================================================
 */

export function calculateDomainConfidence(

  matched: number,

  total: number

): number {

  if (total === 0) {

    return 0;

  }

  return Math.min(

    Math.round(

      (matched / total) * 100

    ),

    100

  );

}

/**
 * ============================================================
 * Extract Constraints
 * ============================================================
 */

export function extractConstraints(

  text: string

): ProjectConstraints {

  const constraints:
    ProjectConstraints = {};

  for (

    const constraint

    of CONSTRAINT_PATTERNS

  ) {

    for (

      const pattern

      of constraint.patterns

    ) {

      const match =
        text.match(pattern);

      if (!match) {

        continue;

      }

      switch (constraint.key) {

        case "budget":

          constraints.budget =
            match[1] ?? match[0];

          break;

        case "timeline":

          constraints.timeline =
            match[1] ?? match[0];

          break;

        case "teamSize":

          constraints.teamSize =
            match[1] ?? match[0];

          break;

      }

      break;

    }

  }

  return constraints;

}

/**
 * ============================================================
 * Missing Constraints
 * ============================================================
 */

export function findMissingConstraints(

  constraints: ProjectConstraints

): string[] {

  const missing: string[] = [];

  if (!constraints.budget) {

    missing.push("Budget");

  }

  if (!constraints.timeline) {

    missing.push("Timeline");

  }

  if (!constraints.teamSize) {

    missing.push("Team Size");

  }

  return missing;

}

/**
 * ============================================================
 * Complexity
 * ============================================================
 */

export function calculateComplexity(

  functional: string[],

  nonFunctional: string[]

): RequirementComplexity {

  const score =

    functional.length +

    nonFunctional.length;

  if (score >= 15) {

    return "High";

  }

  if (score >= 7) {

    return "Medium";

  }

  return "Low";

}

/**
 * ============================================================
 * Completeness
 * ============================================================
 */

export function calculateCompleteness(

  functional: string[],

  nonFunctional: string[],

  domains: DetectedDomain[]

): number {

  const score =

    functional.length * 5 +

    nonFunctional.length * 3 +

    domains.length * 10;

  return Math.min(

    score,

    100

  );

}

/**
 * ============================================================
 * Confidence
 * ============================================================
 */

export function calculateConfidence(

  functional: string[],

  domains: DetectedDomain[]

): number {

  const confidence =

    functional.length * 10 +

    domains.length * 15;

  return Math.min(

    confidence,

    100

  );

}