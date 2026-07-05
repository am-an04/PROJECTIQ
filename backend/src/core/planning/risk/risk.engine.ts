import {
  Risk,
  RiskLevel,
  RiskSummary,
} from "../../../modules/planning/planning.types.js";

import {
  BuildRiskSummaryOptions,
  RiskEngine,
} from "./risk.types.js";

export class DefaultRiskEngine
  implements RiskEngine {

  public build(
    options: BuildRiskSummaryOptions
  ): RiskSummary {

    const risks: Risk[] = [];

    let overallRisk: RiskLevel = "Low";

    for (const technology of options.technologies) {

      switch (technology.category) {

        case "AI/ML":

          risks.push({

            title: "Machine Learning Model Performance",

            severity: "High",

            mitigation:
              "Train and evaluate multiple models before deployment.",

          });

          overallRisk = "High";

          break;

        case "Cloud":

          risks.push({

            title: "Cloud Infrastructure Cost",

            severity: "Medium",

            mitigation:
              "Monitor cloud usage and configure budgets.",

          });

          if (overallRisk !== "High") {
            overallRisk = "Medium";
          }

          break;

        case "Database":

          risks.push({

            title: "Database Scalability",

            severity: "Medium",

            mitigation:
              "Design indexes and monitor query performance.",

          });

          if (overallRisk !== "High") {
            overallRisk = "Medium";
          }

          break;

        default:

          break;

      }

    }

    if (risks.length === 0) {

      risks.push({

        title: "General Project Risk",

        severity: "Low",

        mitigation:
          "Follow software engineering best practices.",

      });

    }

    return {

      overallRisk,

      risks,

    };

  }

}