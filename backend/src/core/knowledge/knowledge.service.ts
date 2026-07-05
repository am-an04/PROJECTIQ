// src/core/knowledge/knowledge.service.ts

import technologies from "./data/technologies.json" with { type: "json" };
import technologyRoles from "./data/technology-roles.json" with { type: "json" };

import developmentPhases from "./data/planning/development-phases.json" with { type: "json" };
import milestoneTemplates from "./data/planning/milestone-templates.json" with { type: "json" };
import learningPaths from "./data/planning/learning-paths.json" with { type: "json" };
import durationEstimates from "./data/planning/duration-estimates.json" with { type: "json" };

import {
  Technology,
  TechnologyRole,
  DevelopmentPhase,
  MilestoneTemplate,
  LearningPathTemplate,
  DurationEstimate,
} from "./knowledge.types.js";

export class KnowledgeService {

  /* ======================================================
     Technology Knowledge
  ====================================================== */

  static getTechnologies(): Technology[] {
    return technologies as Technology[];
  }

  static getTechnologyRoles(): Record<string, TechnologyRole> {
    return technologyRoles as Record<string, TechnologyRole>;
  }

  static getTechnologyById(
    id: string
  ): Technology | undefined {

    return this.getTechnologies().find(
      technology => technology.id === id
    );

  }

  static getTechnologyByName(
    name: string
  ): Technology | undefined {

    return this.getTechnologies().find(
      technology =>
        technology.name.toLowerCase() ===
        name.toLowerCase()
    );

  }

  static getTechnologiesByCategory(
    category: Technology["category"]
  ): Technology[] {

    return this.getTechnologies().filter(
      technology =>
        technology.category === category
    );

  }

  static getTechnologiesByRole(
    role: keyof ReturnType<typeof KnowledgeService.getTechnologyRoles>
  ): Technology[] {

    const mapping = this.getTechnologyRoles();

    const category = mapping[role];

    if (!category) {
      return [];
    }

    return this.getTechnologies().filter(
      technology =>
        technology.category === category
    );

  }

  static searchTechnologies(
    keyword: string
  ): Technology[] {

    const search = keyword.toLowerCase();

    return this.getTechnologies().filter((technology) =>

      technology.name.toLowerCase().includes(search) ||

      technology.description.toLowerCase().includes(search) ||

      technology.tags.some(tag =>
        tag.toLowerCase().includes(search)
      ) ||

      technology.bestUseCases.some(useCase =>
        useCase.toLowerCase().includes(search)
      )

    );

  }

  static validateCompatibility(
  sourceTechnology: string,
  targetTechnology: string
): boolean {

  const technology =
    this.getTechnologyByName(sourceTechnology);

  if (!technology) {
    return false;
  }

  const compatibility = technology.compatibility;

  const supported: string[] = [];

  Object.values(compatibility).forEach((items) => {

    if (Array.isArray(items)) {
      supported.push(...items);
    }

  });

  return supported.some(
    technology =>
      technology.toLowerCase() ===
      targetTechnology.toLowerCase()
  );

}

  /* ======================================================
     Planning Knowledge
  ====================================================== */

  static getDevelopmentPhases(): DevelopmentPhase[] {
    return developmentPhases as DevelopmentPhase[];
  }

  static getMilestoneTemplates(): MilestoneTemplate[] {
    return milestoneTemplates as MilestoneTemplate[];
  }

  static getLearningPaths(): LearningPathTemplate[] {
    return learningPaths as LearningPathTemplate[];
  }

  static getDurationEstimates(): DurationEstimate[] {
    return durationEstimates as DurationEstimate[];
  }

}