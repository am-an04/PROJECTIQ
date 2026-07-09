import {
  BuildDeploymentOptions,
  DeploymentEngine,
  DeploymentResult,
  DeploymentStep,
} from "./deployment.types.js";

export class DefaultDeploymentEngine
  implements DeploymentEngine {

  build(
    options: BuildDeploymentOptions
  ): DeploymentResult {

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

    const cloud =
      hasTechnology("AWS")
        ? "AWS"
        : hasTechnology("Azure")
        ? "Azure"
        : hasTechnology("Google Cloud", "GCP")
        ? "Google Cloud"
        : "Local Server";

    const containerization =
      hasTechnology("Docker")
        ? "Docker"
        : "Not Required";

    const orchestration =
      hasTechnology("Kubernetes")
        ? "Kubernetes"
        : "None";

    const ciCd =
      hasTechnology("GitHub Actions")
        ? "GitHub Actions"
        : "Manual Deployment";

    const deploymentSteps: DeploymentStep[] = [];

    let order = 1;

    deploymentSteps.push({

      order: order++,

      title: "Build Application",

      description:
        "Compile and package the application."

    });

    if (containerization === "Docker") {

      deploymentSteps.push({

        order: order++,

        title: "Create Docker Image",

        description:
          "Containerize the application."

      });

      deploymentSteps.push({

        order: order++,

        title: "Push Docker Image",

        description:
          "Push image to the container registry."

      });

    }

    deploymentSteps.push({

      order: order++,

      title: "Deploy",

      description:
        `Deploy the application to ${cloud}.`

    });

    deploymentSteps.push({

      order: order++,

      title: "Verify Deployment",

      description:
        "Run health checks and verify the deployment."

    });

    return {

      cloudProvider: cloud,

      containerization,

      orchestration,

      ciCd,

      reverseProxy: "Nginx",

      monitoring: [

        "Health Checks",

        "Application Logs",

        "Performance Metrics"

      ],

      deploymentSteps,

    };

  }

}