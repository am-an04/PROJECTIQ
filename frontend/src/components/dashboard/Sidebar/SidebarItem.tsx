import { NavLink } from "react-router-dom";
import clsx from "clsx";

import type { SidebarItem as Item } from "./sidebar.data";

interface Props {
  item: Item;
}

export default function SidebarItem({
  item,
}: Props) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(
          "group relative flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300",
          isActive
            ? "bg-cyan-500/15 text-cyan-300"
            : "text-slate-400 hover:bg-slate-800/80 hover:text-white"
        )
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span
              className="
                absolute
                left-0
                top-2
                h-8
                w-1
                rounded-r-full
                bg-cyan-400
              "
            />
          )}

          <Icon
            size={20}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <span className="font-medium">
            {item.label}
          </span>
        </>
      )}
    </NavLink>
  );
}