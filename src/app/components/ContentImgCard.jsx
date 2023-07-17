import Image from "next/image";
import Task from "./Task";
import TaskAttachment from "./TaskAttachment";

const ContentImgCard = ({ img, title }) => {
  return (
    <div className="rounded-md bg-white shadow">
      <Image className="w-[230px]" alt="content" src={img} />
      <Task title={title} />
      <TaskAttachment />
    </div>
  );
};
export default ContentImgCard;
