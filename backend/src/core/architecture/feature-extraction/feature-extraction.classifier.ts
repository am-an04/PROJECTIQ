import businessKeywords from "../knowledge/business-feature-keywords.json" with { type: "json" };

interface BusinessKeywordMap {
  [category: string]: string[];
}

export interface ClassifiedFeature {

  name: string;

  category: string;

  confidence: number;

}

export class FeatureClassifier {

  private static readonly keywordMap =
    businessKeywords as BusinessKeywordMap;

  static classify(
    text: string
  ): ClassifiedFeature[] {

    const result: ClassifiedFeature[] = [];

    const normalized =
      text.toLowerCase();

    for (const [category, keywords] of Object.entries(this.keywordMap)) {

      let score = 0;

      keywords.forEach(keyword => {

        if (normalized.includes(keyword.toLowerCase())) {

          score++;

        }

      });

      if (score > 0) {

        result.push({

          name: this.prettyName(category),

          category,

          confidence: Math.min(

            60 + score * 10,

            100

          )

        });

      }

    }

    return result.sort(

      (a, b) =>

        b.confidence - a.confidence

    );

  }

  private static prettyName(
    category: string
  ): string {

    return category

      .replace(/([A-Z])/g, " $1")

      .replace(/^./, c => c.toUpperCase());

  }

}