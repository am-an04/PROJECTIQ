import { Sparkles } from "lucide-react";

export default function AuthIllustration() {
  return (
    <div
      className="
        relative
        hidden
        lg:flex
        min-h-[720px]
        flex-col
        justify-between
        overflow-hidden
        bg-gradient-to-br
        from-cyan-500/10
        via-[#081226]
        to-[#050816]
        p-12
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -top-32
          -left-24
          h-80
          w-80
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      {/* Logo */}

      <div className="relative z-10">

        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-300
          "
        >
          <Sparkles size={16} />

          ProjectIQ AI
        </span>

      </div>

      {/* AI Placeholder */}

      <div
        className="
          relative
          z-10
          flex
          flex-1
          items-center
          justify-center
        "
      >
        <div
          className="
            flex
            h-[320px]
            w-[320px]
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/20
            bg-slate-900/60
            text-center
            shadow-[0_0_80px_rgba(34,211,238,0.15)]
          "
        >
          <div>

            <h2 className="text-2xl font-semibold text-cyan-300">
              AI Assistant
            </h2>

            <p className="mt-4 text-slate-400">
              Animation will appear here
            </p>

          </div>
        </div>
      </div>

      {/* Bottom Text */}

      <div className="relative z-10 max-w-md">

        <h2
          className="
            text-4xl
            font-bold
            leading-tight
          "
        >
          Welcome to
          <span className="text-cyan-400">
            {" "}ProjectIQ
          </span>
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-400
          "
        >
          Build smarter software projects using AI-powered
          recommendations, architecture generation,
          planning, evaluation and analytics.
        </p>

      </div>

    </div>
  );
}