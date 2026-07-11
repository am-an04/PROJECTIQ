import type { LucideIcon } from "lucide-react";

import {
  Brain,
  CalendarDays,
  Network,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const FEATURES: Feature[] = [
  {
    title: "AI Recommendation",
    description:
      "Smart technology recommendations tailored to your project requirements.",
    icon: Brain,
    color: "text-cyan-400",
  },
  {
    title: "Planning",
    description:
      "Generate milestones, roadmaps and development timelines automatically.",
    icon: CalendarDays,
    color: "text-violet-400",
  },
  {
    title: "Architecture",
    description:
      "Design scalable backend, frontend and cloud architecture.",
    icon: Network,
    color: "text-emerald-400",
  },
  {
    title: "Evaluation",
    description:
      "Measure project quality, scalability and maintainability.",
    icon: ShieldCheck,
    color: "text-yellow-400",
  },
  {
    title: "Improvement",
    description:
      "Receive intelligent suggestions to strengthen your project.",
    icon: Lightbulb,
    color: "text-pink-400",
  },
  {
    title: "Analytics",
    description:
      "Track success prediction, resume impact and industry readiness.",
    icon: TrendingUp,
    color: "text-orange-400",
  },
];