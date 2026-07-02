
import { Router } from "express";
import { ProjectController } from "./project.controller.js";
import { validate } from "../../middleware/validation.middleware.js";
import { createProjectSchema } from "./project.validation.js";

const router = Router();

router.post(
  "/",
  validate(createProjectSchema),
  ProjectController.createProject
);

router.get("/", ProjectController.getAllProjects);

router.get("/:id", ProjectController.getProjectById);

router.patch("/:id", ProjectController.updateProject);

router.delete("/:id", ProjectController.deleteProject);

export default router;