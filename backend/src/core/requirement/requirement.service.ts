import { PreprocessingService } from "../preprocessing/index.js";

import {
  RequirementAnalysis,
  RequirementComplexity,
  ProjectConstraints,
  DetectedDomain,
} from "./requirement.types.js";

import {
  FUNCTIONAL_KEYWORDS,
  NON_FUNCTIONAL_KEYWORDS,
  IGNORE_WORDS,
} from "./requirement.constants.js";

import {
  BUSINESS_ENTITY_KEYWORDS,
} from "./requirement.entities.js";

import {
  DOMAIN_KEYWORDS,
} from "./requirement.domains.js";

import {
  extractConstraints,
  findMissingConstraints,
  calculateComplexity,
  calculateCompleteness,
  normalizeTokens,
  unique,
} from "./requirement.helpers.js";

export class RequirementService {

  /**
   * =====================================================
   * Functional Requirements
   * =====================================================
   */

  private static extractFunctionalRequirements(
    tokens: string[]
  ): string[] {

    const requirements = new Set<string>();

    for (const token of tokens) {

      if (
        FUNCTIONAL_KEYWORDS.includes(token)
      ) {

        requirements.add(token);

      }

    }

    return [...requirements];

  }

  /**
   * =====================================================
   * Non Functional
   * =====================================================
   */

  private static extractNonFunctionalRequirements(
    tokens: string[]
  ): string[] {

    const requirements = new Set<string>();

    for (const token of tokens) {

      if (
        NON_FUNCTIONAL_KEYWORDS.includes(token)
      ) {

        requirements.add(token);

      }

    }

    return [...requirements];

  }

  /**
   * =====================================================
   * Business Entities
   * =====================================================
   */

  private static extractBusinessEntities(
    tokens: string[]
  ): string[] {

    const entities = new Set<string>();

    for (const token of tokens) {

      if (token.length < 3) {

        continue;

      }

      if (
        IGNORE_WORDS.includes(token)
      ) {

        continue;

      }

      if (
        NON_FUNCTIONAL_KEYWORDS.includes(token)
      ) {

        continue;

      }

      if (
        BUSINESS_ENTITY_KEYWORDS.includes(token)
      ) {

        entities.add(token);

        continue;

      }

      if (/^[a-z][a-z0-9-]*$/i.test(token)) {

        entities.add(token);

      }

    }

    return [...entities];

  }

  /**
   * =====================================================
   * Domain Detection
   * =====================================================
   */

  private static detectDomains(
    tokens: string[]
  ): DetectedDomain[] {

    const detected: DetectedDomain[] = [];

    for (

      const [domain, keywords]

      of Object.entries(
        DOMAIN_KEYWORDS
      )

    ) {

      const matched =

        keywords.filter(keyword =>

          tokens.includes(keyword)

        );

      if (matched.length === 0) {

        continue;

      }

      detected.push({

        name: domain,

        confidence: Math.round(

          (matched.length /

            keywords.length) * 100

        )

      });

    }

    return detected;

  }

  /**
   * =====================================================
   * Main Analysis
   * =====================================================
   */

  static analyze(
    text: string
  ): RequirementAnalysis {

    const processed =
      PreprocessingService.process(text);

    const tokens =
      normalizeTokens(
        processed.uniqueTokens
      );

    const functionalRequirements =
      this.extractFunctionalRequirements(
        tokens
      );

    const nonFunctionalRequirements =
      this.extractNonFunctionalRequirements(
        tokens
      );

    const businessEntities =
      this.extractBusinessEntities(
        tokens
      );

    /**
     * Promote entities as
     * functional requirements.
     */

    for (

      const entity

      of businessEntities

    ) {

      if (

        !functionalRequirements.includes(
          entity
        )

      ) {

        functionalRequirements.push(
          entity
        );

      }

    }

    const detectedDomains =
      this.detectDomains(tokens);

    const constraints =
      extractConstraints(
        processed.normalizedText
      );

    const missingRequirements =
      findMissingConstraints(
        constraints
      );

    const complexity =
      calculateComplexity(

        functionalRequirements,

        nonFunctionalRequirements

      );

    const completenessScore =
      calculateCompleteness(

        functionalRequirements,

        nonFunctionalRequirements,

        detectedDomains

      );
          /**
     * Remove duplicates
     */

    const uniqueFunctional =
      unique(
        functionalRequirements
      );

    const uniqueNonFunctional =
      unique(
        nonFunctionalRequirements
      );

    const uniqueKeywords =
      unique(tokens);

    /**
     * Sort detected domains
     */

    detectedDomains.sort(

      (a, b) =>

        b.confidence -

        a.confidence

    );

    /**
     * Final Result
     */

    return {

      keywords:
        uniqueKeywords,

      functionalRequirements:
        uniqueFunctional,

      nonFunctionalRequirements:
        uniqueNonFunctional,

      detectedDomains,

      constraints,

      missingRequirements,

      complexity,

      completenessScore,

    };

  }

}