import AvatarImg from "./AvatarImg";
import Avatar5 from "../images/Avatar/Avatar5.png";

const Task = ({ title, className, children }) => {
  return (
    <div className={`bg-white rounded-md pt-1 ${className}`}>
      <dir className="flex items-center justify-between w-full px-4">
        <span className="text-xs text-gray-blue-80 font-bold">
          Space Tasks 2
        </span>
        <AvatarImg image={Avatar5} className="w-[20px] h-[20px]" />
      </dir>
      <h2 className="text-xs px-4 pb-4 text-gray-blue-60 font-bold">
        {title}
      </h2>
      {children}
    </div>
  );
};
export default Task;
