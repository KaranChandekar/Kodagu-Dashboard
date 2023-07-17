import Explore from "../svg/Action/Explore";
import TrendingUp from "../svg/Action/TrendingUp";
import IcMessenger from "../svg/Social/IcMessenger";
import LocationCity from "../svg/Social/LocationCity";
import Publicon from "../svg/Social/Publicon";
import Star from "../svg/Toggle/Star";
import IconBtn from "./IconBtn";
import Avatar1 from "../images/Avatar/Avatar1.png";
import Avatar2 from "../images/Avatar/Avatar2.png";
import Avatar3 from "../images/Avatar/Avatar3.png";
import Avatar4 from "../images/Avatar/Avatar4.png";
import AddCircle from "../svg/Content/AddCircle";
import AvatarImg from "./AvatarImg";

const Navigator = () => {
  return (
    <div className="hidden md:flex flex-col justify-between  min-h-[calc(100vh_-_96px)] relative border-r-2 border-b-gray-blue-95 pr-4 py-6">
      <div className="flex flex-col gap-3">
        <IconBtn icon={<Explore />} />
        <IconBtn icon={<Star />} />
        <IconBtn icon={<IcMessenger />} />
        <IconBtn icon={<TrendingUp />} />
        <IconBtn icon={<Publicon />} />
        <IconBtn icon={<LocationCity />} />
      </div>
      <div className="flex flex-col gap-3">
        <AvatarImg image={Avatar1} color="bg-orange-30" />
        <AvatarImg image={Avatar2} color="bg-pink-40" />
        <AvatarImg image={Avatar3} color="bg-purple-30" />
        <AvatarImg image={Avatar4} color="bg-yellow" />
        <IconBtn icon={<AddCircle />} />
      </div>
    </div>
  );
};
export default Navigator;
