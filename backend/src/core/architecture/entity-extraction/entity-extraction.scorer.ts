export interface ScoredEntity {

  name: string;

  confidence: number;

  occurrences: number;

}

export class EntityScorer {

  /**
   * Score entities based on how frequently they appear.
   */

  static score(
    entities: string[]
  ): ScoredEntity[] {

    const frequency = new Map<string, number>();

    for (const entity of entities) {

      frequency.set(

        entity,

        (frequency.get(entity) ?? 0) + 1

      );

    }

    const result: ScoredEntity[] = [];

    for (const [name, occurrences] of frequency.entries()) {

      /**
       * Confidence Formula
       *
       * 1 occurrence  -> 60
       * 2 occurrences -> 70
       * 3 occurrences -> 80
       * 4 occurrences -> 90
       * >=5           -> 100
       */

      const confidence = Math.min(

        60 + ((occurrences - 1) * 10),

        100

      );

      result.push({

        name,

        confidence,

        occurrences

      });

    }

    return result.sort(

      (a, b) =>

        b.confidence - a.confidence

    );

  }

}