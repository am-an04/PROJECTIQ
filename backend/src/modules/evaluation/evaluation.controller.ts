import {
  NextFunction,
  Request,
  Response,
} from "express";

import {
  EvaluationService,
} from "./evaluation.service.js";

export class EvaluationController {

  static evaluate(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {

    try {

      const result =
        EvaluationService.evaluate(
          req.body
        );

      res.status(200).json({

        success: true,

        message:
          "Project evaluated successfully.",

        data: result,

      });

    } catch (error) {

      next(error);

    }

  }

}