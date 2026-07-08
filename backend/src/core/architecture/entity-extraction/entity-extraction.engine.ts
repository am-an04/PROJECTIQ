import { randomUUID } from "crypto";

import {
  BuildEntityExtractionOptions,
  EntityExtractionEngine,
  EntityExtractionResult,
  ProjectEntity,
} from "./entity-extraction.types.js";

import { EntityClassifier } from "./entity-extraction.classifier.js";

export class DefaultEntityExtractionEngine
  implements EntityExtractionEngine {

  build(
    options: BuildEntityExtractionOptions
  ): EntityExtractionResult {

    const entities: ProjectEntity[] = [];

    /**
     * Only Requirement features can become business entities.
     */

    const businessFeatures =
      options.features.features.filter(
        feature => feature.source === "Requirement"
      );

    /**
     * Classify each feature as a whole.
     */

    for (const feature of businessFeatures) {

      const classified =
        EntityClassifier.classify([
          feature.name
        ]);

      classified.businessEntities.forEach(entityName => {

        entities.push({

          id: randomUUID(),

          name: entityName,

          description:
            `Business entity derived from "${feature.name}".`,

          sourceFeature:
            feature.name

        });

      });

    }

    /**
     * Remove duplicates.
     */

    const unique = new Map<string, ProjectEntity>();

    for (const entity of entities) {

      const key =
        entity.name.trim().toLowerCase();

      if (!unique.has(key)) {

        unique.set(key, entity);

      }

    }

    return {

      entities:
        [...unique.values()]

    };

  }

}