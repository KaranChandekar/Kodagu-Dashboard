import Hero from "./components/Hero";
import IconBtn from "./components/IconBtn";
import Navbar from "./components/Navbar";
import Navigator from "./components/Navigator";
import Sidebar from "./components/Sidebar";
import AccountCircle from "./svg/Action/AccountCircle";
import Search from "./svg/Action/Search";
import ArrowRight from "./svg/Hardware/ArrowRight";
import Cancel from "./svg/Navigation/Cancel";
import Menu from "./svg/Navigation/Menu";
import Notifications from "./svg/Social/Notifications";

export default function Home() {
  return (
    <>
      <header className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between cursor-default border-b-2 border-gray-blue-95 fixed top-0 left-0 right-0 bg-gray-blue-98 z-10">
        <div className="flex items-center gap-5">
          <IconBtn icon={<Menu />} />
          <h2 className="text-lg font-bold text-gray-blue-50">Constructor</h2>
        </div>

        <Navbar />

        <div className="px-5 py-3 rounded-[30px] bg-white flex items-center gap-32 shadow-sm">
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

      <main className="mt-[96px] max-w-[1600px] mx-auto px-6 flex justify-between">
        <Navigator />
        <Sidebar />
        <Hero />
      </main>
    </>
  );
}
