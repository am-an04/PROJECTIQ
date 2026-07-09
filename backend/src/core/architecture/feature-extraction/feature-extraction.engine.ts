import { randomUUID } from "crypto";

import {
  BuildFeatureExtractionOptions,
  FeatureExtractionEngine,
  FeatureExtractionResult,
  ProjectFeature,
} from "./feature-extraction.types.js";

import { RecommendationResult } from "../../../modules/recommendation/recommendation.types.js";
import { PlanningResult } from "../../../modules/planning/planning.types.js";

export class DefaultFeatureExtractionEngine
  implements FeatureExtractionEngine {

  build(
    options: BuildFeatureExtractionOptions
  ): FeatureExtractionResult {

    const recommendation = options.recommendation;
    const planning = options.planning;

    const features: ProjectFeature[] = [];

    // =====================================================
    // Functional Requirements
    // =====================================================

    recommendation.requirementAnalysis.functionalRequirements
      .forEach((requirement: string) => {

        features.push({

          id: randomUUID(),

          name: requirement,

          description:
            `Feature generated from functional requirement "${requirement}".`,

          priority: "High",

          source: "Requirement",

        });

      });

    // =====================================================
    // Recommended Technologies
    // =====================================================

    recommendation.technologies
      .forEach((
        technology: RecommendationResult["technologies"][number]
      ) => {

        features.push({

          id: randomUUID(),

          name: technology.name,

          description:
            `Architecture support for ${technology.name}.`,

          priority: "Medium",

          source: "Recommendation",

        });

      });

    // =====================================================
    // Planning Milestones
    // =====================================================

    planning.roadmap.milestones
      .forEach((
        milestone: PlanningResult["roadmap"]["milestones"][number]
      ) => {

        features.push({

          id: randomUUID(),

          name: milestone.title,

          description: milestone.description,

          priority: "Low",

          source: "Planning",

        });

      });

    // =====================================================
    // Remove Duplicates
    // Keep highest priority feature
    // =====================================================

    const unique = new Map<string, ProjectFeature>();

    const priority = {

      High: 3,

      Medium: 2,

      Low: 1,

    };

    for (const feature of features) {

      const key =
        feature.name.trim().toLowerCase();

      const existing =
        unique.get(key);

      if (!existing) {

        unique.set(key, feature);

        continue;

      }

      if (

        priority[feature.priority] >

        priority[existing.priority]

      ) {

        unique.set(key, feature);

      }

    }

    // =====================================================
    // Sort Features
    // =====================================================

    const sorted =

      [...unique.values()]

        .sort(

          (a, b) =>

            priority[b.priority] -

            priority[a.priority]

        );
        console.log("\n========== FEATURE EXTRACTION ==========");



    return {

      features: sorted,

    };

  }

}