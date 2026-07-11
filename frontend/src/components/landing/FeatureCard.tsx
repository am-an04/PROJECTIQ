import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

import Card from "../ui/Card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  color,
}: FeatureCardProps) {
  return (
    <Card className="group flex h-full flex-col cursor-pointer">

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-700
          bg-slate-800/70
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:border-cyan-400
        "
      >
        <Icon
          size={32}
          className={color}
        />
      </div>

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

      <p
        className="
          mt-5
          flex-grow
          text-[15px]
          leading-8
          text-slate-400
        "
      >
        {description}
      </p>

      <div
        className="
          mt-10
          flex
          items-center
          gap-2
          font-medium
          text-cyan-400
          transition-all
          duration-300
          group-hover:gap-4
        "
      >
        Learn More

        <ArrowRight size={18} />
      </div>

    </Card>
  );
}