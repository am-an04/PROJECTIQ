import {
  ArchitectureStyleEngine,
  BuildArchitectureStyleOptions,
} from "./architecture-style.types.js";

import { ArchitectureStyle } from "../../../modules/architecture/architecture.types.js";

import {
  ArchitectureKnowledgeService,
} from "../knowledge/index.js";

export class DefaultArchitectureStyleEngine
  implements ArchitectureStyleEngine {

  build(
    options: BuildArchitectureStyleOptions
  ): ArchitectureStyle {

    const styles =
      ArchitectureKnowledgeService.getArchitectureStyles();

    const recommendation =
      options.recommendation;

    const planning =
      options.planning;

    const overallScore =
  recommendation.score?.overallScore ?? 50;

const scalabilityScore =
  recommendation.score?.scalabilityScore ?? 50;

const estimatedWeeks =
  planning.metadata?.estimatedCompletionWeeks ?? 8;

    const complexity =
      Math.ceil(overallScore / 20);

    const scalable =
      scalabilityScore >= 80;

    const sortedStyles =

      [...styles].sort(

        (a, b) =>

          b.suitableFor.minComplexity -

          a.suitableFor.minComplexity

      );

    for (const style of sortedStyles) {

      const complexityMatch =

        complexity >= style.suitableFor.minComplexity;

      const durationMatch =

        estimatedWeeks >= style.suitableFor.minWeeks;

      const scalabilityMatch =

        !style.suitableFor.scalable ||

        scalable;

      if (

        complexityMatch &&

        durationMatch &&

        scalabilityMatch

      ) {

        return style.name as ArchitectureStyle;

      }

    }

    return "Monolithic";

  }

}