// src/modules/recommendation/recommendation.compatibility.ts

import { KnowledgeService } from "../../core/knowledge/index.js";

export class RecommendationCompatibility {

  static isCompatible(
    source: string,
    target: string
  ): boolean {

    return KnowledgeService.validateCompatibility(
      source,
      target
    );

  }

static compatibilityScore(
  technologies: string[]
): number {

  if (technologies.length <= 1) {
    return 100;
  }

  const importantPairs: Array<[string, string]> = [
    ["React", "Express"],
    ["React", "Node.js"],
    ["Express", "MongoDB"],
    ["Node.js", "MongoDB"],
    ["Express", "Redis"],
    ["Docker", "Kubernetes"],
    ["Docker", "AWS"],
    ["Node.js", "Docker"]
  ];

  let compatible = 0;
  let total = 0;

  for (const [source, target] of importantPairs) {

    if (
      technologies.includes(source) &&
      technologies.includes(target)
    ) {

      total++;

      if (
        this.isCompatible(source, target)
      ) {
        compatible++;
      }

    }

  }

  if (total === 0) {
    return 100;
  }

  return Math.round(
    (compatible / total) * 100
  );

};

  }

