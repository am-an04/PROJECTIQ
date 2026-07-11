import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
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
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-slate-900
            via-[#081226]
            to-slate-900
            px-10
            py-24
            text-center
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-80
              w-80
              -translate-x-1/2
              rounded-full
              bg-cyan-500/20
              blur-[120px]
            "
          />

          <div className="relative">

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
              Ready to Build?
            </span>

            <h2
              className="
                mt-8
                text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Transform Your Ideas
              <br />
              Into Industry-Ready Projects
            </h2>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-slate-400
              "
            >
              Let ProjectIQ recommend technologies, generate
              architecture, create roadmaps, evaluate quality,
              and produce professional reports—all in one place.
            </p>

            <div
              className="
                mt-12
                flex
                flex-wrap
                justify-center
                gap-5
              "
            >
              <Button className="min-w-[180px]">
                Get Started
              </Button>

              <Button
                variant="outline"
                className="min-w-[180px]"
              >
                Watch Demo

                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Button>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}