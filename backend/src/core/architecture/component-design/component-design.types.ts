import {
  EntityExtractionResult,
} from "../entity-extraction/entity-extraction.types.js";

export type ComponentType =
  | "Controller"
  | "Service"
  | "Repository"
  | "Model"
  | "DTO"
  | "Validator";

export interface ArchitectureComponent {

  id: string;

  name: string;

  type: ComponentType;

  entity: string;

  responsibility: string;

  dependencies: string[];

}

export interface ComponentDesignResult {

  components: ArchitectureComponent[];

}

export interface BuildComponentDesignOptions {

  entities: EntityExtractionResult;

}

export interface ComponentDesignEngine {

  build(
    options: BuildComponentDesignOptions
  ): ComponentDesignResult;

}