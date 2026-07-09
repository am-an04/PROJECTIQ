import { randomUUID } from "crypto";

import {
  BuildRelationshipOptions,
  EntityRelationship,
  RelationshipEngine,
  RelationshipExtractionResult,
} from "./relationship.types.js";

export class DefaultRelationshipEngine
  implements RelationshipEngine {

  build(
    options: BuildRelationshipOptions
  ): RelationshipExtractionResult {

    const entities = options.entities.entities;

    const relationships: EntityRelationship[] = [];

    /**
     * Relationship inference is intentionally conservative.
     *
     * We do NOT create artificial relationships simply because
     * entities appear one after another.
     *
     * Relationships should only be created when enough semantic
     * information is available.
     */

    if (entities.length < 2) {

      return {

        relationships,

      };

    }

    /**
     * Placeholder for future intelligent relationship inference.
     *
     * Future versions will infer:
     *
     * User ----< Project
     * Project ----< Task
     * Order ----< Product
     * etc.
     */

    return {

      relationships,

    };

  }

}