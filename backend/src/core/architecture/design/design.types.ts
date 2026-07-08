import { ArchitectureContext } from "../architecture.context.js";

export interface HighLevelDesign {

  overview: string;

  architectureStyle: string;

  majorComponents: string[];

}

export interface LowLevelDesign {

  modules: string[];

  interactions: string[];

}

export interface ComponentInteraction {

  source: string;

  target: string;

  description: string;

}

export interface DataFlow {

  from: string;

  to: string;

  description: string;

}

export interface SequenceFlow {

  step: number;

  title: string;

}

export interface DesignResult {

  highLevelDesign: HighLevelDesign;

  lowLevelDesign: LowLevelDesign;

  componentInteractions: ComponentInteraction[];

  dataFlows: DataFlow[];

  sequenceFlows: SequenceFlow[];

  notes: string[];

}

export interface DesignEngine {

  build(
    context: ArchitectureContext
  ): DesignResult;

}