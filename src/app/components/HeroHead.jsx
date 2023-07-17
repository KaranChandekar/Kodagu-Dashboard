import Search from "../svg/Action/Search";
import PlaylistAddCheck from "../svg/Av/PlaylistAddCheck";
import Dashboard from "../svg/Action/Dashboard";
import Event from "../svg/Action/Event";
import Sort from "../svg/Content/Sort";
import Menu from "../svg/Navigation/Menu";
import TrendingUp from "../svg/Action/TrendingUp";
import HeroNavLink from "./HeroNavLink";

const HeroHead = () => {
  return (
    <div className="px-6 pt-6 flex justify-between gap-16 border-b-2 border-gray-blue-95">
      <nav className="flex justify-between gap-5">
        <HeroNavLink icon={<PlaylistAddCheck />} title="List Tasks" />
        <HeroNavLink
          icon={<Dashboard active="true" />}
          title="Boards"
          active="true"
        />
        <HeroNavLink icon={<Event />} title="Calendar" />
        <HeroNavLink icon={<Sort />} title="Gantt" />
        <HeroNavLink icon={<Menu />} title="Timeline" />
        <HeroNavLink icon={<TrendingUp />} title="Activity" />
      </nav>
      <div className="px-4 py-3 rounded-[30px] w-[200px] bg-white flex items-center gap-32 shadow-sm mb-6">
        <div className="flex items-center gap-2">
          <Search />
          <input
            type="text"
            placeholder="Search Tasks"
            className="text-gray-blue-70 w-full text-xs font-bold border-none outline-none text-inherit"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroHead;
