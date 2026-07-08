import {
  RecommendationResult,
} from "../../modules/recommendation/recommendation.types.js";

import {
  PlanningResult,
} from "../../modules/planning/planning.types.js";

import {
  FeatureExtractionResult,
} from "./feature-extraction/feature-extraction.types.js";

import {
  EntityExtractionResult,
} from "./entity-extraction/entity-extraction.types.js";

import {
  RelationshipExtractionResult,
} from "./relationship/relationship.types.js";

import {
  ComponentDesignResult,
} from "./component-design/component-design.types.js";

import {
  DeploymentResult,
} from "./deployment/deployment.types.js";

import {
  SecurityResult,
} from "./security/security.types.js";

import {
  ScalabilityResult,
} from "./scalability/scalability.types.js";

import {
  ArchitectureStyle,
  FolderNode,
  ApiDesign,
  DatabaseDesign,
} from "../../modules/architecture/architecture.types.js";

export interface ArchitectureContext {

  recommendation: RecommendationResult;

  planning: PlanningResult;

  features?: FeatureExtractionResult;

  entities?: EntityExtractionResult;

  relationships?: RelationshipExtractionResult;

  components?: ComponentDesignResult;

  architectureStyle?: ArchitectureStyle;

  folderStructure?: FolderNode[];

  databaseDesign?: DatabaseDesign;

  apiDesign?: ApiDesign;

  deployment?: DeploymentResult;

  security?: SecurityResult;

  scalability?: ScalabilityResult;

}