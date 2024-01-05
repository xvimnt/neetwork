import React from "react";
import { ExplorerArrowIcon } from "../UI/Icons";

interface PropsI {
  title: string;
  handleClick: () => void;
  expanded: boolean;
}

export const ExplorerOutsideTitle = ({
  title,
  handleClick,
  expanded,
}: PropsI) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h3 className="max-w-[80%] text-[20px] font-normal not-italic leading-[normal] text-[#383838]">
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
