import { NextFunction, Request, Response } from "express";

import { ArchitectureService } from "./architecture.service.js";

export class ArchitectureController {

  static generateArchitecture(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {

    try {

      const architecture =
        ArchitectureService.generateArchitecture(
          req.body
        );

      res.status(200).json({

        success: true,

        message:
          "Architecture generated successfully.",

        data: architecture,

      });

    } catch (error) {

      next(error);

    }

  }

}