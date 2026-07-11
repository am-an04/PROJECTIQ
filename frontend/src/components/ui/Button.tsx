import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: "primary" | "secondary" | "outline";

}

export default function Button({

  children,

  className,

  variant = "primary",

  ...props

}: ButtonProps) {

  const variants = {

  primary:

    "bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)]",

  secondary:

    "bg-violet-600 text-white hover:bg-violet-500",

  outline:

    "border border-white/20 bg-transparent text-white hover:bg-white/5",

};

  return (

    <button

     className={clsx(

  "h-12",

  "px-8",

  "rounded-xl",

  "font-medium",

  "text-sm",

  "transition-all",

  "duration-300",

  "hover:scale-[1.03]",

  "active:scale-95",

  variants[variant],

  className

)}

      {...props}

    >

      {children}

    </button>

  );

}