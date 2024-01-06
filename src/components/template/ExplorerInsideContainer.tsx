import React from "react";
import { ExplorerOutsideTitle } from "./ExplorerOutsideTitle";
import { ExplorerOutsideSubtitle } from "./ExplorerOutsideSubtitle";

interface LessonI {
  title: string;
  time: string;
  id: string;
  isCompleted?: boolean;
}

interface PropsI {
  title: string;
  lessons: LessonI[];
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
            isCompleted={lesson.isCompleted}
            onClick={() => handleClickLesson(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};
