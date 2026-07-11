import {
  ClipboardList,
  BrainCircuit,
  Network,
  CalendarDays,
 BadgeCheck,
  Lightbulb,
  BarChart3,
  FileDown,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WORKFLOW: WorkflowStep[] = [
  {
    step: "01",
    title: "Project Understanding",
    description:
      "Describe your project idea and requirements.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "AI Recommendation",
    description:
      "ProjectIQ recommends the best technologies and tools.",
    icon: BrainCircuit,
  },
  {
    step: "03",
    title: "Architecture Design",
    description:
      "Generate scalable system architecture automatically.",
    icon: Network,
  },
  {
    step: "04",
    title: "Planning",
    description:
      "Create milestones and a development roadmap.",
    icon: CalendarDays,
  },
  {
    step: "05",
    title: "Evaluation",
    description:
      "Evaluate quality, scalability and maintainability.",
    icon: BadgeCheck,
  },
  {
    step: "06",
    title: "Improvement",
    description:
      "Receive AI-powered improvement suggestions.",
    icon: Lightbulb,
  },
  {
    step: "07",
    title: "Analytics",
    description:
      "Analyze project readiness and success prediction.",
    icon: BarChart3,
  },
  {
    step: "08",
    title: "Professional Report",
    description:
      "Export a complete project report in PDF format.",
    icon: FileDown,
  },
];