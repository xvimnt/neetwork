import React from "react";

interface PropsI {
  tab: string;
  active?: boolean;
  handleClick: () => void;
}

export const SavedCoursesTab = ({ tab, active, handleClick }: PropsI) => {
  return (
    <div className="flex w-fit flex-col">
      <button
        onClick={handleClick}
        className="cursor-pointer text-[20px] font-bold not-italic leading-[normal] text-[#292929] hover:text-[#788334]"
      >
        {tab}
      </button>
      {active && <div className="h-[4px] w-full bg-[#C7E21C]"></div>}
    </div>
  );
};
