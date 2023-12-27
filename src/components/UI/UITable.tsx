import React from "react";
import { UIMobileRow } from "./UIMobileRow";

export interface IUITable {
  rows: React.ReactNode[][];
  columns: React.ReactNode[];
}

export const UITable = ({ rows, columns }: IUITable) => {
  return (
    <>
      <div className="ui-table hidden overflow-hidden rounded-xl xl:flex">
        <table className="w-full divide-y divide-gray-200 dark:divide-primary-700">
          <thead className="">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="text px-4 py-6 text-left "
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, index1) => {
              return (
                <tr key={index1} className="ui-table__row">
                  {row.map((item, index2) => {
                    return (
                      <td
                        key={index2}
                        className="whitespace-nowrap px-4 py-4 text-sm "
                      >
                        {item}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="ui-table flex overflow-hidden rounded-xl xl:hidden">
        <table className="w-full divide-y divide-gray-200 dark:divide-primary-700">
          <thead className="">
            <tr>
              <th className="text px-4 py-6 text-left"></th>
              <th className="text px-4 py-6 text-left">{columns[0]}</th>
              {/* <th className="text hidden px-4 py-6 text-left md:flex">
                {columns[1]}
              </th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, index1) => {
              return <UIMobileRow key={index1} row={row} columns={columns} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
