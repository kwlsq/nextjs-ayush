import { workList } from "@/constants/WorksList";
import WorkCard from "./WorkCard";

const WorkSection = () => {
  return (
    <div className="flex justify-between px-[8.5em] pb-[2em]">
      <h3 className="text-[40px] font-medium w-[30%]">Recent Work</h3>
      <div className="w-full ml-45">
        {workList.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
