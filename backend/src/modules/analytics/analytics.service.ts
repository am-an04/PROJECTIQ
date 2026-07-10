import {
  AnalyticsOrchestrator,
} from "../../core/analytics/index.js";

import {
  AnalyticsRequestDto,
} from "./analytics.schema.js";

import {
  AnalyticsResult,
} from "./analytics.types.js";

export class AnalyticsService {

  private static readonly orchestrator =
    new AnalyticsOrchestrator();

  static generateAnalytics(

    request: AnalyticsRequestDto

  ): AnalyticsResult {

    return this.orchestrator.analyze({

      recommendation:
        request.recommendation as any,

      planning:
        request.planning as any,

      architecture:
        request.architecture as any,

      evaluation:
        request.evaluation as any,

      improvement:
        request.improvement as any,

    });

  }

}