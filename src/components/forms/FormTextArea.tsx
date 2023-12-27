import React, { type InputHTMLAttributes } from "react";

export const FormTextArea = ({
  ...other
}: InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="form-textarea">
      <textarea {...other} rows={5} className="form-textarea__textarea" />
    </div>
    // <textarea
    //   {...other}
    //   rows={5}
    //   className="col-span-4 w-full rounded-xl border border-primary-300 p-4 text-base leading-4 text-primary-800 placeholder-tertiary-600 outline-primary-500"
    // />
  );
};
