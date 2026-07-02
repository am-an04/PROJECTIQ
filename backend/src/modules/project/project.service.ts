import { ProjectModel } from "./project.model.js";
import { CreateProjectRequest } from "./project.types.js";
import { AppError } from "../../core/errors/AppError.js";
export class ProjectService {
  static async createProject(data: CreateProjectRequest) {
    const project = await ProjectModel.create({
      ...data,
      status: "Draft",
    });

    return project;
  }
  static async getAllProjects() {
    return await ProjectModel.find();
}
static async getProjectById(id: string) {
  const project = await ProjectModel.findById(id);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
}
static async updateProject(id: string, data: Partial<CreateProjectRequest>) {
  const project = await ProjectModel.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
}
static async deleteProject(id: string) {
  const project = await ProjectModel.findByIdAndDelete(id);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
}
}