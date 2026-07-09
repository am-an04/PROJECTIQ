export interface ScoredFeature {

  name: string;

  category: string;

  confidence: number;

  occurrences: number;

}

export class FeatureScorer {

  static score(
    features: {
      name: string;
      category: string;
      confidence: number;
    }[]
  ): ScoredFeature[] {

    const frequency = new Map<
      string,
      {
        category: string;
        confidence: number;
        occurrences: number;
      }
    >();

    for (const feature of features) {

      const existing =
        frequency.get(feature.name);

      if (existing) {

        existing.occurrences++;

        existing.confidence = Math.min(
          100,
          existing.confidence + 5
        );

      } else {

        frequency.set(feature.name, {

          category: feature.category,

          confidence: feature.confidence,

          occurrences: 1

        });

      }

    }

    const result: ScoredFeature[] = [];

    for (const [name, value] of frequency.entries()) {

      result.push({

        name,

        category: value.category,

        confidence: value.confidence,

        occurrences: value.occurrences

      });

    }

    return result.sort(

      (a, b) =>

        b.confidence - a.confidence

    );

  }

}