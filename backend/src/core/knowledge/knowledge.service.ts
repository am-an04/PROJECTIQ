// src/core/knowledge/knowledge.service.ts

import technologies from "./data/technologies.json" with { type: "json" };

import {
  Technology,
  TechnologyCategory,
  TechnologyCompatibility,
} from "./knowledge.types.js";

export class KnowledgeService {
  private static readonly technologyData =
    technologies as Technology[];

  static getAll(): Technology[] {
    return this.technologyData;
  }

  static getById(id: string): Technology | undefined {
    return this.technologyData.find(
      (technology) =>
        technology.id.toLowerCase() === id.toLowerCase()
    );
  }

  static getByName(name: string): Technology | undefined {
    return this.technologyData.find(
      (technology) =>
        technology.name.toLowerCase() === name.toLowerCase()
    );
  }

  static getByCategory(
    category: TechnologyCategory
  ): Technology[] {
    return this.technologyData.filter(
      (technology) => technology.category === category
    );
  }

  static search(keyword: string): Technology[] {
    const query = keyword.toLowerCase();

    return this.technologyData.filter((technology) => {
      return (
        technology.name.toLowerCase().includes(query) ||
        technology.description.toLowerCase().includes(query) ||
        technology.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        )
      );
    });
  }

  static searchByTags(tags: string[]): Technology[] {
  const searchTags = tags.map(tag => tag.toLowerCase());

  return this.technologyData.filter(technology =>
    searchTags.some(tag =>
      technology.tags.some(
        technologyTag => technologyTag.toLowerCase() === tag
      )
    )
  );
}

  static getAlternatives(name: string): string[] {
    const technology = this.getByName(name);

    return technology?.alternatives ?? [];
  }

  static getCompatibility(
    name: string
  ): TechnologyCompatibility | null {
    const technology = this.getByName(name);

    return technology?.compatibility ?? null;
  }

  static getEnterpriseTechnologies(): Technology[] {
    return this.technologyData.filter(
      (technology) => technology.enterpriseReady
    );
  }

  static getOpenSourceTechnologies(): Technology[] {
    return this.technologyData.filter(
      (technology) => technology.openSource
    );
  }

  static getTopRecommended(
    limit = 10
  ): Technology[] {
    return [...this.technologyData]
      .sort(
        (a, b) =>
          b.recommendationScore - a.recommendationScore
      )
      .slice(0, limit);
  }

static validateCompatibility(
  source: string,
  target: string
): boolean {

  const sourceTechnology =
    this.getByName(source);

  const targetTechnology =
    this.getByName(target);

  if (
    !sourceTechnology ||
    !targetTechnology
  ) {
    return false;
  }

  // -----------------------------------------
  // Source -> Target Compatibility
  // -----------------------------------------

  const sourceCompatible =
    Object.values(
      sourceTechnology.compatibility
    )
      .flat()
      .some(
        item =>
          item.toLowerCase() ===
          target.toLowerCase()
      );

  // -----------------------------------------
  // Target -> Source Compatibility
  // -----------------------------------------

  const targetCompatible =
    Object.values(
      targetTechnology.compatibility
    )
      .flat()
      .some(
        item =>
          item.toLowerCase() ===
          source.toLowerCase()
      );

  // -----------------------------------------
  // Compatible if either direction matches
  // -----------------------------------------

  return (
    sourceCompatible ||
    targetCompatible
  );

}
}