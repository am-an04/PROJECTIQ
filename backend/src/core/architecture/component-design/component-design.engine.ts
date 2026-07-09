import { randomUUID } from "crypto";

import {
  ArchitectureComponent,
  BuildComponentDesignOptions,
  ComponentDesignEngine,
  ComponentDesignResult,
} from "./component-design.types.js";

export class DefaultComponentDesignEngine
  implements ComponentDesignEngine {

  build(
    options: BuildComponentDesignOptions
  ): ComponentDesignResult {

    const components: ArchitectureComponent[] = [];

    const processed = new Set<string>();

    for (const entity of options.entities.entities) {

      const entityName = entity.name
        .trim()
        .replace(/[^a-zA-Z0-9]/g, "");

      if (!entityName) {

        continue;

      }

      if (processed.has(entityName.toLowerCase())) {

        continue;

      }

      processed.add(entityName.toLowerCase());

      components.push(

        {
          id: randomUUID(),

          name: `${entityName}Controller`,

          type: "Controller",

          entity: entity.name,

          responsibility:
            `Expose REST endpoints for ${entity.name}.`,

          dependencies: [
            `${entityName}Service`
          ]

        },

        {
          id: randomUUID(),

          name: `${entityName}Service`,

          type: "Service",

          entity: entity.name,

          responsibility:
            `Handle business logic for ${entity.name}.`,

          dependencies: [
            `${entityName}Repository`
          ]

        },

        {
          id: randomUUID(),

          name: `${entityName}Repository`,

          type: "Repository",

          entity: entity.name,

          responsibility:
            `Persist ${entity.name} data.`,

          dependencies: [
            `${entityName}Model`
          ]

        },

        {
          id: randomUUID(),

          name: `${entityName}Model`,

          type: "Model",

          entity: entity.name,

          responsibility:
            `Represent ${entity.name} in the database.`,

          dependencies: []

        },

        {
          id: randomUUID(),

          name: `${entityName}Dto`,

          type: "DTO",

          entity: entity.name,

          responsibility:
            `Transfer ${entity.name} data.`,

          dependencies: []

        },

        {
          id: randomUUID(),

          name: `${entityName}Validator`,

          type: "Validator",

          entity: entity.name,

          responsibility:
            `Validate ${entity.name} requests.`,

          dependencies: []

        }

      );

    }

    return {

      components,

    };

  }

}