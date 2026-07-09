import {
  BuildDatabaseDesignOptions,
  DatabaseDesignEngine,
} from "./database-design.types.js";

import {
  DatabaseCollection,
  DatabaseDesign,
} from "../../../modules/architecture/architecture.types.js";

import {
  ArchitectureKnowledgeService,
} from "../knowledge/index.js";

export class DefaultDatabaseDesignEngine
  implements DatabaseDesignEngine {

  build(
    options: BuildDatabaseDesignOptions
  ): DatabaseDesign {

    const convention =
      ArchitectureKnowledgeService.getDatabaseConvention();

    const unique = new Map<string, DatabaseCollection>();

    for (const entity of options.entities.entities) {

      let name = entity.name
        .trim()
        .replace(/\s+/g, "_")
        .replace(/[^a-zA-Z0-9_]/g, "");

      if (convention.pluralizeCollections) {

        if (!name.endsWith("s")) {

          name += "s";

        }

      }

      switch (convention.namingConvention) {

        case "camelCase":

          name =
            name.charAt(0).toLowerCase() +
            name.slice(1);

          break;

        case "snake_case":

          name = name.toLowerCase();

          break;

      }

      if (!unique.has(name)) {

        unique.set(name, {

          name,

          purpose:
            `${entity.name} data storage.`

        });

      }

    }

    /**
     * Future:
     * Build foreign-key/reference information
     * from Relationship Engine.
     */

    return {

      collections:

        [...unique.values()]

    };

  }

}