import {
  ApiDesignEngine,
  BuildApiDesignOptions,
} from "./api-design.types.js";

import {
  ApiDesign,
  ApiEndpoint,
} from "../../../modules/architecture/architecture.types.js";

import {
  ArchitectureKnowledgeService,
} from "../knowledge/index.js";

export class DefaultApiDesignEngine
  implements ApiDesignEngine {

  build(
    options: BuildApiDesignOptions
  ): ApiDesign {

    const convention =
      ArchitectureKnowledgeService.getApiConvention();

    const endpoints: ApiEndpoint[] = [];

    const resources = new Set<string>();

    for (const entity of options.entities.entities) {

      let resource = entity.name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

      if (
        convention.resourcePlural &&
        !resource.endsWith("s")
      ) {

        resource += "s";

      }

      if (resources.has(resource)) {

        continue;

      }

      resources.add(resource);

      const basePath =
        `${convention.versionPrefix}/${resource}`;

      if (!convention.includeCrud) {

        continue;

      }

      endpoints.push(

        {
          method: "GET",
          path: basePath,
          description: `Retrieve all ${resource}.`,
        },

        {
          method: "GET",
          path: `${basePath}/{id}`,
          description: `Retrieve ${entity.name} by id.`,
        },

        {
          method: "POST",
          path: basePath,
          description: `Create ${entity.name}.`,
        },

        {
          method: "PUT",
          path: `${basePath}/{id}`,
          description: `Update ${entity.name}.`,
        },

        {
          method: "DELETE",
          path: `${basePath}/{id}`,
          description: `Delete ${entity.name}.`,
        }

      );

    }

    /**
     * Future:
     * Generate custom endpoints like:
     *
     * POST /login
     * POST /register
     * GET /dashboard
     * GET /analytics
     */

    return {

      endpoints,

    };

  }

}