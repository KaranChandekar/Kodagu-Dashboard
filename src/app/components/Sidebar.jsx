import SidebarBase from "./SidebarBase";
import SidebarHead from "./SidebarHead";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="w-64 py-6 hidden md:flex flex-col justify-between gap-10">
      <div>
        <SidebarHead className="mb-10" />
        <SidebarMenu />
      </div>
      <SidebarBase />
    </div>
  );
};
export default Sidebar;
