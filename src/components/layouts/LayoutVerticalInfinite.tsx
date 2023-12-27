import React from "react";
import { UIPagination } from "../UI/UIPagination";

export const LayoutVerticalInfinite = ({
  itemPage,
  page,
  totalPages,
  handlePagination,
  extraButtons,
}: {
  itemPage: React.ReactNode;
  page: number;
  totalPages: number | undefined;
  handlePagination: (updatePage: number) => Promise<void>;
  extraButtons?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-items-center">
      <div className="flex w-full flex-col items-center justify-items-center ">
        <div className="mb-4 flex flex-row gap-2">
          {extraButtons}
          {totalPages ? (
            <UIPagination
              page={page}
              handlePagination={handlePagination}
              totalPages={totalPages}
            />
          ) : null}
        </div>
        {itemPage}
      </div>
    </div>
  );
};
