import { RecommendationResult } from "../../../modules/recommendation/recommendation.types.js";

import {
  ComponentDesignResult,
} from "../component-design/component-design.types.js";

import {
  EntityExtractionResult,
} from "../entity-extraction/entity-extraction.types.js";

import {
  FolderNode,
} from "../../../modules/architecture/architecture.types.js";

export interface BuildFolderStructureOptions {

  recommendation: RecommendationResult;

  entities: EntityExtractionResult;

  components: ComponentDesignResult;

}

export interface FolderStructureEngine {

  build(
    options: BuildFolderStructureOptions
  ): FolderNode[];

}