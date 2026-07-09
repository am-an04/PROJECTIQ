import technologyKeywords from "../knowledge/technology-keywords.json" with { type: "json" };
import businessStopwords from "../knowledge/business-stopwords.json" with { type: "json" };
import entityRules from "../knowledge/entity-rules.json" with { type: "json" };

interface TechnologyKeywords {
  languages: string[];
  frameworks: string[];
  databases: string[];
  cloud: string[];
  devops: string[];
  ai: string[];
  security: string[];
}

interface EntityRules {
  preferredEntities: string[];
}

export interface EntityClassification {
  businessEntities: string[];
  technologies: string[];
  ignored: string[];
}

export class EntityClassifier {

  private static readonly technologyData =
    technologyKeywords as TechnologyKeywords;

  private static readonly stopwordData =
    businessStopwords as string[];

  private static readonly entityData =
    entityRules as EntityRules;

  private static readonly technologySet = new Set(
    Object.values(EntityClassifier.technologyData)
      .flat()
      .map((item: string) => item.toLowerCase())
  );

  private static readonly stopwordSet = new Set(
    EntityClassifier.stopwordData.map(
      (word: string) => word.toLowerCase()
    )
  );

  private static readonly preferredEntitySet = new Set(
    EntityClassifier.entityData.preferredEntities.map(
      (entity: string) => entity.toLowerCase()
    )
  );

  static classify(
    keywords: string[]
  ): EntityClassification {

    const businessEntities = new Set<string>();

    const technologies = new Set<string>();

    const ignored = new Set<string>();

    for (const keyword of keywords) {

      const value = keyword.trim();

      if (!value) continue;

      const normalized = value.toLowerCase();

      if (this.stopwordSet.has(normalized)) {

        ignored.add(value);

        continue;

      }

      if (this.technologySet.has(normalized)) {

        technologies.add(value);

        continue;

      }

      if (this.preferredEntitySet.has(normalized)) {

        businessEntities.add(value);

        continue;

      }

      // Unknown words are treated as business entities for now.
      businessEntities.add(value);

    }

    return {
      businessEntities: [...businessEntities],
      technologies: [...technologies],
      ignored: [...ignored],
    };

  }

}