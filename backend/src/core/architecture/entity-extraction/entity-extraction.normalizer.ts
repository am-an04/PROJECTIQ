export class EntityNormalizer {

  /**
   * Normalize entity names.
   *
   * Example:
   *
   * Users -> User
   * Projects -> Project
   * Requirements -> Requirement
   */

  static normalize(
    entities: string[]
  ): string[] {

    const normalized = new Set<string>();

    for (const entity of entities) {

      let value = entity.trim();

      if (!value) continue;

      value =
        value.charAt(0).toUpperCase() +
        value.slice(1);

      /**
       * Convert plural to singular.
       */

      if (

        value.endsWith("ies")

      ) {

        value =
          value.substring(0, value.length - 3) + "y";

      }

      else if (

        value.endsWith("sses")

      ) {

        value =
          value.substring(0, value.length - 2);

      }

      else if (

        value.endsWith("s") &&

        !value.endsWith("ss")

      ) {

        value =
          value.substring(0, value.length - 1);

      }

      normalized.add(value);

    }

    return [...normalized];

  }

}