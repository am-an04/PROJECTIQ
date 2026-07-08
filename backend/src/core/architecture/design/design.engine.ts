import {
  ArchitectureContext,
} from "../architecture.context.js";

import {
  ComponentInteraction,
  DataFlow,
  DesignEngine,
  DesignResult,
  SequenceFlow,
} from "./design.types.js";

export class DefaultDesignEngine
  implements DesignEngine {

  build(
    context: ArchitectureContext
  ): DesignResult {

    const components =
      context.components?.components ?? [];

    const relationships =
      context.relationships?.relationships ?? [];

    const componentInteractions: ComponentInteraction[] =

      components.map(component => ({

        source: component.name,

        target:
          component.dependencies.join(", ") || "None",

        description:
          component.responsibility,

      }));

    const dataFlows: DataFlow[] =

      relationships.map(relation => ({

        from: relation.source,

        to: relation.target,

        description:
          relation.description,

      }));

    const sequenceFlows: SequenceFlow[] = [

      {
        step: 1,
        title: "Client sends request"
      },

      {
        step: 2,
        title: "Controller validates request"
      },

      {
        step: 3,
        title: "Service executes business logic"
      },

      {
        step: 4,
        title: "Repository accesses database"
      },

      {
        step: 5,
        title: "Response returned to client"
      }

    ];

    return {

      highLevelDesign: {

        overview:
          "Architecture generated automatically by ProjectIQ.",

        architectureStyle:
          context.architectureStyle ?? "Monolithic",

        majorComponents:

          components.map(component => component.name),

      },

      lowLevelDesign: {

        modules:

          components.map(component => component.name),

        interactions:

          relationships.map(

            relation =>
              `${relation.source} -> ${relation.target}`

          ),

      },

      componentInteractions,

      dataFlows,

      sequenceFlows,

      notes: [

        "Architecture generated from Recommendation and Planning modules.",

        "Component responsibilities inferred automatically.",

        "Relationships derived from extracted entities."

      ]

    };

  }

}