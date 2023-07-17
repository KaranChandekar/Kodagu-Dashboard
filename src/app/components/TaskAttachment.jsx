import List from "../svg/Action/List";
import AccessAlarms from "../svg/Device/AccessAlarms";
import Attachment from "../svg/File/Attachment";

const TaskAttachment = ({ isAlert }) => {
  return (
    <div className="flex justify-between mb-3 px-4 pb-4">
      <div className="flex items-center gap-1 text-gray-blue-60 text-xs font-bold">
        <List />
        <span>4</span>
      </div>
      <div className="flex items-center gap-1 text-gray-blue-60 text-xs font-bold">
        <Attachment />
        <span>2</span>
      </div>
      <div className="flex items-center gap-1 text-gray-blue-60 text-xs font-bold">
        <AccessAlarms isAlert={isAlert} />
        <span className={isAlert ? "text-red" : ""}>6 Days Left</span>
      </div>
    </div>
  );
};
export default TaskAttachment;
