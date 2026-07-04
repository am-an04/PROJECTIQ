// src/modules/recommendation/recommendation.matcher.ts

import { KnowledgeService } from "../../core/knowledge/index.js";
import { RequirementAnalysis } from "../../core/requirement/index.js";

import { RecommendationMapper } from "./recommendation.mapper.js";
import { TechnologyRecommendation } from "./recommendation.types.js";

export class RecommendationMatcher {

  static match(
    analysis: RequirementAnalysis
  ): TechnologyRecommendation[] {

    console.log("\n========== MATCHER ==========");
    console.log("Detected Domains:", analysis.detectedDomains);
    console.log("Keywords:", analysis.keywords);

    const recommendations: TechnologyRecommendation[] = [];

    const added = new Set<string>();

    const technologies = KnowledgeService.getAll();

    console.log(
      "Knowledge Base Size:",
      technologies.length
    );

    // Detect whether this is an AI project
    const isAIProject = analysis.keywords.some(keyword =>
      [
        "ai",
        "artificial",
        "machine",
        "learning",
        "deep",
        "prediction",
        "neural",
        "nlp",
        "chatbot",
        "vision",
      ].includes(keyword.toLowerCase())
    );

    for (const technology of technologies) {

      let score = 0;

      /* -----------------------------------------
         1. Domain Matching
      ------------------------------------------*/

      for (const domain of analysis.detectedDomains) {

        if (
          technology.supportedProjectTypes.some(
            type =>
              type.toLowerCase() ===
              domain.name.toLowerCase()
          )
        ) {
          score += 30;
        }

      }

      /* -----------------------------------------
         2. Tag Matching
      ------------------------------------------*/

      for (const keyword of analysis.keywords) {

        if (
          technology.tags.some(
            tag =>
              tag.toLowerCase() ===
              keyword.toLowerCase()
          )
        ) {
          score += 15;
        }

      }

      /* -----------------------------------------
         3. Best Use Case Matching
      ------------------------------------------*/

      for (const keyword of analysis.keywords) {

        if (
          technology.bestUseCases.some(
            useCase =>
              useCase
                .toLowerCase()
                .includes(keyword.toLowerCase())
          )
        ) {
          score += 10;
        }

      }

      /* -----------------------------------------
         4. Enterprise Ready
      ------------------------------------------*/

      if (technology.enterpriseReady) {
        score += 5;
      }

      /* -----------------------------------------
         5. Recommendation Score
      ------------------------------------------*/

      score += Math.round(
        technology.recommendationScore / 10
      );

      score = Math.min(score, 100);

      console.log(
        `${technology.name} -> Score: ${score}`
      );

      /* -----------------------------------------
         6. AI Technology Filtering
      ------------------------------------------*/

      if (
        technology.category === "AI/ML" &&
        !isAIProject
      ) {
        continue;
      }

      /* -----------------------------------------
         7. Add Recommendation
      ------------------------------------------*/

      if (
        score > 0 &&
        !added.has(technology.id)
      ) {

        recommendations.push(

          RecommendationMapper.toTechnologyRecommendation(
            technology,
            score
          )

        );

        added.add(technology.id);

      }

    }

    console.log("\n========== FINAL MATCHES ==========");
    console.log(recommendations);

    return recommendations;

  }

}