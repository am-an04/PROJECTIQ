import {
  BuildSecurityOptions,
  SecurityEngine,
  SecurityMeasure,
  SecurityResult,
} from "./security.types.js";

export class DefaultSecurityEngine
  implements SecurityEngine {

  build(
    options: BuildSecurityOptions
  ): SecurityResult {

    const technologies =
      options.recommendation.technologies.map(
        technology => technology.name.toLowerCase()
      );

    const hasTechnology = (
      ...names: string[]
    ) =>
      names.some(name =>
        technologies.includes(name.toLowerCase())
      );

    const authentication =
      hasTechnology("JWT")
        ? "JWT"
        : "Session Authentication";

    const authorization =
      "Role Based Access Control (RBAC)";

    const measures: SecurityMeasure[] = [

      {
        category: "Authentication",
        title: "JWT Authentication",
        description:
          "Authenticate users using JWT access tokens."
      },

      {
        category: "Passwords",
        title: "Password Hashing",
        description:
          "Store passwords using bcrypt hashing."
      },

      {
        category: "API",
        title: "Rate Limiting",
        description:
          "Prevent brute-force attacks."
      },

      {
        category: "HTTP",
        title: "Security Headers",
        description:
          "Protect APIs using Helmet."
      },

      {
        category: "Validation",
        title: "Input Validation",
        description:
          "Validate all incoming requests using Zod."
      },

      {
        category: "Database",
        title: "Parameterized Queries",
        description:
          "Prevent SQL/NoSQL injection attacks."
      },

      {
        category: "Logging",
        title: "Audit Logs",
        description:
          "Maintain security audit logs."
      }

    ];

    if (hasTechnology("Docker")) {

      measures.push({

        category: "Container",

        title: "Container Security",

        description:
          "Scan Docker images and run containers with least privilege."

      });

    }

    if (hasTechnology("Kubernetes")) {

      measures.push({

        category: "Infrastructure",

        title: "Cluster Security",

        description:
          "Secure Kubernetes workloads using RBAC and network policies."

      });

    }

    return {

      authentication,

      authorization,

      encryption: [

        "HTTPS",

        "TLS 1.3",

        "bcrypt"

      ],

      apiSecurity: [

        "Helmet",

        "CORS",

        "Rate Limiting"

      ],

      databaseSecurity: [

        "Encrypted Backups",

        "Least Privilege Access"

      ],

      infrastructureSecurity: [

        "Firewall",

        "Private Network",

        "IAM Roles"

      ],

      monitoring: [

        "Audit Logs",

        "Security Alerts",

        "Intrusion Detection"

      ],

      measures,

    };

  }

}