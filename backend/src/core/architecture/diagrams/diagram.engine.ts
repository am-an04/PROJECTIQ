import {
  ArchitectureContext,
} from "../architecture.context.js";

import {
  Diagram,
  DiagramEngine,
  DiagramResult,
} from "./diagram.types.js";

export class DefaultDiagramEngine
  implements DiagramEngine {

  build(
    context: ArchitectureContext
  ): DiagramResult {

    const diagrams: Diagram[] = [];

    /* ============================================
       System Architecture
    ============================================ */

    diagrams.push({

      title: "System Architecture",

      type: "Architecture",

      mermaid: `graph TD
Client --> Frontend
Frontend --> Backend
Backend --> Database
Backend --> Cache
Backend --> AI
Backend --> Cloud`

    });

    /* ============================================
       Component Diagram
    ============================================ */

    const componentLines: string[] = [];

    context.components?.components.forEach(component => {

      if (component.dependencies.length === 0) {

        componentLines.push(
          `${component.name}`
        );

        return;

      }

      component.dependencies.forEach(dependency => {

        componentLines.push(
          `${component.name} --> ${dependency}`
        );

      });

    });

    diagrams.push({

      title: "Component Diagram",

      type: "Component",

      mermaid: `graph TD
${componentLines.join("\n")}`

    });

    /* ============================================
       Entity Relationship Diagram
    ============================================ */

    const relationshipLines: string[] = [];

    context.relationships?.relationships.forEach(
      relationship => {

        relationshipLines.push(
`${relationship.source} ||--o{ ${relationship.target} : ${relationship.type}`
        );

      }
    );

    diagrams.push({

      title: "Entity Relationship Diagram",

      type: "ER",

      mermaid: `erDiagram
${relationshipLines.join("\n")}`

    });

    /* ============================================
       Sequence Diagram
    ============================================ */

    diagrams.push({

      title: "Sequence Diagram",

      type: "Sequence",

      mermaid: `sequenceDiagram
Client->>Controller: Request
Controller->>Service: Validate
Service->>Repository: Process
Repository->>Database: Read / Write
Database-->>Repository: Result
Repository-->>Service: Response
Service-->>Controller: Success
Controller-->>Client: Response`

    });

    /* ============================================
       Deployment Diagram
    ============================================ */

    const cloud =
      context.deployment?.cloudProvider ??
      "Cloud";

    const container =
      context.deployment?.containerization ??
      "Application";

    diagrams.push({

      title: "Deployment Diagram",

      type: "Deployment",

      mermaid: `graph LR
Developer --> GitHub
GitHub --> CI/CD
CI/CD --> ${container}
${container} --> ${cloud}
${cloud} --> Users`

    });

    return {

      diagrams

    };

  }

}