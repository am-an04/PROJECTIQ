import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">

      <Sparkles
        size={18}
        className="text-cyan-400"
      />

      <span className="text-sm font-medium text-cyan-300">

        AI Powered Software Engineering Platform

      </span>

    </div>
  );
}