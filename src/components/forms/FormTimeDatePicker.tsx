import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const FormTimeDatePicker = ({
  startTime,
  setStartTime,
  name,
}: {
  startTime: Date;
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
  name?: string;
}) => {
  return (
    <DatePicker
      selected={startTime}
      onChange={(date: Date) => setStartTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      name={name}
    />
  );
};
