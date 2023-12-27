import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const FormDatePicker = (props: {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const { startDate, setStartDate } = props;
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      showYearDropdown={true}
      showMonthDropdown={true}
      dateFormat={"dd/MM/yyyy"}
    />
  );
};
