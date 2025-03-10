import { FC } from "react";
import { WORKS } from "@/constants/WorksList";
import Image from "next/image";

interface WorkCardProps {
  work: WORKS;
}

const WorkCard: FC<WorkCardProps> = ({ work }) => {
  return (
    <div className="flex justify-between items-center w-full border-b pb-10 border-[#C7D0D9] first:pt-0 pt-10">
      <div>
        <div className="text-[60px] font-normal pb-2">{work.title}</div>
        <div className="text-[18px] font-normal">
          {work.description.map((desc: string, index: number) => (
            <span key={index}>
              {desc} {index !== work.description.length - 1 && " - "}
            </span>
          ))}
        </div>
      </div>
      <div className="border border-[#3C3D3E] rounded-full p-10 hover:bg-[#0B0C0E] group transition-all duration-300 cursor-pointer">
        <Image
          width={100}
          height={100}
          className="w-6 h-6 transition-all duration-300 group-hover:invert"
          src="/ic-arrow-upright.svg"
          alt="arrow up right icon"
        />
      </div>
    </div>
  );
};

export default WorkCard;
