import { ChevronDown } from "lucide-react";

export default function UserMenu() {
  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-slate-800
        bg-[#0B1220]
        px-4
        py-2
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-cyan-500/20
          font-semibold
          text-cyan-400
        "
      >
        A
      </div>

      <div className="text-left">

        <p className="font-semibold">
          Aman
        </p>

        <p className="text-xs text-slate-400">
          Developer
        </p>

      </div>

      <ChevronDown size={18} />

    </button>
  );
}