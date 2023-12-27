import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const FormMonthDatePicker = ({
  startDate,
  setStartDate,
}: {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      showMonthYearPicker
      dateFormat="MMMM yyyy"
    />
  );
};
