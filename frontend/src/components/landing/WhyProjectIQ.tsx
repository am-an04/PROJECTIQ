

import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

import BenefitItem from "./BenefitItem";
import { BENEFITS } from "./benefits.data";

export default function WhyProjectIQ() {
  return (
    <section
  className="pt-60 pb-36"
  style={{
    marginTop: "100px",
    background: "black-500/20",
  }}
>
      <Container>

        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <div>

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
              "
            >
              Why Choose ProjectIQ
            </span>

            <h2
              className="
                mt-6
                text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Build Better Software
              <br />
              Projects with AI
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-400
              "
            >
              ProjectIQ helps students and developers move from an
              idea to an industry-ready software project using
              intelligent recommendations, architecture generation,
              planning, evaluation and analytics.
            </p>

            <div className="mt-12">

              <Button className="min-w-[220px]">

                Try ProjectIQ

                <ArrowRight
                  size={18}
                  className="ml-2"
                />

              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-5">

            {BENEFITS.map((benefit) => (

              <BenefitItem
                key={benefit}
                text={benefit}
              />

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}