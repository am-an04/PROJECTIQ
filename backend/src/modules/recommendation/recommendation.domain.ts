// src/modules/recommendation/recommendation.domain.ts

import { DOMAIN_KNOWLEDGE_BASE } from "./recommendation.data.js";
import { DomainResult } from "./recommendation.types.js";

export class DomainIdentifier {
  static identify(input: string): DomainResult {
    const normalizedInput = input.toLowerCase();

    let bestDomain = "General";
    let highestScore = 0;
    let matchedKeywords: string[] = [];
    let suggestedDomains: string[] = [];

    for (const knowledge of DOMAIN_KNOWLEDGE_BASE) {
      const matches = knowledge.keywords.filter((keyword) =>
        normalizedInput.includes(keyword.toLowerCase())
      );

      if (matches.length > 0) {
        suggestedDomains.push(knowledge.domain);
      }

      if (matches.length > highestScore) {
        highestScore = matches.length;
        bestDomain = knowledge.domain;
        matchedKeywords = matches;
      }
    }

    const confidence =
      highestScore === 0
        ? 0
        : Math.min(
            Math.round(
              (highestScore /
                Math.max(matchedKeywords.length, 1)) *
                100
            ),
            100
          );

    return {
      domain: bestDomain,
      confidence,
      matchedKeywords,
      suggestedDomains: [...new Set(suggestedDomains)],
    };
  }
}