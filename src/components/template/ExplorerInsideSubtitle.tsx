import React from "react";
import { ExplorerArrowIcon } from "../UI/Icons";

interface PropsI {
  title: string;
  time: string;
}

export const ExplorerInsideSubtitle = ({ title, time }: PropsI) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h3 className="flex flex-col">
        <p className="text-sm font-bold not-italic leading-[normal] text-[#565555]">
          {title}
        </p>
        <p className="text-[11px] font-bold not-italic leading-[normal] text-[#7A7A7A]">
          {time}
        </p>
      </h3>
      <button>
        <ExplorerArrowIcon className="h-[16px] w-[16px] rotate-[270deg] fill-[#767676] hover:fill-[#c7e21c]" />
      </button>
    </div>
  );
};
