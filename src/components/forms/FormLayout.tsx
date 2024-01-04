import React, { type ClassAttributes } from "react";
import { UIButton } from "../UI/UIButton";

interface FormLayoutProps extends ClassAttributes<HTMLFormElement> {
  children: React.ReactNode;
  title?: string;
  buttonLabel?: string;
}

export const FormLayout = ({
  children,
  title,
  buttonLabel,
  ...other
}: FormLayoutProps) => {
  return (
    <form className="form" {...other}>
      {title && (
        <div className="mb-4 flex flex-col items-center justify-items-center">
          <h1 className="text !text-3xl font-bold">{title}</h1>
        </div>
      )}
      {children}
      {buttonLabel && (
        <UIButton label={buttonLabel} type="submit" className="mt-5" />
      )}
    </form>
  );
};
