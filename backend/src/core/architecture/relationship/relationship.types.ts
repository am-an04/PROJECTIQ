import {
  EntityExtractionResult,
} from "../entity-extraction/entity-extraction.types.js";

export type RelationshipType =
  | "OneToOne"
  | "OneToMany"
  | "ManyToOne"
  | "ManyToMany";

export interface EntityRelationship {

  id: string;

  source: string;

  target: string;

  type: RelationshipType;

  description: string;

}

export interface RelationshipExtractionResult {

  relationships: EntityRelationship[];

}

export interface BuildRelationshipOptions {

  entities: EntityExtractionResult;

}

export interface RelationshipEngine {

  build(
    options: BuildRelationshipOptions
  ): RelationshipExtractionResult;

}