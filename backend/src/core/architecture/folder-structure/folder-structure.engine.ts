import {
  BuildFolderStructureOptions,
  FolderStructureEngine,
} from "./folder-structure.types.js";

import {
  FolderNode,
} from "../../../modules/architecture/architecture.types.js";

import {
  ArchitectureKnowledgeService,
} from "../knowledge/index.js";

export class DefaultFolderStructureEngine
  implements FolderStructureEngine {

  build(
    options: BuildFolderStructureOptions
  ): FolderNode[] {

    const templates =
      ArchitectureKnowledgeService.getFolderTemplates();

    const technologies =
      options.recommendation.technologies
        .map(technology =>
          technology.name.toLowerCase()
        );

    let template =
      templates.find(template =>
        technologies.some(technology =>
          template.stack
            .toLowerCase()
            .includes(technology)
        )
      );

    if (!template) {

      template = {

        id: "default",

        stack: "Generic",

        folders: [

          "src",

          "docs",

          "tests"

        ]

      };

    }

    const result: FolderNode[] = [];

    /**
     * Root folders
     */

    template.folders.forEach(folder => {

      result.push({

        name: folder,

        type: "folder"

      });

    });

    /**
     * Remove duplicate module names
     */

    const moduleNames = [

      ...new Set(

        options.entities.entities.map(entity =>

          entity.name
            .trim()
            .toLowerCase()

        )

      )

    ];

    /**
     * Business Modules
     */

    result.push({

      name: "modules",

      type: "folder",

      children:

        moduleNames.map(moduleName => ({

          name: moduleName,

          type: "folder",

          children: [

            {

              name: `${moduleName}.controller.ts`,

              type: "file"

            },

            {

              name: `${moduleName}.service.ts`,

              type: "file"

            },

            {

              name: `${moduleName}.repository.ts`,

              type: "file"

            },

            {

              name: `${moduleName}.model.ts`,

              type: "file"

            },

            {

              name: `${moduleName}.dto.ts`,

              type: "file"

            },

            {

              name: `${moduleName}.validator.ts`,

              type: "file"

            },

            {

              name: "index.ts",

              type: "file"

            }

          ]

        }))

    });

    /**
     * Shared
     */

    result.push({

      name: "shared",

      type: "folder",

      children: [

        {

          name: "config",

          type: "folder"

        },

        {

          name: "middleware",

          type: "folder"

        },

        {

          name: "utils",

          type: "folder"

        },

        {

          name: "constants",

          type: "folder"

        },

        {

          name: "types",

          type: "folder"

        }

      ]

    });

    return result;

  }

}