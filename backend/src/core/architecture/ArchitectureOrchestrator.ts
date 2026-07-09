import { ArchitectureContext } from "./architecture.context.js";

import {
  ArchitectureResult,
} from "../../modules/architecture/architecture.types.js";

import {
  DefaultFeatureExtractionEngine,
} from "./feature-extraction/index.js";

import {
  DefaultEntityExtractionEngine,
} from "./entity-extraction/index.js";

import {
  DefaultRelationshipEngine,
} from "./relationship/index.js";

import {
  DefaultComponentDesignEngine,
} from "./component-design/index.js";

import {
  DefaultArchitectureStyleEngine,
} from "./architecture-style/index.js";

import {
  DefaultFolderStructureEngine,
} from "./folder-structure/index.js";

import {
  DefaultDatabaseDesignEngine,
} from "./database-design/index.js";

import {
  DefaultApiDesignEngine,
} from "./api-design/index.js";

import {
  DefaultDeploymentEngine,
} from "./deployment/index.js";

import {
  DefaultSecurityEngine,
} from "./security/index.js";

import {
  DefaultScalabilityEngine,
} from "./scalability/index.js";

export class ArchitectureOrchestrator {

  private readonly featureEngine =
    new DefaultFeatureExtractionEngine();

  private readonly entityEngine =
    new DefaultEntityExtractionEngine();

  private readonly relationshipEngine =
    new DefaultRelationshipEngine();

  private readonly componentEngine =
    new DefaultComponentDesignEngine();

  private readonly architectureStyleEngine =
    new DefaultArchitectureStyleEngine();

  private readonly folderStructureEngine =
    new DefaultFolderStructureEngine();

  private readonly databaseDesignEngine =
    new DefaultDatabaseDesignEngine();

  private readonly apiDesignEngine =
    new DefaultApiDesignEngine();

  private readonly deploymentEngine =
    new DefaultDeploymentEngine();

  private readonly securityEngine =
    new DefaultSecurityEngine();

  private readonly scalabilityEngine =
    new DefaultScalabilityEngine();

  build(
    context: ArchitectureContext
  ): ArchitectureResult {

    /* =====================================================
       Feature Extraction
    ===================================================== */

    context.features =
      this.featureEngine.build({

        recommendation: context.recommendation,

        planning: context.planning,

      });

    /* =====================================================
       Entity Extraction
    ===================================================== */

    context.entities =
      this.entityEngine.build({

        features: context.features,

      });

    /* =====================================================
       Relationship Extraction
    ===================================================== */

    context.relationships =
      this.relationshipEngine.build({

        entities: context.entities,

      });

    /* =====================================================
       Component Design
    ===================================================== */

    context.components =
      this.componentEngine.build({

        entities: context.entities,

      });

    /* =====================================================
       Architecture Style
    ===================================================== */

    context.architectureStyle =
      this.architectureStyleEngine.build({

        recommendation: context.recommendation,

        planning: context.planning,

      });

    /* =====================================================
       Folder Structure
    ===================================================== */

   context.folderStructure =
  this.folderStructureEngine.build({
    recommendation: context.recommendation,
    entities: context.entities!,
    components: context.components!,
  });

context.databaseDesign =
  this.databaseDesignEngine.build({
    entities: context.entities!,
    relationships: context.relationships!,
  });

context.apiDesign =
  this.apiDesignEngine.build({
    entities: context.entities!,
  });

    /* =====================================================
       Deployment
    ===================================================== */

    context.deployment =
      this.deploymentEngine.build({

        recommendation: context.recommendation,

      });

    /* =====================================================
       Security
    ===================================================== */

    context.security =
      this.securityEngine.build({

        recommendation: context.recommendation,

      });

    /* =====================================================
       Scalability
    ===================================================== */

    context.scalability =
      this.scalabilityEngine.build({

        recommendation: context.recommendation,

        planning: context.planning,

      });

    /* =====================================================
       Final Result
    ===================================================== */

    return {

      style: context.architectureStyle,

      frontend: {
        framework:
          context.recommendation.stack?.frontend?.name ?? "N/A",
      },

      backend: {
        language:
          context.recommendation.stack?.language?.name ?? "N/A",

        framework:
          context.recommendation.stack?.backend?.name ?? "N/A",

        authentication: [
          context.security.authentication,
        ],

        apiStyle: "REST",
      },

      database: {
        primaryDatabase:
          context.recommendation.stack?.database?.name ?? "N/A",

        cache:
          context.recommendation.stack?.cache?.name,

        orm: "Not Specified",
      },

      deployment: {
        cloudProvider:
          context.deployment.cloudProvider,

        containerization:
          context.deployment.containerization,

        orchestration:
          context.deployment.orchestration,

        cicd:
          context.deployment.ciCd,
      },

      security: {
        authentication: [
          context.security.authentication,
        ],

        authorization: [
          context.security.authorization,
        ],

        encryption:
          context.security.encryption,

        securityPractices: [
          ...context.security.apiSecurity,
          ...context.security.databaseSecurity,
          ...context.security.infrastructureSecurity,
        ],
      },

      scalability: {
        caching:
          context.scalability.caching,

        loadBalancing:
          context.scalability.loadBalancing.length > 0,

        horizontalScaling:
          context.scalability.horizontalScaling,

        monitoring:
          context.scalability.monitoring,
      },

      folderStructure:
        context.folderStructure,

      apiDesign:
        context.apiDesign,

      databaseDesign:
        context.databaseDesign,

      components:
        context.components.components.map(component => ({
          name: component.name,
          responsibility: component.responsibility,
          dependencies: component.dependencies,
        })),

      highLevelDesign: {
        overview:
          "Generated automatically by ProjectIQ Architecture Engine.",

        components:
          context.components.components.map(component => component.name),
      },

      lowLevelDesign: {
        modules:
          context.components.components.map(component => component.name),

        interactions:
          context.relationships.relationships.map(
            relationship =>
              `${relationship.source} -> ${relationship.target}`
          ),
      },

      metadata: {

        generatedAt:
          new Date().toISOString(),

        architectureVersion:
          "1.0.0",

      },

    };

  }

}