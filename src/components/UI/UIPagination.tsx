import React from "react";

export const UIPagination = ({
  page,
  totalPages,
  handlePagination,
}: {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => Promise<void>;
}) => {
  if (totalPages <= 1) return <></>;
  return (
    <>
      <ul className="ui-pagination flex h-8 items-center -space-x-px ">
        {page !== 1 && (
          <li>
            <button
              onClick={() => void handlePagination(page - 1)}
              type="button"
              className="ui-pagination__tab"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
        )}

        {totalPages !== 1 && (
          <li>
            <button
              onClick={() => void handlePagination(1)}
              type="button"
              disabled
              className={`ui-pagination__tab ${
                page === 1 ? "ui-pagination__checked" : ""
              }`}
            >
              {1}
            </button>
          </li>
        )}

        {page > 3 && <div className="ui-pagination__tab">...</div>}

        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => void handlePagination(page - 2)}
            disabled
            type="button"
            className="ui-pagination__tab"
          >
            {page - 2}
          </button>
        )}

        {page > 2 && (
          <li>
            <button
              onClick={() => void handlePagination(page - 1)}
              disabled
              type="button"
              className="ui-pagination__tab"
            >
              {page - 1}
            </button>
          </li>
        )}

        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => void handlePagination(page)}
            disabled
            type="button"
            className=" ui-pagination__tab ui-pagination__checked"
          >
            {page}
          </button>
        )}

        {page < totalPages - 1 && (
          <button
            onClick={() => void handlePagination(page + 1)}
            disabled
            type="button"
            className="ui-pagination__tab"
          >
            {page + 1}
          </button>
        )}

        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => void handlePagination(page + 2)}
            disabled
            type="button"
            className="ui-pagination__tab"
          >
            {page + 2}
          </button>
        )}

        {page < totalPages - 2 && <div className="ui-pagination__tab">...</div>}

        <button
          onClick={() => void handlePagination(totalPages)}
          disabled
          type="button"
          className={`ui-pagination__tab ${
            page === totalPages ? "ui-pagination__checked" : ""
          }`}
        >
          {totalPages}
        </button>

        {page !== totalPages && (
          <button
            onClick={() => void handlePagination(page + 1)}
            type="button"
            className="ui-pagination__tab"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        )}
      </ul>
    </>
  );
};
