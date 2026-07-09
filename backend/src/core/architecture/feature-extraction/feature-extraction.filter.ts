import technologyKeywords from "../knowledge/technology-keywords.json" with { type: "json" };

interface TechnologyKeywords {

  languages: string[];

  frameworks: string[];

  databases: string[];

  cloud: string[];

  devops: string[];

  ai: string[];

  security: string[];

}

export class FeatureFilter {

  private static readonly technologySet =

    new Set(

      Object.values(

        technologyKeywords as TechnologyKeywords

      )

      .flat()

      .map(item => item.toLowerCase())

    );

  static filter(
    features: string[]
  ): string[] {

    const result: string[] = [];

    for (const feature of features) {

      const normalized =

        feature.toLowerCase();

      let containsTechnology = false;

      for (const tech of this.technologySet) {

        if (normalized.includes(tech)) {

          containsTechnology = true;

          break;

        }

      }

      if (!containsTechnology) {

        result.push(feature);

      }

    }

    return result;

  }

}