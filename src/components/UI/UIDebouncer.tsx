import React from "react";
import { SearchIcon } from "./Icons";
import { FormInput } from "../forms/FormInput";

export const UIDebouncer = ({
  value,
  setValue,
  debounceTime = 800,
  icon = <SearchIcon />,
  placeholder = "Buscar",
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  debounceTime?: number;
  icon?: React.ReactNode;
  placeholder?: string;
}) => {
  // Input variable will be used to store the value of the input
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  // The following code is debounced to avoid making a request on every keystroke
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(inputValue);
    }, debounceTime);
    return () => clearTimeout(timeoutId);
  }, [debounceTime, inputValue, setValue]);

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <FormInput
      name="value"
      placeholder={placeholder}
      type="text"
      icon={icon}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};
