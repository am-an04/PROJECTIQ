import SidebarItem from "./SidebarItem";
import { SIDEBAR_ITEMS } from "./sidebar.data";

export default function SidebarMenu() {
  const sections = [
    {
      title: "MAIN",
      key: "main",
    },
    {
      title: "WORKSPACE",
      key: "workspace",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-5">
      {sections.map((section) => (
        <div key={section.key} className="mb-10">
          <h3
            className="
              mb-4
              px-2
              text-xs
              font-semibold
              tracking-[0.2em]
              text-slate-500
            "
          >
            {section.title}
          </h3>

          <div className="space-y-2">
            {SIDEBAR_ITEMS.filter(
              (item) => item.section === section.key
            ).map((item) => (
              <SidebarItem
                key={item.label}
                item={item}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}