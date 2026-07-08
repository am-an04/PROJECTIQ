import { ArchitectureContext } from "../architecture.context.js";

export interface Diagram {

  title: string;

  type:
    | "Architecture"
    | "ER"
    | "Component"
    | "Sequence"
    | "Deployment";

  mermaid: string;

}

export interface DiagramResult {

  diagrams: Diagram[];

}

export interface DiagramEngine {

  build(
    context: ArchitectureContext
  ): DiagramResult;

}