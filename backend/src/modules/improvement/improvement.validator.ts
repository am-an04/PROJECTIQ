import {
  ImprovementRequest,
} from "./improvement.types.js";

export class ImprovementValidator {

  static validate(
    request: ImprovementRequest
  ): void {

    if (!request.recommendation) {

      throw new Error(
        "Recommendation result is required."
      );

    }

    if (!request.planning) {

      throw new Error(
        "Planning result is required."
      );

    }

    if (!request.architecture) {

      throw new Error(
        "Architecture result is required."
      );

    }

    if (!request.evaluation) {

      throw new Error(
        "Evaluation result is required."
      );

    }

  }

}