import {
  Request,
  Response,
  NextFunction,
} from "express";

import {
  AnalyzeService,
} from "./analyze.service.js";

import {
  AnalyzeRequestSchema,
} from "./analyze.schema.js";

export class AnalyzeController {

  private readonly analyzeService =
    new AnalyzeService();

  public analyze = async (

    req: Request,

    res: Response,

    next: NextFunction

  ): Promise<void> => {

    try {

      const request =
        AnalyzeRequestSchema.parse(req.body);

      const result =
        await this.analyzeService.analyze(
          request
        );

      res.status(200).json({

        success: true,

        message:
          "Project analyzed successfully.",

        data: result,

      });

    } catch (error) {

      next(error);

    }

  };

}