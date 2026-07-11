import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AiAssistant() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Outer Glow */}
      <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Glass Circle */}
      <div
        className="
          relative
          flex
          h-[420px]
          w-[420px]
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-slate-900/50
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(34,211,238,0.18)]
        "
      >
        <DotLottieReact
          src="/src/assets/animations/ai-assistant.lottie"
          autoplay
          loop
          style={{
            width: "340px",
            height: "340px",
          }}
        />
      </div>
    </div>
  );
}