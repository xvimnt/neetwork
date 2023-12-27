import React, { type InputHTMLAttributes } from "react";
import { UIButton } from "../UI/UIButton";

interface FormLayoutProps extends InputHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  title?: string;
  buttonLabel?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

export const FormLayout = ({
  children,
  title,
  buttonLabel = "Guardar",
  onSubmit,
  ...other
}: FormLayoutProps) => {
  return (
    <form className="form" onSubmit={onSubmit} {...other}>
      {title && (
        <div className="mb-4 flex flex-col items-center justify-items-center">
          <h1 className="text !text-3xl font-bold">{title}</h1>
        </div>
      )}
      {children}
      {buttonLabel && onSubmit && (
        <UIButton label={buttonLabel} type="submit" className="mt-5" />
      )}
    </form>
  );
};
