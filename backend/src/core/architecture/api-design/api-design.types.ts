import {
  EntityExtractionResult,
} from "../entity-extraction/entity-extraction.types.js";

import {
  ApiDesign,
} from "../../../modules/architecture/architecture.types.js";

export interface BuildApiDesignOptions {

  entities: EntityExtractionResult;

}

export interface ApiDesignEngine {

  build(
    options: BuildApiDesignOptions
  ): ApiDesign;

}