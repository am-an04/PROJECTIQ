import {
  FeatureExtractionResult,
} from "../feature-extraction/feature-extraction.types.js";

export interface ProjectEntity {

  id: string;

  name: string;

  description: string;

  sourceFeature: string;

}

export interface EntityExtractionResult {

  entities: ProjectEntity[];

}

export interface BuildEntityExtractionOptions {

  features: FeatureExtractionResult;

}

export interface EntityExtractionEngine {

  build(
    options: BuildEntityExtractionOptions
  ): EntityExtractionResult;

}