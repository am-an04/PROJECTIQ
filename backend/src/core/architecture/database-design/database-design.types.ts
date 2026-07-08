import {
  EntityExtractionResult,
} from "../entity-extraction/entity-extraction.types.js";

import {
  RelationshipExtractionResult,
} from "../relationship/relationship.types.js";

import {
  DatabaseDesign,
} from "../../../modules/architecture/architecture.types.js";

export interface BuildDatabaseDesignOptions {

  entities: EntityExtractionResult;

  relationships: RelationshipExtractionResult;

}

export interface DatabaseDesignEngine {

  build(
    options: BuildDatabaseDesignOptions
  ): DatabaseDesign;

}