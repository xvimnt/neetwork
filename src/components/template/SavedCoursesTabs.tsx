import React from "react";
import { SavedCoursesTab } from "./SavedCoursesTab";

interface TabI {
  name: string;
  active: boolean;
  handleClick: () => void;
}

interface PropsI {
  tabs: TabI[];
}

export const SavedCoursesTabs = ({ tabs }: PropsI) => {
  return (
    <div>
      <div className="flex flex-row gap-16">
        {tabs.map((tab, index) => (
          <SavedCoursesTab
            key={index}
            tab={tab.name}
            handleClick={tab.handleClick}
            active={tab.active}
          />
        ))}
      </div>
      <div className="fixed  left-0 right-0 h-[1px] bg-gray-400"></div>
    </div>
  );
};
