import React from "react";
import { ExplorerArrowIcon } from "../UI/Icons";

interface PropsI {
  title: string;
  time: string;
}

export const ExplorerOutsideSubtitle = ({ title, time }: PropsI) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h3 className="flex flex-col">
        <p className="text-[13px] font-medium not-italic leading-[normal] text-[color:var(--primary-gray,#525252)]">
          {title}
        </p>
        <p className="leading-[normal]; text-[13px] font-normal not-italic text-[#767676]">
          {time}
        </p>
      </h3>
      <button>
        <ExplorerArrowIcon className="h-[16px] w-[16px] rotate-[270deg] fill-[#767676] hover:fill-[#c7e21c]" />
      </button>
    </div>
  );
};
