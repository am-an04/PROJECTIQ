// src/core/knowledge/knowledge.roles.ts

import technologyRoles
  from "./data/technology-roles.json"
  with { type: "json" };

import { TechnologyRole } from "./knowledge.types.js";

export class KnowledgeRoleService {

  private static readonly roles =
    technologyRoles as Record<
      string,
      TechnologyRole
    >;

  static getRole(
    technology: string
  ): TechnologyRole | undefined {

    return this.roles[technology];

  }

  static hasRole(
    technology: string,
    role: TechnologyRole
  ): boolean {

    return this.roles[technology] === role;

  }

  static getTechnologiesByRole(
    role: TechnologyRole
  ): string[] {

    return Object.entries(this.roles)

      .filter(
        ([, value]) => value === role
      )

      .map(
        ([key]) => key
      );

  }

}