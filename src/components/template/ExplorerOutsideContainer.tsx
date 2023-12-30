import React from "react";
import { ExplorerOutsideTitle } from "./ExplorerOutsideTitle";
import { ExplorerOutsideSubtitle } from "./ExplorerOutsideSubtitle";

interface VideoI {
  title: string;
  time: string;
}

interface PropsI {
  title: string;
  videos: VideoI[];
}

export const ExplorerOutsideContainer = ({ title, videos }: PropsI) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="flex flex-col gap-6">
      <ExplorerOutsideTitle
        title={title}
        expanded={expanded}
        handleClick={() => setExpanded((prev) => !prev)}
      />
      <div className={`flex-col gap-4 ${expanded ? "flex" : "hidden"}`}>
        {videos.map((video) => (
          <ExplorerOutsideSubtitle
            key={video.title}
            title={video.title}
            time={video.time}
          />
        ))}
      </div>
    </div>
  );
};
