import React, { type SetStateAction, type Dispatch } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const FormRangeDatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  endDate: Date;
  setEndDate: Dispatch<SetStateAction<Date>>;
}) => {
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => date && setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        showYearDropdown={true}
        showMonthDropdown={true}
        dateFormat={"dd/MM/yyyy"}
      />
      <div className="mx-1"></div>
      <DatePicker
        selected={endDate}
        onChange={(date) => date && setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        showYearDropdown={true}
        showMonthDropdown={true}
        dateFormat={"dd/MM/yyyy"}
      />
    </>
  );
};
