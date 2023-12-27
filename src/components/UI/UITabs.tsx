import React from "react";

export interface IFilter {
  label: string;
  value: string;
}

export const UITabs = ({
  filters,
  filter,
  setFilter,
}: {
  filters: IFilter[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="ui-tabs my-4 !grid !grid-cols-2 sm:!flex">
      {filters?.map((item, index) => (
        <button
          type="button"
          onClick={() => setFilter(item.value)}
          key={index}
          className={`${
            item.value === filter ? "ui-tabs__checked" : ""
          }  ui-tabs__tab`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
