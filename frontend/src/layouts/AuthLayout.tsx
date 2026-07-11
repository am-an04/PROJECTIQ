import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main
      className="
        min-h-screen
        bg-[#050816]
        flex
        items-center
        justify-center
        p-8
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          rounded-[36px]
          border
          border-slate-800
          bg-[#0b1220]
          overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-2">
          {children}
        </div>
      </div>
    </main>
  );
}