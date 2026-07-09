// src/core/requirement/requirement.service.ts

import { PreprocessingService } from "../preprocessing/index.js";

import {
  RequirementAnalysis,
  RequirementComplexity,
  ProjectConstraints,
  DetectedDomain,
} from "./requirement.types.js";

export class RequirementService {

  private static readonly FUNCTIONAL_KEYWORDS = [
    "authentication",
    "login",
    "payment",
    "payments",
    "dashboard",
    "analytics",
    "tracking",
    "notification",
    "notifications",
    "chat",
    "booking",
    "appointment",
    "search",
    "profile",
    "admin",
    "report",
    "order",
    "billing",
    "management",
  ];

  private static readonly NON_FUNCTIONAL_KEYWORDS = [
    "security",
    "performance",
    "availability",
    "scalability",
    "responsive",
    "maintainable",
    "reliable",
    "fast",
  ];

  private static readonly DOMAIN_KEYWORDS: Record<string, string[]> = {

    "Web Development": [
      "website",
      "web",
      "frontend",
      "backend",
      "dashboard",
      "authentication",
      "login",
      "profile",
      "admin",
      "booking",
      "appointment",
      "analytics",
      "notification",
      "notifications",
      "api",
      "management",
    ],

    "Artificial Intelligence": [
      "ai",
      "artificial",
      "intelligence",
      "machine",
      "learning",
      "prediction",
      "model",
    ],

    "Healthcare": [
      "hospital",
      "doctor",
      "patient",
      "medical",
      "clinic",
      "health",
    ],

    "ECommerce": [
      "shopping",
      "cart",
      "product",
      "order",
      "payment",
      "delivery",
      "inventory",
    ],

    "Education": [
      "student",
      "teacher",
      "course",
      "exam",
      "learning",
    ],
  };

  static analyze(text: string): RequirementAnalysis {

    const processed =
      PreprocessingService.process(text);

    const tokens =
      processed.uniqueTokens;

    const functionalRequirements =
      tokens.filter(token =>
        this.FUNCTIONAL_KEYWORDS.includes(token)
      );

    const nonFunctionalRequirements =
      tokens.filter(token =>
        this.NON_FUNCTIONAL_KEYWORDS.includes(token)
      );

    const detectedDomains: DetectedDomain[] = [];

    for (const [domain, keywords] of Object.entries(
      this.DOMAIN_KEYWORDS
    )) {

      const matched =
        keywords.filter(keyword =>
          tokens.includes(keyword)
        );

      if (matched.length > 0) {

        detectedDomains.push({

          name: domain,

          confidence: Math.round(
            (matched.length / keywords.length) * 100
          ),

        });

      }

    }

    // Automatically classify Healthcare systems as Web Development
    const hasHealthcare =
      detectedDomains.some(
        domain => domain.name === "Healthcare"
      );

    const hasWebDevelopment =
      detectedDomains.some(
        domain => domain.name === "Web Development"
      );

    if (
      hasHealthcare &&
      !hasWebDevelopment
    ) {

      detectedDomains.push({

        name: "Web Development",

        confidence: 80,

      });

    }

    const constraints: ProjectConstraints = {};

    const lower =
      processed.normalizedText;

    const budget =
      lower.match(/budget\s*[:=]?\s*([\w\d]+)/i);

    if (budget) {
      constraints.budget = budget[1];
    }

    const timeline =
      lower.match(/timeline\s*[:=]?\s*([\w\d]+)/i);

    if (timeline) {
      constraints.timeline = timeline[1];
    }

    const team =
      lower.match(/team\s*[:=]?\s*([\w\d]+)/i);

    if (team) {
      constraints.teamSize = team[1];
    }

    const missingRequirements: string[] = [];

    if (!constraints.budget)
      missingRequirements.push("Budget");

    if (!constraints.timeline)
      missingRequirements.push("Timeline");

    if (!constraints.teamSize)
      missingRequirements.push("Team Size");

    let complexity: RequirementComplexity = "Low";

    const requirementScore =
      functionalRequirements.length +
      nonFunctionalRequirements.length;

    if (requirementScore >= 8)
      complexity = "High";
    else if (requirementScore >= 4)
      complexity = "Medium";

    const completenessScore =
      Math.min(
        Math.round(
          (requirementScore / 10) * 100
        ),
        100
      );

    return {

      keywords: tokens,

      functionalRequirements,

      nonFunctionalRequirements,

      detectedDomains,

      constraints,

      missingRequirements,

      complexity,

      completenessScore,

    };

  }

}