// src/modules/recommendation/recommendation.engine.ts

import {
  RecommendationRequest,
  TechnologyRecommendation,
} from "./recommendation.types.js";

import { PreprocessingService } from "../../core/preprocessing/index.js";
import { RequirementService } from "../../core/requirement/index.js";
import { ScoringService } from "../../core/scoring/index.js";
import { ExplainabilityService } from "../../core/explainability/index.js";
import { MLService } from "../../core/ml/index.js";

import { RecommendationMatcher } from "./recommendation.matcher.js";
import { RecommendationRanker } from "./recommendation.ranker.js";
import { RecommendationValidator } from "./recommendation.validator.js";

export interface RecommendationEngineResult {
  processedInput: ReturnType<typeof PreprocessingService.process>;

  requirementAnalysis: ReturnType<typeof RequirementService.analyze>;

  technologies: TechnologyRecommendation[];

  score: ReturnType<typeof ScoringService.calculate>;

  explanation: ReturnType<typeof ExplainabilityService.generate>;

  mlPrediction: Awaited<ReturnType<typeof MLService.predict>>;
}

export class RecommendationEngine {
  static async analyze(
    request: RecommendationRequest
  ): Promise<RecommendationEngineResult> {

    const input = [
      request.title,
      request.description,
      ...request.features,
    ].join(" ");

    // Step 1 - Preprocess
    const processedInput =
      PreprocessingService.process(input);

    // Step 2 - Requirement Analysis
    const requirementAnalysis =
      RequirementService.analyze(input);

      

    // Step 3 - Match Technologies
    let technologies =
      RecommendationMatcher.match(
        requirementAnalysis
      );

      
    // Step 4 - Rank Technologies
    technologies =
      RecommendationRanker.rank(
        technologies
      );

    // Step 5 - Validate
    if (
      !RecommendationValidator.validate(
        technologies
      )
    ) {
      throw new Error(
        "No suitable technologies found."
      );
    }

    // Step 6 - Score
    const score =
      ScoringService.calculate({

        requirementCompleteness:
          requirementAnalysis.completenessScore,

        technologyConfidence:
          technologies.length
            ? Math.round(
                technologies.reduce(
                  (sum, technology) =>
                    sum + technology.confidence,
                  0
                ) / technologies.length
              )
            : 0,

        scalability: 90,

        maintainability: 90,

        security: 90,
      });

    // Step 7 - Explain
    const explanation =
      ExplainabilityService.generate({

        title: request.title,

        strengths: [
          "Technologies match project requirements",
          "Compatible technology stack",
          "Scalable architecture",
        ],

        weaknesses: [],

        alternatives: [],
      });

    // Step 8 - ML Prediction
    const mlPrediction =
      await MLService.predict({
        input: request,
      });

    return {

      processedInput,

      requirementAnalysis,

      technologies,

      score,

      explanation,

      mlPrediction,
    };
  }
}