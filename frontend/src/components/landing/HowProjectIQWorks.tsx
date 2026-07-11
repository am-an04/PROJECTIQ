import Container from "../ui/Container";
import WorkflowStepCard from "./WorkflowStepCard";
import { WORKFLOW } from "./workflow.data";

export default function HowProjectIQWorks() {
  return (
    <section
  className="pt-60 pb-36"
  style={{
    marginTop: "100px",
    background: "black-500/20",
  }}
>
      <Container>
        {/* Heading */}

       <div className="mt-32 text-center  pt-60 pb-50">

          

          <span
            className="
              inline-block
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-sm
              font-medium
              text-cyan-300
              gap-16
            "
          >
            How It Works
          </span>

          <h2
            className="
              mt-6
              text-4xl
              lg:text-6xl
              font-bold
            "
          >
             From Idea to Complete Project
          </h2>
        <div className="flex justify-center mt-8">
          <p
            className="w-[600px] text-center text-lg leading-8 text-slate-400 bg-black-500/20"
          >
            ProjectIQ guides you through every stage of software
            development using intelligent AI engines.
          </p>
        </div>
        </div>

        {/* Workflow Grid */}

        <div
          className="
            mt-24
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {WORKFLOW.map((step) => (
            <WorkflowStepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}