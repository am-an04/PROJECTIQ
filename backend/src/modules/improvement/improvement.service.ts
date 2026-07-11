import {
  ImprovementOrchestrator,
} from "../../core/improvement/index.js";

import {
  ImprovementRequestDto,
} from "./improvement.schema.js";

import {
  ImprovementResult,
} from "./improvement.types.js";

export class ImprovementService {

  private static readonly orchestrator =
    new ImprovementOrchestrator();

  static generateImprovement(

    request: ImprovementRequestDto

  ): ImprovementResult {

    return this.orchestrator.improve({

      recommendation:
        request.recommendation as any,

      planning:
        request.planning as any,

      architecture:
        request.architecture as any,

      evaluation:
        request.evaluation as any,

    });

  }

}