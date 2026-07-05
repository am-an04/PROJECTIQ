import {
  KnowledgeService,
} from "../../knowledge/index.js";

import {
  LearningPath,
  LearningStep,
} from "../../../modules/planning/planning.types.js";

import {
  BuildLearningPathOptions,
  LearningEngine,
} from "./learning.types.js";

export class DefaultLearningEngine
  implements LearningEngine {

  public build(
    options: BuildLearningPathOptions
  ): LearningPath {

    const learningPaths =
      KnowledgeService.getLearningPaths();

    const steps: LearningStep[] = [];

    let order = 1;

    for (const technology of options.technologies) {

      const learningPath =
        learningPaths.find(
          (path) =>
            path.technology.toLowerCase() ===
            technology.name.toLowerCase()
        );

      if (!learningPath) {
        continue;
      }

      for (const topic of learningPath.steps) {

        steps.push({

          order,

          topic,

          reason:
            `Required for learning ${technology.name}.`

        });

        order++;

      }

    }

    return {

      estimatedLearningWeeks:
        Math.max(1, Math.ceil(steps.length / 2)),

      steps,

    };

  }

}