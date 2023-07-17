import Add from "../svg/Content/Add";
import MoreHoriz from "../svg/Navigation/MoreHoriz";
import IconBtn from "./IconBtn";

const ContentHead = ({ title, color }) => {
  return (
    <div className="w-[230px] h-14 flex justify-between items-center pr-3 bg-white shadow-sm rounded-md mb-7">
      <div className="flex items-center">
        <div className={`h-7 w-1 rounded mr-5 ${color}`} />
        <h3 className="uppercase text-xs font-extrabold text-gray-blue-50 mr-4">
          {title}
        </h3>
        <IconBtn
          icon={5}
          className="!w-[25px] !h-[25px] mr-6 text-xs font-extrabold text-gray-blue-60"
        />
      </div>
      <div className="flex items-center gap-2">
        <MoreHoriz />
        <Add />
      </div>
    </div>
  );
};
export default ContentHead;
