import {
  Request,
  Response,
  NextFunction,
} from "express";

import {
  ImprovementRequestSchema,
} from "./improvement.schema.js";

import {
  ImprovementService,
} from "./improvement.service.js";

export class ImprovementController {

  public generateImprovement = (

    req: Request,

    res: Response,

    next: NextFunction

  ): void => {

    try {

      const request =
        ImprovementRequestSchema.parse(
          req.body
        );

      const result =
        ImprovementService.generateImprovement(
          request
        );

      res.status(200).json({

        success: true,

        message:
          "Improvement suggestions generated successfully.",

        data: result,

      });

    } catch (error) {

      next(error);

    }

  };

}