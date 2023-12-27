import React, { type ButtonHTMLAttributes } from "react";

interface UIButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  isPrimary?: boolean;
}

export const UIButton = ({
  label,
  isPrimary,
  className,
  ...others
}: UIButtonI) => {
  return (
    <button
      className={`ui-btn ui-btn__${
        isPrimary ? "primary" : "secondary"
      } ${className}`}
      {...others}
    >
      <p>{label}</p>
    </button>
  );
};
