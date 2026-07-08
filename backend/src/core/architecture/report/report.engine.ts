import { ArchitectureContext } from "../architecture.context.js";

import {
  ArchitectureReport,
  ArchitectureSection,
  ReportEngine,
} from "./report.types.js";

export class DefaultReportEngine
  implements ReportEngine {

  build(
    context: ArchitectureContext
  ): ArchitectureReport {

    const sections: ArchitectureSection[] = [];

    const addSection = (
      title: string,
      content: string[]
    ) => {

      const unique = [

        ...new Set(

          content.filter(item =>

            item.trim().length > 0

          )

        )

      ];

      if (unique.length > 0) {

        sections.push({

          title,

          content: unique

        });

      }

    };

    /* ==========================================
       Summary
    ========================================== */

    addSection(

      "Summary",

      [

        `Architecture Style: ${context.architectureStyle ?? "Not Generated"}`,

        `Components: ${context.components?.components.length ?? 0}`,

        `Entities: ${context.entities?.entities.length ?? 0}`,

        `Database Collections: ${context.databaseDesign?.collections.length ?? 0}`,

        `REST APIs: ${context.apiDesign?.endpoints.length ?? 0}`

      ]

    );

    /* ==========================================
       Architecture
    ========================================== */

    addSection(

      "Architecture Style",

      [

        context.architectureStyle ?? "Not Generated"

      ]

    );

    /* ==========================================
       Features
    ========================================== */

    addSection(

      "Features",

      context.features?.features.map(

        feature => feature.name

      ) ?? []

    );

    /* ==========================================
       Entities
    ========================================== */

    addSection(

      "Entities",

      context.entities?.entities.map(

        entity => entity.name

      ) ?? []

    );

    /* ==========================================
       Relationships
    ========================================== */

    addSection(

      "Relationships",

      context.relationships?.relationships.map(

        relationship =>

          `${relationship.source} ${relationship.type} ${relationship.target}`

      ) ?? []

    );

    /* ==========================================
       Components
    ========================================== */

    addSection(

      "Components",

      context.components?.components.map(

        component => component.name

      ) ?? []

    );

    /* ==========================================
       Database
    ========================================== */

    addSection(

      "Database Collections",

      context.databaseDesign?.collections.map(

        collection => collection.name

      ) ?? []

    );

    /* ==========================================
       APIs
    ========================================== */

    addSection(

      "REST APIs",

      context.apiDesign?.endpoints.map(

        endpoint =>

          `${endpoint.method} ${endpoint.path}`

      ) ?? []

    );

    /* ==========================================
       Deployment
    ========================================== */

    addSection(

      "Deployment",

      [

        context.deployment?.cloudProvider ?? "",

        context.deployment?.containerization ?? "",

        context.deployment?.orchestration ?? "",

        context.deployment?.ciCd ?? ""

      ]

    );

    /* ==========================================
       Security
    ========================================== */

    addSection(

      "Security",

      [

        context.security?.authentication ?? "",

        context.security?.authorization ?? "",

        ...(context.security?.apiSecurity ?? [])

      ]

    );

    /* ==========================================
       Scalability
    ========================================== */

    addSection(

      "Scalability",

      context.scalability?.strategies.map(

        strategy => strategy.title

      ) ?? []

    );

    return {

      title:

        "ProjectIQ Architecture Report",

      generatedAt:

        new Date().toISOString(),

      version:

        "1.0.0",

      sections

    };

  }

}