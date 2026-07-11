import { CircleUserRound, Settings2, LogOut } from "lucide-react";

export default function SidebarProfile() {
  return (
    <div className="border-t border-slate-800 p-5">

      <div
        className="
          rounded-2xl
          bg-slate-900/60
          border
          border-slate-800
          p-4
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-cyan-500/15
            "
          >
            <CircleUserRound
              size={26}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h4 className="font-semibold">
              Aman
            </h4>

            <p className="text-sm text-slate-400">
              Student Developer
            </p>
          </div>

        </div>

        <div className="mt-5 space-y-2">

          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-slate-300
              transition
              hover:bg-slate-800
            "
          >
            <Settings2 size={18} />

            Settings
          </button>

          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-red-400
              transition
              hover:bg-red-500/10
            "
          >
            <LogOut size={18} />

            Logout
          </button>

        </div>

      </div>

    </div>
  );
}