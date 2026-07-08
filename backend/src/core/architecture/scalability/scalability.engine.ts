import {
  BuildScalabilityOptions,
  ScalabilityEngine,
  ScalabilityResult,
  ScalingStrategy,
} from "./scalability.types.js";

export class DefaultScalabilityEngine
  implements ScalabilityEngine {

  build(
    options: BuildScalabilityOptions
  ): ScalabilityResult {

    const recommendation = options.recommendation;

    const planning = options.planning;

    const technologies =
      recommendation.technologies.map(
        technology => technology.name.toLowerCase()
      );

    const hasTechnology = (
      ...names: string[]
    ) =>
      names.some(name =>
        technologies.includes(name.toLowerCase())
      );

    const weeks =
      planning.metadata.estimatedCompletionWeeks;

    let scalabilityLevel:
      | "Small"
      | "Medium"
      | "Large"
      | "Enterprise" = "Small";

    if (weeks >= 8) {

      scalabilityLevel = "Medium";

    }

    if (weeks >= 16) {

      scalabilityLevel = "Large";

    }

    if (weeks >= 24) {

      scalabilityLevel = "Enterprise";

    }

    const strategies: ScalingStrategy[] = [

      {
        title: "Stateless Backend",
        description:
          "Keep backend services stateless for horizontal scaling."
      },

      {
        title: "Caching",
        description:
          "Cache frequently accessed data to reduce database load."
      },

      {
        title: "Database Optimization",
        description:
          "Use indexing and optimized queries."
      },

      {
        title: "Monitoring",
        description:
          "Continuously monitor application performance."
      }

    ];

    if (hasTechnology("Kubernetes")) {

      strategies.push({

        title: "Container Orchestration",

        description:
          "Automatically scale workloads using Kubernetes."

      });

    }

    if (hasTechnology("Redis")) {

      strategies.push({

        title: "Distributed Cache",

        description:
          "Use Redis to reduce response time."

      });

    }

    const caching = [

      "Application Cache"

    ];

    if (hasTechnology("Redis")) {

      caching.unshift("Redis");

    }

    const loadBalancing: string[] = [];

    if (
      scalabilityLevel !== "Small"
    ) {

      loadBalancing.push(

        "Nginx",

        "Cloud Load Balancer"

      );

    }

    const messaging: string[] = [];

    if (hasTechnology("Kafka")) {

      messaging.push("Kafka");

    }

    const monitoring = [

      "Application Metrics"

    ];

    if (
      scalabilityLevel !== "Small"
    ) {

      monitoring.unshift(

        "Prometheus",

        "Grafana"

      );

    }

    return {

      scalabilityLevel,

      horizontalScaling: true,

      verticalScaling: true,

      autoScaling:
        hasTechnology("Kubernetes"),

      caching,

      loadBalancing,

      databaseScaling: [

        "Indexes",

        "Read Replicas",

        "Connection Pooling"

      ],

      messaging,

      monitoring,

      strategies,

    };

  }

}