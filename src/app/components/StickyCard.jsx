"use client";

import PlayArrow from "../svg/Av/PlayArrow";
import Flag from "../svg/Content/Flag";
import Link from "../svg/Content/Link";
import InsertComment from "../svg/Editor/InsertComment";
import Cloud from "../svg/File/Cloud";
import ChevronRight from "../svg/Navigation/ChevronRight";
import SubdirectoryArrowRight from "../svg/Navigation/SubdirectoryArrowRight";
import AvatarImg from "./AvatarImg";
import Avatar5 from "../images/Avatar/Avatar5.png";
import Close from "../svg/Navigation/Close";
import ColorDot from "../svg/Navigation/ColorDot";

const StickyCard = () => {
  return (
    <div className="absolute bottom-10 right-10">
      <div className="rounded-xl bg-white shadow-sm w-[450px] text-gray-blue-50 font-bold relative">
        <ColorDot
          color="#33BFFF"
          className="absolute top-8 left-3 cursor-pointer"
        />
        <Close className="absolute right-7 top-7 cursor-pointer" />
        <div className="text-sm py-8 px-12 border-b-2 border-gray-blue-95">
          <div className="flex items-center gap-4 mb-5">
            <h3>Development Apps</h3>
            <Link />
          </div>

          <div className="grid grid-cols-2 text-xs gap-5 mb-5">
            <div className="flex gap-4 items-center">
              <SubdirectoryArrowRight />
              <span>4 Subtasks</span>
            </div>
            <div className="flex gap-4 items-center">
              <Flag />
              <span>Priority Enabled</span>
            </div>
            <div className="flex gap-4 items-center">
              <Cloud />
              <span>3 Files</span>
            </div>
            <div className="flex gap-4 items-center">
              <InsertComment />
              <span>7 Comments</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <AvatarImg image={Avatar5} className="w-[30px] h-[30px]" />
            <span>Tyler Norman</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs py-8 px-12">
          <div className="flex items-center gap-2">
            <div>
              <h3 className="text-gray-blue-70 mb-1">START DATE</h3>
              <span>Sep 3, 9:00 pm</span>
            </div>
            <ChevronRight />
            <div>
              <h3 className="text-gray-blue-70 mb-1">START DATE</h3>
              <span>Sep 3, 9:00 pm</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-green rounded-full w-8 h-8 flex items-center justify-center">
              <PlayArrow />
            </button>
            <span>0:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickyCard;
