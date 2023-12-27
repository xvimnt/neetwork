import React from "react";
import { UIButtonsPagination } from "./UIButtonsPagination";
import { UISearch } from "./UISearch";
import { type IFilter, UIFiltersButtons } from "./UIFiltersButtons";
import { UITable } from "./UITable";

export interface IUIDataLayout {
  title: string;
  description?: string;
  rows: React.ReactNode[][];
  columns: React.ReactNode[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  totalElements: number;
  handleNext: () => Promise<void>;
  filters?: IFilter[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const UIDataLayout = ({
  title,
  description,
  rows,
  columns,
  page,
  setPage,
  totalPages,
  totalElements,
  filters,
  filter,
  setFilter,
  search,
  setSearch,
  handleNext,
}: IUIDataLayout) => {
  return (
    <section className="container mx-auto w-full">
      <div className="w-full  sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-2xl font-bold text-primary-800/80 dark:text-white">
              {title}
            </h2>

            <span className="rounded-full bg-secondary-100 px-3 py-1 text-xs text-secondary-600 dark:bg-primary-800 dark:text-secondary-400">
              {totalElements} registros
            </span>
          </div>

          <p className="mt-1 text-sm text-primary-500 dark:text-primary-300">
            {description}
          </p>
        </div>

        {/* <div className="mt-4 flex items-center gap-x-3">
          <button className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-primary-700 transition-colors duration-200 hover:bg-primary-100 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-200 dark:hover:bg-primary-800 sm:w-auto">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3098_154395)">
                <path
                  d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3098_154395">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>Descargar</span>
          </button>
        </div> */}
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
        {filters && (
          <UIFiltersButtons
            filters={filters}
            filter={filter}
            setFilter={setFilter}
          />
        )}
        <UISearch search={search} setSearch={setSearch} />
      </div>

      <UITable rows={rows} columns={columns} />

      <UIButtonsPagination
        page={page}
        setPage={setPage}
        handleNext={handleNext}
        totalPages={totalPages}
      />
    </section>
  );
};
