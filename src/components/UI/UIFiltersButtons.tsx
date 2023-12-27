import React from "react";

export interface IFilter {
  label: string;
  value: string;
}

export const UIFiltersButtons = ({
  filters,
  filter,
  setFilter,
}: {
  filters: IFilter[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="inline-flex divide-x overflow-hidden rounded-lg border bg-white rtl:flex-row-reverse dark:divide-primary-700 dark:border-primary-700 dark:bg-primary-900">
      {filters?.map((item, index) => (
        <button
          type="button"
          onClick={() => setFilter(item.value)}
          key={index}
          className={`${
            item.value === filter
              ? "bg-gradient text-white "
              : "text-primary-500"
          }  px-5 py-2 text-xs font-medium transition-colors duration-200 hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800 sm:text-sm`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
