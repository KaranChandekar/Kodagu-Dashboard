import ContentHead from "./ContentHead";
import ContentImgCard from "./ContentImgCard";
import HeroHead from "./HeroHead";
import Content1 from "../images/Avatar/Content1.png";
import Content2 from "../images/Avatar/Content2.png";
import Task from "./Task";
import TaskAttachment from "./TaskAttachment";
import ReviewAttachment from "./ReviewAttachment";
import StickyCard from "./StickyCard";

const Hero = () => {
  return (
    <div className="border-2 border-gray-blue-95 rounded-2xl my-6 pb-8 relative">
      <HeroHead />

      <div className="flex gap-7 mt-10 px-6">
        <div>
          <ContentHead title="to do" color="bg-purple" />
          <ContentImgCard img={Content1} title="make money online through" />
          <Task
            className="mb-3 shadow rounded"
            title="make money online through"
          />
          <Task
            className="mb-3 shadow rounded"
            title="Search Engine Optimization ..."
          />
          <Task
            className="mb-3 shadow rounded"
            title="Characteristics Of A Successful"
          />
          <Task
            className="mb-3 shadow rounded"
            title="Getting Free Publicity"
          />
          <Task
            className="mb-3 shadow rounded"
            title="Importance Of The Custom ..."
          />
          <button className="text-xs text-gray-blue-60 font-bold uppercase p-2">
            + new task
          </button>
        </div>

        <div>
          <ContentHead title="in work" color="bg-teal-blue" />
          <Task
            className="mb-3 shadow rounded"
            title="Types Of Paper In Catalog"
          />
          <ContentImgCard img={Content2} title="Global Resorts Network" />
          <Task className="mb-3 shadow rounded" title="Development Apps" />
          <Task className="mb-3 shadow rounded" title="Copper Canyon">
            <TaskAttachment isAlert="true" />
          </Task>
          <button className="text-xs text-gray-blue-60 font-bold uppercase p-2">
            + new task
          </button>
        </div>

        <div>
          <ContentHead title="review" color="bg-yellow" />
          <Task
            className="mb-3 shadow rounded"
            title="Astronomy Or Astrology"
          />
          <Task
            className="mb-3 shadow rounded"
            title="Astronomy Binoculars A Great"
          />
          <ReviewAttachment />
        </div>

        <div>
          <ContentHead title="done" color="bg-green" />
          <Task className="mb-3 shadow rounded" title="Copper Canyon" />
        </div>

        <StickyCard />
      </div>
    </div>
  );
};
export default Hero;
