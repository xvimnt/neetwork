import React, { type InputHTMLAttributes } from "react";
import { PencilIcon } from "../UI/Icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  currency?: boolean;
  icon?: React.ReactNode;
}

export const FormInput = ({ currency, icon, ...other }: InputProps) => {
  return (
    <div className="form-input">
      <input
        {...other}
        className="form-input__input"
        min={currency ? "1" : undefined}
        step={currency ? "any" : undefined}
        type={currency ? "number" : "text"}
      />
      <div className="form-input__icon">
        {icon ? icon : <PencilIcon className="h-7 w-7" />}
      </div>
    </div>
  );
};
