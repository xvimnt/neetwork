import React from "react";

export const UICardProp = ({
  title,
  values,
  icon,
}: {
  title: string;
  values: (string | null | undefined)[];
  icon?: React.JSX.Element;
}) => {
  return (
    <div
      key={title}
      className="ui-card-prop flex w-full items-center space-x-4 rounded-full p-3.5 "
    >
      {icon && <span className="ui-card-prop__button">{icon}</span>}
      <div className="flex flex-1 flex-col">
        <h3 className="text !text-sm font-medium">{title}</h3>
        <div className="mt-auto divide-x divide-tertiary-700 ">
          {values.map((value, index) => (
            <span
              key={index}
              className="inline-block px-3 !text-xs font-normal leading-none text-accent-700 first:pl-0 "
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
