import {
  Request,
  Response,
  NextFunction,
} from "express";

import {
  AnalyticsRequestSchema,
} from "./analytics.schema.js";

import {
  AnalyticsService,
} from "./analytics.service.js";

export class AnalyticsController {

  public generateAnalytics = (

    req: Request,

    res: Response,

    next: NextFunction

  ): void => {

    try {

      const request =

        AnalyticsRequestSchema.parse(

          req.body

        );

      const result =

        AnalyticsService.generateAnalytics(

          request

        );

      res.status(200).json({

        success: true,

        message:
          "Analytics generated successfully.",

        data: result,

      });

    }

    catch (error) {

      next(error);

    }

  };

}