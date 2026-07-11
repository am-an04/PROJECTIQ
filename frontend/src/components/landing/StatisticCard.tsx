import type { LucideIcon } from "lucide-react";

import Card from "../ui/Card";

interface StatisticCardProps {
  value: string;
  title: string;
  icon: LucideIcon;
  color: string;
}

export default function StatisticCard({
  value,
  title,
  icon: Icon,
  color,
}: StatisticCardProps) {
  return (
    <Card
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        text-center
        cursor-pointer
      "
    >
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

      <h2
        className="
          mt-6
          text-5xl
          font-extrabold
          text-white
        "
      >
        {value}
      </h2>

      <p
        className="
          mt-3
          text-lg
          text-slate-400
        "
      >
        {title}
      </p>
    </Card>
  );
}