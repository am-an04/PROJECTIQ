import { Bell } from "lucide-react";

export default function Notification() {
  return (
    <button
      className="
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-800
        bg-[#0B1220]
        transition
        hover:border-cyan-400
      "
    >
      <Bell size={20} />

      <span
        className="
          absolute
          right-3
          top-3
          h-2
          w-2
          rounded-full
          bg-cyan-400
        "
      />
    </button>
  );
}