import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        w-[420px]
        rounded-2xl
        border
        border-slate-800
        bg-[#0B1220]
        px-5
        py-3
      "
    >
      <Search
        size={20}
        className="text-slate-500"
      />

      <input
        type="text"
        placeholder="Search projects, technologies..."
        className="
          w-full
          bg-transparent
          outline-none
          text-white
          placeholder:text-slate-500
        "
      />
    </div>
  );
}