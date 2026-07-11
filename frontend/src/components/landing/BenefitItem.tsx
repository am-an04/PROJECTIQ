import { CheckCircle2 } from "lucide-react";

interface BenefitItemProps {
  text: string;
}

export default function BenefitItem({
  text,
}: BenefitItemProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        rounded-xl
        border
        border-slate-800
        bg-slate-900/40
        px-5
        py-4
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-slate-900/70
      "
    >
      <CheckCircle2
        size={24}
        className="
          text-cyan-400
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <span
        className="
          text-lg
          text-slate-300
        "
      >
        {text}
      </span>
    </div>
  );
}