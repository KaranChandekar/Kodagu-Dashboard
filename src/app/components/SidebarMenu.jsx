import Build from "../svg/Action/Build";
import Dashboard from "../svg/Action/Dashboard";
import Event from "../svg/Action/Event";
import PlaylistAddCheck from "../svg/Av/PlaylistAddCheck";
import Email from "../svg/Communication/Email";
import Cloud from "../svg/File/Cloud";
import Group from "../svg/Social/Group";
import Menu from "./Menu";

const SidebarMenu = ({ className }) => {
  return (
    <div
      className={`rounded-2xl border border-gray-blue-95 grid grid-cols-2 ${className}`}
    >
      <Menu icon={<Dashboard />} title="Dashboard" className="rounded-tl-2xl" />
      <Menu
        icon={<PlaylistAddCheck />}
        title="Notes"
        className="rounded-tr-2xl"
      />
      <Menu icon={<PlaylistAddCheck />} title="Tasks" />
      <Menu icon={<Cloud />} title="Notes" />
      <Menu icon={<Email />} title="Emails" />
      <Menu icon={<Group />} title="Clients" />
      <Menu icon={<Event />} title="Calendars" className="rounded-bl-2xl" />
      <Menu icon={<Build />} title="Settings" className="rounded-br-2xl" />
    </div>
  );
};
export default SidebarMenu;
