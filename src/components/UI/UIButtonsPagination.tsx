import React from "react";
import { UIButton } from "./UIButton";

export const UIButtonsPagination = ({
  page,
  setPage,
  totalPages,
  handleNext,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  handleNext: () => Promise<void>;
}) => {
  return (
    <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
      <div className="text">
        Pagina{" "}
        <span className="text font-bold">
          {page + 1} de {totalPages}
        </span>
      </div>

      <div className="mt-4 items-center gap-x-4 sm:mt-0 sm:flex">
        {page > 0 && (
          <UIButton
            type="button"
            onClick={() => setPage((prev) => prev - 1)}
            label="Anterior"
            className="px-4"
          />
        )}

        {page + 1 < totalPages && (
          <UIButton
            type="button"
            onClick={handleNext}
            label="Siguiente"
            className="px-4"
          />
        )}
      </div>
    </div>
  );
};
