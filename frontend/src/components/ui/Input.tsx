import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({

  ...props

}: Props) {

  return (

    <input

      className="

      w-full

      rounded-xl

      bg-slate-900

      border

      border-slate-700

      px-4

      py-3

      outline-none

      focus:border-cyan-400

      "

      {...props}

    />

  );

}