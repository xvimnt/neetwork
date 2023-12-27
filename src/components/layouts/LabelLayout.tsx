import React, { type InputHTMLAttributes } from "react";

interface LabelProps extends InputHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  label: string;
}

export const FormLabelLayout = ({ label, children, ...other }: LabelProps) => {
  return (
    <div className="flex flex-col">
      <label
        {...other}
        className="dark:text-tertiary-50 my-4 text-sm leading-4 text-tertiary-800"
      >
        {label}
      </label>
      <div className="my-2">{children}</div>
    </div>
  );
};
