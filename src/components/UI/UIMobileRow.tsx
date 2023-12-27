import React, { useState } from "react";
import { DownArrowIcon, UpArrowIcon } from "./Icons";

export const UIMobileRow = ({
  row,
  columns,
}: {
  row: React.ReactNode[];
  columns: React.ReactNode[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <tr className="ui-table__row">
        <td className="ui-button-dropdown ml-4 mr-2 mt-2 w-12">
          <button
            type="button"
            className="ui-button-dropdown__button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-left text-sm">
          {row[0]}
        </td>
      </tr>
      {isOpen &&
        row.map((item, index2) => {
          {
            if (index2 === 0) return null;
          }
          return (
            <tr key={index2} className="ui-table__row">
              <th className="text px-4 py-6 text-left">{columns[index2]}</th>
              <td className="whitespace-nowrap px-4 py-4 text-left text-sm">
                {item}
              </td>
            </tr>
          );
        })}
    </>
  );
};
