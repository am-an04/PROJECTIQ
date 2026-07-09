import {
  EvaluationContext,
} from "../evaluation.context.js";

import {
  EvaluationReport,
  EvaluationSection,
  ReportEngine,
} from "./report.types.js";

export class DefaultReportEngine
  implements ReportEngine {

  build(
    context: EvaluationContext
  ): EvaluationReport {

    const sections: EvaluationSection[] = [];

    sections.push({

      title: "Project Overview",

      content: [

        `Overall Score: ${context.result?.overallScore ?? 0}`,

        `Grade: ${context.result?.overallGrade ?? "N/A"}`,

        `Complexity: ${context.result?.projectComplexity ?? "N/A"}`

      ]

    });

    sections.push({

      title: "Requirement Evaluation",

      content: [

        `Requirement Score: ${context.requirementScore ?? 0}`

      ]

    });

    sections.push({

      title: "Technology Evaluation",

      content: [

        `Technology Score: ${context.technologyScore ?? 0}`

      ]

    });

    sections.push({

      title: "Planning Evaluation",

      content: [

        `Planning Score: ${context.planningScore ?? 0}`

      ]

    });

    sections.push({

      title: "Architecture Evaluation",

      content: [

        `Architecture Score: ${context.architectureScore ?? 0}`

      ]

    });

    sections.push({

      title: "Quality Evaluation",

      content: [

        `Security Score: ${context.securityScore ?? 0}`,

        `Scalability Score: ${context.scalabilityScore ?? 0}`,

        `Maintainability Score: ${context.maintainabilityScore ?? 0}`

      ]

    });

    sections.push({

      title: "Strengths",

      content:
        context.result?.strengths ?? []

    });

    sections.push({

      title: "Weaknesses",

      content:
        context.result?.weaknesses ?? []

    });

    sections.push({

      title: "Improvement Suggestions",

      content:
        context.result?.improvements ?? []

    });

    return {

      title:
        "ProjectIQ Evaluation Report",

      generatedAt:
        new Date().toISOString(),

      version:
        "1.0.0",

      overallScore:
        context.result?.overallScore ?? 0,

      grade:
        context.result?.overallGrade ?? "N/A",

      placementReadiness:
        context.result?.placementReadiness ?? 0,

      resumeImpact:
        context.result?.resumeImpact ?? 0,

      sections,

    };

  }

}