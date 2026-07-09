import { ArchitectureOrchestrator } from "../../core/architecture/ArchitectureOrchestrator.js";

import {
  ArchitectureRequestDto,
} from "./architecture.validation.js";

import {
  ArchitectureResult,
} from "./architecture.types.js";

export class ArchitectureService {

  private static readonly orchestrator =
    new ArchitectureOrchestrator();

  static generateArchitecture(

    request: ArchitectureRequestDto

  ): ArchitectureResult {

    return this.orchestrator.build({

      recommendation: request.recommendation as any,

      planning: request.planning as any,

    });

  }

}