import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="flex min-h-screen bg-[#050816] text-white">
      {children}
    </main>
  );
}