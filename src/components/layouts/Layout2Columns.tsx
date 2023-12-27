import React from "react";

export const Layout2Columns = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-8 lg:flex-row">
      <div className="left flex flex-col lg:w-1/2">{left}</div>
      <div className="right flex flex-col lg:w-1/2">{right}</div>
    </div>
  );
};
