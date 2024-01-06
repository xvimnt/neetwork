import React from "react";
import { ExplorerOutsideTitle } from "./ExplorerOutsideTitle";
import { ExplorerOutsideSubtitle } from "./ExplorerOutsideSubtitle";

interface lessonI {
  title: string;
  time: string;
  isCompleted?: boolean;
}

interface PropsI {
  title: string;
  lessons: lessonI[];
}

export const ExplorerOutsideContainer = ({ title, lessons }: PropsI) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="flex flex-col gap-6">
      <ExplorerOutsideTitle
        title={title}
        expanded={expanded}
        handleClick={() => setExpanded((prev) => !prev)}
      />
      <div className={`flex-col gap-4 ${expanded ? "flex" : "hidden"}`}>
        {lessons.map((lesson) => (
          <ExplorerOutsideSubtitle
            key={lesson.title}
            title={lesson.title}
            time={lesson.time}
            isCompleted={lesson.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};
