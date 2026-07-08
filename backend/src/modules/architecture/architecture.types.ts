import { RecommendationResult } from "../recommendation/recommendation.types.js";
import { PlanningResult } from "../planning/planning.types.js";

/* ============================================================
   Architecture Style
============================================================ */

export type ArchitectureStyle =
  | "Monolithic"
  | "Layered"
  | "Microservices"
  | "Serverless"
  | "Event Driven";

/* ============================================================
   Frontend
============================================================ */

export interface FrontendArchitecture {
  framework: string;
  stateManagement?: string;
  styling?: string;
  routing?: string;
}

/* ============================================================
   Backend
============================================================ */

export interface BackendArchitecture {
  language: string;
  framework: string;
  authentication: string[];
  apiStyle: string;
}

/* ============================================================
   Database
============================================================ */

export interface DatabaseArchitecture {
  primaryDatabase: string;
  cache?: string;
  orm?: string;
}

/* ============================================================
   Deployment
============================================================ */

export interface DeploymentArchitecture {
  cloudProvider: string;
  containerization: string;
  orchestration?: string;
  cicd?: string;
}

/* ============================================================
   Security
============================================================ */

export interface SecurityArchitecture {
  authentication: string[];
  authorization: string[];
  encryption: string[];
  securityPractices: string[];
}

/* ============================================================
   Scalability
============================================================ */

export interface ScalabilityPlan {
  caching: string[];
  loadBalancing: boolean;
  horizontalScaling: boolean;
  monitoring: string[];
}

/* ============================================================
   Folder Structure
============================================================ */

export interface FolderNode {
  name: string;
  type: "folder" | "file";
  children?: FolderNode[];
}

/* ============================================================
   API Design
============================================================ */

export interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
}

export interface ApiDesign {
  endpoints: ApiEndpoint[];
}

/* ============================================================
   Database Design
============================================================ */

export interface DatabaseCollection {
  name: string;
  purpose: string;
}

export interface DatabaseDesign {
  collections: DatabaseCollection[];
}

/* ============================================================
   Components
============================================================ */

export interface Component {
  name: string;
  responsibility: string;
  dependencies: string[];
}

/* ============================================================
   HLD
============================================================ */

export interface HighLevelDesign {
  overview: string;
  components: string[];
}

/* ============================================================
   LLD
============================================================ */

export interface LowLevelDesign {
  modules: string[];
  interactions: string[];
}

/* ============================================================
   Metadata
============================================================ */

export interface ArchitectureMetadata {
  generatedAt: string;
  architectureVersion: string;
}

/* ============================================================
   Input
============================================================ */

export interface ArchitectureInput {

  recommendation: RecommendationResult;

  planning: PlanningResult;

}

/* ============================================================
   Output
============================================================ */

export interface ArchitectureResult {

  style: ArchitectureStyle;

  frontend: FrontendArchitecture;

  backend: BackendArchitecture;

  database: DatabaseArchitecture;

  deployment: DeploymentArchitecture;

  security: SecurityArchitecture;

  scalability: ScalabilityPlan;

  folderStructure: FolderNode[];

  apiDesign: ApiDesign;

  databaseDesign: DatabaseDesign;

  components: Component[];

  highLevelDesign: HighLevelDesign;

  lowLevelDesign: LowLevelDesign;

  metadata: ArchitectureMetadata;

}