export type ProjectType = "Technical" | "Non-Technical";

export type ProjectDifficulty = "Easy" | "Medium" | "Hard";

export type ProjectStatus = "Draft" | "Active" | "Completed";

export interface Project {
  title: string;
  description: string;
  domain: string;
  projectType: ProjectType;
  difficulty: ProjectDifficulty;
  status: ProjectStatus;
}

export interface CreateProjectRequest {
  title: string;
  description: string;
  domain: string;
  projectType: ProjectType;
  difficulty: ProjectDifficulty;
}

export interface UpdateProjectRequest {
  title?: string;
  description?: string;
  domain?: string;
  projectType?: ProjectType;
  difficulty?: ProjectDifficulty;
  status?: ProjectStatus;
}