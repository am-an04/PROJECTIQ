import {
  EvaluationEngine,
} from "./evaluation.engine.js";

import {
  EvaluationRequest,
  EvaluationResult,
} from "./evaluation.types.js";

import {
  EvaluationValidator,
} from "./evaluation.validator.js";

export class EvaluationService {

  static evaluate(
    request: EvaluationRequest
  ): EvaluationResult {

    EvaluationValidator.validate(
      request
    );

    const engine =
      new EvaluationEngine();

    return engine.evaluate(
      request
    );

  }

}