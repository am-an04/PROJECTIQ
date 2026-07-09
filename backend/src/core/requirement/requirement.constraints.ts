/**
 * ============================================================
 * Constraint Patterns
 * ============================================================
 *
 * These patterns are used to extract structured
 * project constraints from user requirements.
 */

export interface ConstraintPattern {

  key:
    | "budget"
    | "timeline"
    | "teamSize"
    | "platform"
    | "cloud"
    | "database"
    | "authentication";

  patterns: RegExp[];

}

export const CONSTRAINT_PATTERNS: ConstraintPattern[] = [

  /**
   * ------------------------------------------------------------
   * Budget
   * ------------------------------------------------------------
   */

  {

    key: "budget",

    patterns: [

      /budget\s*[:=]?\s*([\w\d]+)/i,

      /cost\s*[:=]?\s*([\w\d]+)/i,

      /under\s*\$?([\w\d]+)/i

    ]

  },

  /**
   * ------------------------------------------------------------
   * Timeline
   * ------------------------------------------------------------
   */

  {

    key: "timeline",

    patterns: [

      /timeline\s*[:=]?\s*([\w\d]+)/i,

      /deadline\s*[:=]?\s*([\w\d]+)/i,

      /within\s*([\w\d]+\s*(days?|weeks?|months?))/i,

      /in\s*([\w\d]+\s*(days?|weeks?|months?))/i

    ]

  },

  /**
   * ------------------------------------------------------------
   * Team Size
   * ------------------------------------------------------------
   */

  {

    key: "teamSize",

    patterns: [

      /team\s*[:=]?\s*([\w\d]+)/i,

      /team size\s*[:=]?\s*([\w\d]+)/i,

      /([\d]+)\s*developers?/i

    ]

  },

  /**
   * ------------------------------------------------------------
   * Platform
   * ------------------------------------------------------------
   */

  {

    key: "platform",

    patterns: [

      /\bweb\b/i,

      /\bmobile\b/i,

      /\bandroid\b/i,

      /\bios\b/i,

      /\bdesktop\b/i

    ]

  },

  /**
   * ------------------------------------------------------------
   * Cloud
   * ------------------------------------------------------------
   */

  {

    key: "cloud",

    patterns: [

      /\baws\b/i,

      /\bazure\b/i,

      /\bgcp\b/i,

      /\bgoogle cloud\b/i

    ]

  },

  /**
   * ------------------------------------------------------------
   * Database
   * ------------------------------------------------------------
   */

  {

    key: "database",

    patterns: [

      /\bmongodb\b/i,

      /\bmysql\b/i,

      /\bpostgresql\b/i,

      /\bsqlite\b/i,

      /\bredis\b/i

    ]

  },

  /**
   * ------------------------------------------------------------
   * Authentication
   * ------------------------------------------------------------
   */

  {

    key: "authentication",

    patterns: [

      /\bjwt\b/i,

      /\boauth\b/i,

      /\bsso\b/i,

      /\blogin\b/i,

      /\bauthentication\b/i

    ]

  }

];