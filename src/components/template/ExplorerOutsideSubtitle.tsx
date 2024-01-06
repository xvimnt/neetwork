import React from "react";
import { ExplorerArrowIcon } from "../UI/Icons";

interface PropsI {
  title: string;
  time: string;
  onClick: () => void;
}

export const ExplorerOutsideSubtitle = ({ title, time, onClick }: PropsI) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h3 className="flex flex-col">
        <p className="text-[15px] font-light not-italic leading-[normal] text-[#525252]">
          {title}
        </p>
        <p className="text-[13px] font-extralight not-italic leading-[normal] text-[#767676]">
          {time}
        </p>
      </h3>
      <button onClick={onClick}>
        <ExplorerArrowIcon className="h-[16px] w-[16px] rotate-[270deg] fill-[#767676] hover:fill-[#c7e21c]" />
      </button>
    </div>
  );
};
