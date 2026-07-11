import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        `
        h-full
        rounded-3xl
        border
        border-slate-700/50
        bg-slate-900/60
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}