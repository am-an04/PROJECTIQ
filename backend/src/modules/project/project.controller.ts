import { Request, Response, NextFunction } from "express";
import { ProjectService } from "./project.service.js";

export class ProjectController {
  static async createProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const project = await ProjectService.createProject(req.body);

      res.status(201).json({
        success: true,
        message: "Project created successfully",
        data: project,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllProjects(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const projects = await ProjectService.getAllProjects();

        res.status(200).json({
            success: true,
            message: "Projects fetched successfully",
            data: projects,
        });

    } catch (error) {
        next(error);
    }
}
    static async getProjectById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const project = await ProjectService.getProjectById(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
}
static async updateProject(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const project = await ProjectService.updateProject(
      req.params.id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
}
static async deleteProject(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await ProjectService.deleteProject(req.params.id as string);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });

  } catch (error) {
    next(error);
  }
}
}