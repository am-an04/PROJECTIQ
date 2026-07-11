import {
  House,
  FolderOpen,
  Bot,
  BrainCircuit,
  Network,
  CalendarDays,
  BadgeCheck,
  BarChart3,
  FileText,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
  label: string;
  icon: LucideIcon;
  path: string;
  section: "main" | "workspace" | "account";
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: House,
    path: "/dashboard",
    section: "main",
  },
  {
    label: "Projects",
    icon: FolderOpen,
    path: "/projects",
    section: "main",
  },
  {
    label: "AI Workspace",
    icon: Bot,
    path: "/workspace",
    section: "main",
  },

  {
    label: "Recommendations",
    icon: BrainCircuit,
    path: "/recommendations",
    section: "workspace",
  },
  {
    label: "Architecture",
    icon: Network,
    path: "/architecture",
    section: "workspace",
  },
  {
    label: "Planning",
    icon: CalendarDays,
    path: "/planning",
    section: "workspace",
  },
  {
    label: "Evaluation",
    icon: BadgeCheck,
    path: "/evaluation",
    section: "workspace",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/analytics",
    section: "workspace",
  },
  {
    label: "Reports",
    icon: FileText,
    path: "/reports",
    section: "workspace",
  },

  {
    label: "Profile",
    icon: User,
    path: "/profile",
    section: "account",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
    section: "account",
  },
  {
    label: "Logout",
    icon: LogOut,
    path: "/logout",
    section: "account",
  },
];