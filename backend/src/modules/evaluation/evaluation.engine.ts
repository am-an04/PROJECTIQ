import {
  IEvaluationEngine,
  EvaluationRequest,
  EvaluationResult,
} from "./evaluation.types.js";

import {
  EvaluationContext,
} from "../../core/evaluation/evaluation.context.js";

import {
  EvaluationOrchestrator,
} from "../../core/evaluation/EvaluationOrchestrator.js";

import {
  DefaultRequirementScoreEngine,
} from "../../core/evaluation/requirement-score/index.js";

import {
  DefaultTechnologyScoreEngine,
} from "../../core/evaluation/technology-score/index.js";

import {
  DefaultPlanningScoreEngine,
} from "../../core/evaluation/planning-score/index.js";

import {
  DefaultArchitectureScoreEngine,
} from "../../core/evaluation/architecture-score/index.js";

import {
  DefaultQualityScoreEngine,
} from "../../core/evaluation/quality-score/index.js";

import {
  DefaultPlacementScoreEngine,
} from "../../core/evaluation/placement-score/index.js";

import {
  DefaultResumeScoreEngine,
} from "../../core/evaluation/resume-score/index.js";

import {
  DefaultImprovementEngine,
} from "../../core/evaluation/improvement/index.js";

export class EvaluationEngine
  implements IEvaluationEngine {

  evaluate(
    request: EvaluationRequest
  ): EvaluationResult {

    const context: EvaluationContext = {

      recommendation:
        request.recommendation,

      planning:
        request.planning,

      architecture:
        request.architecture,

    };

    /* ==========================================
       Requirement Score
    ========================================== */

    const requirement =
      new DefaultRequirementScoreEngine()
        .evaluate(context);

    context.requirementScore =
      requirement.score;

    /* ==========================================
       Technology Score
    ========================================== */

    const technology =
      new DefaultTechnologyScoreEngine()
        .evaluate(context);

    context.technologyScore =
      technology.score;

    /* ==========================================
       Planning Score
    ========================================== */

    const planning =
      new DefaultPlanningScoreEngine()
        .evaluate(context);

    context.planningScore =
      planning.score;

    /* ==========================================
       Architecture Score
    ========================================== */

    const architecture =
      new DefaultArchitectureScoreEngine()
        .evaluate(context);

    context.architectureScore =
      architecture.score;

    /* ==========================================
       Quality Score
    ========================================== */

    const quality =
      new DefaultQualityScoreEngine()
        .evaluate(context);

    context.securityScore =
      quality.securityScore;

    context.scalabilityScore =
      quality.scalabilityScore;

    context.maintainabilityScore =
      quality.maintainabilityScore;

    /* ==========================================
       Placement Score
    ========================================== */

    const placement =
      new DefaultPlacementScoreEngine()
        .evaluate(context);

    context.placementScore =
      placement.score;

    /* ==========================================
       Resume Score
    ========================================== */

    const resume =
      new DefaultResumeScoreEngine()
        .evaluate(context);

    context.resumeScore =
      resume.score;

    /* ==========================================
       Improvement Suggestions
    ========================================== */

    const improvement =
      new DefaultImprovementEngine()
        .evaluate(context);

    context.improvements =
      improvement.suggestions.map(
        suggestion => suggestion.title
      );

    /* ==========================================
       Merge Strengths
    ========================================== */

    context.strengths = [

      ...requirement.strengths,

      ...technology.strengths,

      ...planning.strengths,

      ...architecture.strengths,

      ...quality.strengths,

      ...placement.strengths,

      ...resume.strengths,

    ];

    /* ==========================================
       Merge Weaknesses
    ========================================== */

    context.weaknesses = [

      ...requirement.weaknesses,

      ...technology.weaknesses,

      ...planning.weaknesses,

      ...architecture.weaknesses,

      ...quality.weaknesses,

      ...placement.weaknesses,

      ...resume.weaknesses,

    ];

    /* ==========================================
       Summary
    ========================================== */

    context.summary =
      "Project evaluation completed successfully.";

    /* ==========================================
       Final Evaluation
    ========================================== */

    const orchestrator =
      new EvaluationOrchestrator();

    const result =
      orchestrator.evaluate(
        context
      );

    context.result =
      result;

    return result;

  }

}