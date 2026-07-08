import architectureStyles from "./architecture-style.json" with { type: "json" };
import folderTemplates from "./folder-templates.json" with { type: "json" };
import apiConvention from "./api-conventions.json" with { type: "json" };
import databaseConvention from "./database-conventions.json" with { type: "json" };
import deploymentPatterns from "./deployment-patterns.json" with { type: "json" };

import {
  ArchitectureStyleKnowledge,
  FolderTemplate,
  ApiConvention,
  DatabaseConvention,
  DeploymentPattern,
} from "./architecture-knowledge.types.js";

export class ArchitectureKnowledgeService {

  static getArchitectureStyles(): ArchitectureStyleKnowledge[] {
    return architectureStyles as ArchitectureStyleKnowledge[];
  }

  static getFolderTemplates(): FolderTemplate[] {
    return folderTemplates as FolderTemplate[];
  }

  static getApiConvention(): ApiConvention {
    return apiConvention as ApiConvention;
  }

  static getDatabaseConvention(): DatabaseConvention {
    return databaseConvention as DatabaseConvention;
  }

  static getDeploymentPatterns(): DeploymentPattern[] {
    return deploymentPatterns as DeploymentPattern[];
  }

}