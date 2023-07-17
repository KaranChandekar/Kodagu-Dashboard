import Image from "next/image";
import MoreHoriz from "../svg/Navigation/MoreHoriz";
import Person from "../svg/Social/Person";
import IconBtn from "./IconBtn";
import UserAvatar from "../images/Avatar/UserAvatar.png";
import Base from "../images/Avatar/Base.svg";
import Line from "../images/Avatar/Line.svg";

const SidebarHead = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-center font-bold`}
    >
      <div className="flex justify-between w-full mb-4">
        <IconBtn className="w-10 h-10" icon={<Person />} />
        <IconBtn className="w-10 h-10" icon={<MoreHoriz />} />
      </div>

      <div className="w-[130px] h-[130px] flex items-center justify-center relative mb-7 cursor-pointer">
        <Image
          className="w-[110px] h-[110px] bg-yellow bg-opacity-10 rounded-full"
          alt="user"
          src={UserAvatar}
        />
        <Image className="absolute top-0 left-0" src={Base} alt="avatar" />
        <Image className="absolute top-0 left-0" src={Line} alt="avatar" />
        <span className="w-8 h-8 bg-blue text-white font-extrabold text-xs rounded-full flex items-center justify-center absolute -right-[15px]">
          2
        </span>
      </div>

      <h3 className="text-gray-blue-60 mb-1">Hello Alfred Bryant</h3>
      <span className="text-gray-blue-80 text-sm">adrain.nader@yahoo.com</span>
    </div>
  );
};
export default SidebarHead;
