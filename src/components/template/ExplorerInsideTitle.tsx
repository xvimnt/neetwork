import React from "react";
import { ExplorerArrowIcon } from "../UI/Icons";

interface PropsI {
  title: string;
  handleClick: () => void;
  expanded: boolean;
}

export const ExplorerInsideTitle = ({
  title,
  handleClick,
  expanded,
}: PropsI) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h3 className="text-[17px] font-bold not-italic leading-[normal] text-[#383838]">
        {title}
      </h3>
      <button onClick={handleClick}>
        <ExplorerArrowIcon
          className={`fill-[#383838] hover:fill-[#c7e21c] ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};
