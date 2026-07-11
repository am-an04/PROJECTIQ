import type { LucideIcon } from "lucide-react";

import {
  Brain,
  Rocket,
  FolderKanban,
  TrendingUp,
} from "lucide-react";

export interface Statistic {
  value: string;
  title: string;
  icon: LucideIcon;
  color: string;
}

export const STATISTICS: Statistic[] = [
  {
    value: "6+",
    title: "AI Engines",
    icon: Brain,
    color: "text-cyan-400",
  },
  {
    value: "100+",
    title: "Technologies",
    icon: Rocket,
    color: "text-violet-400",
  },
  {
    value: "50+",
    title: "Project Templates",
    icon: FolderKanban,
    color: "text-emerald-400",
  },
  {
    value: "95%",
    title: "Prediction Accuracy",
    icon: TrendingUp,
    color: "text-orange-400",
  },
];