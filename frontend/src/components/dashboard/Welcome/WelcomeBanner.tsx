import { Sparkles, ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

export default function WelcomeBanner() {
  return (
        <section
  className="pt-60 pb-36 relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-[#0B1220]
        px-10
        py-10"
  style={{
    marginTop: "20px",
    background: "black-500/20",
  }}
>
    
      {/* Glow */}

      <div
        className="
          absolute
          right-[-120px]
          top-[-120px]
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
            "
          >
            <Sparkles size={16} />

            AI Software Intelligence
          </div>

          <h1
            className="
              mt-6
              text-3xl
              font-bold
              leading-tight
            "
          >
            Welcome Back,
            <br />
            Aman 👋
          </h1>

          <p
            className="
              mt-6
              max-w-1xl
              text-lg
              leading-8
              text-slate-100
            "
          >
            Build, plan and evaluate software projects using
            AI-powered recommendations, architecture generation,
            intelligent planning and project analytics.
          </p>

        </div>

        <Button
          className="
            px-8
            flex
            h-12
            w-30
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            shadow-lg
            shadow-cyan-500/20
          "
        >
          Create Project

          <ArrowRight
            size={18}
            className="ml-2"
          />
        </Button>

      </div>

    </section>
  );
}