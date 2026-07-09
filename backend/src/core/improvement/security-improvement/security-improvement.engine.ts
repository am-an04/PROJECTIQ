import {
  ImprovementContext,
} from "../improvement.context.js";

import {
  SecurityImprovementEngine,
} from "./security-improvement.types.js";

import {
  SecurityImprovement,
  ImprovementItem,
} from "../../../modules/improvement/improvement.types.js";

export class DefaultSecurityImprovementEngine
  implements SecurityImprovementEngine {

  improve(
    context: ImprovementContext
  ): SecurityImprovement {

    const security =
      context.architecture.security;

    const missingPractices: string[] = [];

    const recommendations: ImprovementItem[] = [];

    /* ==========================================
       Authentication
    ========================================== */

    if (
      security.authentication.length === 0
    ) {

      missingPractices.push(
        "Authentication"
      );

      recommendations.push({

        title: "Implement Authentication",

        description:
          "Secure the application using JWT or OAuth2.",

        priority: "Critical",

      });

    }

    /* ==========================================
       Authorization
    ========================================== */

    if (
      security.authorization.length === 0
    ) {

      missingPractices.push(
        "Authorization"
      );

      recommendations.push({

        title: "Role-Based Access Control",

        description:
          "Implement RBAC to restrict resource access.",

        priority: "High",

      });

    }

    /* ==========================================
       Encryption
    ========================================== */

    if (
      security.encryption.length === 0
    ) {

      missingPractices.push(
        "Encryption"
      );

      recommendations.push({

        title: "Enable HTTPS",

        description:
          "Use HTTPS and TLS for secure communication.",

        priority: "High",

      });

    }

    /* ==========================================
       Rate Limiting
    ========================================== */

    if (
      !security.securityPractices.some(
        practice =>
          practice.toLowerCase().includes("rate")
      )
    ) {

      missingPractices.push(
        "Rate Limiting"
      );

      recommendations.push({

        title: "Protect APIs",

        description:
          "Implement API rate limiting to prevent abuse.",

        priority: "Medium",

      });

    }

    /* ==========================================
       Audit Logs
    ========================================== */

    if (
      !security.securityPractices.some(
        practice =>
          practice.toLowerCase().includes("audit")
      )
    ) {

      missingPractices.push(
        "Audit Logging"
      );

      recommendations.push({

        title: "Enable Audit Logs",

        description:
          "Maintain logs for authentication and critical actions.",

        priority: "Medium",

      });

    }

    return {

      missingPractices,

      recommendations,

    };

  }

}