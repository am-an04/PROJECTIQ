import type { LucideIcon } from "lucide-react";

import Card from "../ui/Card";

interface WorkflowStepCardProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function WorkflowStepCard({
  step,
  title,
  description,
  icon: Icon,
}: WorkflowStepCardProps) {
  return (
    <Card
      className="
        relative
        group
        flex
        flex-col
        items-start
        h-full
      "
    >
      {/* Step Number */}

      <span
        className="
          absolute
          top-6
          right-6
          text-4xl
          font-extrabold
          text-slate-700
        "
      >
        {step}
      </span>

      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-400/10
          border
          border-cyan-400/20
          transition-all
          duration-300
          group-hover:scale-110
        "
      >
        <Icon
          size={32}
          className="text-cyan-400"
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-8
          text-2xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          text-slate-400
          leading-8
        "
      >
        {description}
      </p>
    </Card>
  );
}