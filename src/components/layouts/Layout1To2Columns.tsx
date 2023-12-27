import React from "react";

export const Layout1To2Columns = ({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-8 lg:flex-row">
      <div className="left flex flex-col lg:w-1/3">{left}</div>
      <div className="right flex flex-col lg:w-2/3">{right}</div>
    </div>
  );
};
