import React, { type InputHTMLAttributes, type Dispatch } from "react";

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  active: boolean;
  setActive: Dispatch<React.SetStateAction<boolean>>;
}

export const FormSwitch = ({ active, setActive, ...other }: SwitchProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="form-switch">
      <div className="form-switch__switch">
        <input
          id="form-switch-switch"
          type="checkbox"
          {...other}
          checked={active}
          ref={inputRef}
          onChange={() => setActive(!active)}
        />
        <label onClick={() => setActive(!active)} />
      </div>
    </div>
  );
};
