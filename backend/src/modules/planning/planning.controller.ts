import { Request, Response, NextFunction } from "express";

import { PlanningService } from "./planning.service.js";
import { PlanningRequestSchema } from "./planning.schema.js";

import { RecommendationResult } from "../recommendation/recommendation.types.js";

export class PlanningController {

  private readonly planningService = new PlanningService();

  public generatePlan = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {

    try {
console.log(
  JSON.stringify(req.body, null, 2)
);
      const validatedRequest =
        PlanningRequestSchema.parse(req.body);

      const recommendation =
        validatedRequest.recommendation as RecommendationResult;

      const planningResult =
        this.planningService.generatePlan(recommendation);

      res.status(200).json({
        success: true,
        message: "Project plan generated successfully.",
        data: planningResult,
      });

    } catch (error) {
      next(error);
    }

  };

}