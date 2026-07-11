import { Boxes } from "lucide-react";

export default function SidebarLogo() {
  return (
    <div className="px-6 pt-8 pb-8">
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            shadow-lg
            shadow-cyan-500/20
          "
        >
          <Boxes
            size={30}
            className="text-white"
          />
        </div>

        <div>

          <h1 className="text-3xl font-bold tracking-tight">

            <span className="text-white">
              Project
            </span>

            <span className="text-cyan-400">
              IQ
            </span>

          </h1>

          <p
            className="
              mt-1
              text-sm
              text-slate-400
            "
          >
            AI Software Intelligence
          </p>

        </div>

      </div>
    </div>
  );
}