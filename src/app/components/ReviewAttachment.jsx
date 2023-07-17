import Flag from "../svg/Content/Flag";
import AccessTime from "../svg/Device/AccessTime";
import Attachment from "../svg/File/Attachment";
import Avatar5 from "../images/Avatar/Avatar5.png";
import AvatarImg from "./AvatarImg";
import Close from "../svg/Navigation/Close";

const ReviewAttachment = () => {
  return (
    <div className="mb-3 p-4 bg-white rounded-md shadow">
      <div className="flex items-center justify-between mb-7">
        <div className="flex items-center gap-2">
            <Close />
            <input type="text" placeholder="Task name or Type" className="text-xs text-gray-blue-80 font-bold outline-none border-none text-inherit" />
        </div>
        <AvatarImg image={Avatar5} className="w-[20px] h-[20px]" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Flag />
          <Attachment />
          <AccessTime />
        </div>
        <button className="bg-blue p-2 text-white rounded-md font-bold text-xs">
          Save
        </button>
      </div>
    </div>
  );
};
export default ReviewAttachment;
