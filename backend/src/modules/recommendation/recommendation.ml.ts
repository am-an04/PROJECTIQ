// src/modules/recommendation/recommendation.ml.ts

import { MLService } from "../../core/ml/index.js";

export class RecommendationML {
  static predict = MLService.predict;
}