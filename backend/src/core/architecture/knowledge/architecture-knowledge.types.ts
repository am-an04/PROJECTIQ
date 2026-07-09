export interface ArchitectureStyleKnowledge {

  id: string;

  name: string;

  description: string;

  suitableFor: {

    minComplexity: number;

    minWeeks: number;

    scalable: boolean;

  };

}

export interface FolderTemplate {

  id: string;

  stack: string;

  folders: string[];

}

export interface ApiConvention {

  resourcePlural: boolean;

  includeCrud: boolean;

  versionPrefix: string;

}

export interface DatabaseConvention {

  pluralizeCollections: boolean;

  namingConvention: "camelCase" | "snake_case";

}

export interface DeploymentPattern {

  id: string;

  name: string;

  description: string;

}

export interface ArchitectureKnowledge {

  styles: ArchitectureStyleKnowledge[];

  folderTemplates: FolderTemplate[];

  apiConvention: ApiConvention;

  databaseConvention: DatabaseConvention;

  deploymentPatterns: DeploymentPattern[];

}