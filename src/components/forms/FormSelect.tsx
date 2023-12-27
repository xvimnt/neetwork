import React, { type InputHTMLAttributes } from "react";
import { SelectArrowIcon } from "../UI/Icons";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export const FormSelect = ({ options, ...others }: SelectProps) => {
  return (
    <div className="form-select">
      <select {...others} className="form-select__select">
        {options.length === 0 && (
          <option value="" disabled>
            No hay opciones disponibles
          </option>
        )}
        <option value="">Seleccione una opción</option>
        {options.map((option: Option, index: number) => (
          <option key={`option${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="form-select__icon">
        <SelectArrowIcon className="h-8 w-8" />
      </div>
    </div>
  );
};
