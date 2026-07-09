import {
  EvaluationRequest,
} from "./evaluation.types.js";

export class EvaluationValidator {

  static validate(
    request: EvaluationRequest
  ): void {

    if (!request) {

      throw new Error(
        "Evaluation request is required."
      );

    }

    /* =====================================================
       Recommendation
    ===================================================== */

    if (!request.recommendation) {

      throw new Error(
        "Recommendation result is required."
      );

    }

    if (

      !request.recommendation.technologies ||

      request.recommendation.technologies.length === 0

    ) {

      throw new Error(
        "At least one recommended technology is required."
      );

    }

    /* =====================================================
       Planning
    ===================================================== */

    if (!request.planning) {

      throw new Error(
        "Planning result is required."
      );

    }

    if (

      !request.planning.tasks ||

      request.planning.tasks.length === 0

    ) {

      throw new Error(
        "Planning tasks are required."
      );

    }

    if (

      !request.planning.roadmap ||

      request.planning.roadmap.milestones.length === 0

    ) {

      throw new Error(
        "Planning roadmap is required."
      );

    }

    /* =====================================================
       Architecture
    ===================================================== */

    if (!request.architecture) {

      throw new Error(
        "Architecture result is required."
      );

    }

    if (

      !request.architecture.components ||

      request.architecture.components.length === 0

    ) {

      throw new Error(
        "Architecture components are required."
      );

    }

    if (

      !request.architecture.apiDesign ||

      request.architecture.apiDesign.endpoints.length === 0

    ) {

      throw new Error(
        "Architecture API design is required."
      );

    }

  }

}