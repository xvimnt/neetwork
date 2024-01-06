import React from "react";
import { ExplorerOutsideTitle } from "./ExplorerOutsideTitle";
import { ExplorerOutsideSubtitle } from "./ExplorerOutsideSubtitle";

interface VideoI {
  title: string;
  time: string;
  id: string;
}

interface PropsI {
  title: string;
  lessons: VideoI[];
  handleClickLesson: (id: string) => void;
}

export const ExplorerInsideContainer = ({
  title,
  lessons,
  handleClickLesson,
}: PropsI) => {
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
            onClick={() => handleClickLesson(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};
