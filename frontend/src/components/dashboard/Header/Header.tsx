import SearchBar from "./SearchBar";
import Notification from "./Notification";
import UserMenu from "./UserMenu";



export default function Header() {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-slate-800
        px-10
        py-6
      "
    >
      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>


      </div>

      <div className="flex items-center gap-5">

        <SearchBar />

        <Notification />

       

        <UserMenu />

      </div>

    </header>
  );
}