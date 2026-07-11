import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import SidebarProfile from "./SidebarProfile";

export default function Sidebar() {
  return (
    <aside
      className="
        flex
        h-screen
        w-[260px]
        flex-col
        border-r
        border-slate-800
        bg-[#081226]
      "
    >
      <SidebarLogo />

      <SidebarMenu />

      <SidebarProfile />
    </aside>
  );
}