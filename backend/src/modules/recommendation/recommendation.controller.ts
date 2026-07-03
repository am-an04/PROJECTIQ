// src/modules/recommendation/recommendation.controller.ts

import { Request, Response, NextFunction } from "express";
import { RecommendationService } from "./recommendation.service.js";

export class RecommendationController {
  static async generateRecommendation(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const recommendation =
        await RecommendationService.generateRecommendation(req.body);

      res.status(200).json({
        success: true,
        message: "Recommendation generated successfully",
        data: recommendation,
      });
    } catch (error) {
      next(error);
    }
  }
}