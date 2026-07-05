// src/modules/recommendation/recommendation.confidence.ts

import { ScoringService } from "../../core/scoring/index.js";

export class RecommendationConfidence {
  static calculate = ScoringService.calculate;
}