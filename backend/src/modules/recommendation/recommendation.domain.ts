// src/modules/recommendation/recommendation.domain.ts

import { RequirementService } from "../../core/requirement/index.js";

export class DomainIdentifier {
  static identify(text: string) {
    return RequirementService.analyze(text).detectedDomains;
  }
}