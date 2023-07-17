import IconBtn from "./components/IconBtn";
import Navbar from "./components/Navbar";
import AccountCircle from "./svg/Action/AccountCircle";
import Search from "./svg/Action/Search";
import ArrowRight from "./svg/Hardware/ArrowRight";
import Cancel from "./svg/Navigation/Cancel";
import Menu from "./svg/Navigation/Menu";
import Notifications from "./svg/Social/Notifications";

export default function Home() {
  return (
    <>
      <header className="max-w-[1600px] mx-auto p-6 flex items-center justify-between cursor-default">
        <div className="flex items-center gap-5">
          <IconBtn icon={<Menu />} />
          <h2 className="text-lg font-bold text-gray-blue-50">Constructor</h2>
        </div>

        <Navbar />

        <div className="px-5 py-3 rounded-[30px] bg-white flex items-center gap-32 shadow">
          <div className="flex items-center gap-2">
            <Search />
            <input
              type="text"
              placeholder="Search Products, Orders and Clients"
              className="text-gray-blue-80 text-xs font-bold w-[220px] border-none outline-none text-inherit"
            />
          </div>
          <ArrowRight className="cursor-pointer" />
        </div>

        <div className="flex items-center">
          <AccountCircle />
          <span className="text-sm text-gray-blue-60 font-bold ml-2 mr-8">
            Clayton Santos
          </span>
          <IconBtn className="mr-2" icon={<Notifications />} />
          <IconBtn icon={<Cancel />} />
        </div>
      </header>

      <main></main>
    </>
  );
}
