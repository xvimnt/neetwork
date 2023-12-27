import React from "react";
import { DownArrowIcon } from "./Icons";

interface IElement {
  label: React.ReactNode;
  onClick: () => void;
}

export interface IUIDropdown {
  elements: IElement[];
  icon?: React.ReactNode;
}

export const UIButtonDropdown = ({ elements, icon }: IUIDropdown) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="ui-button-dropdown">
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        className="ui-button-dropdown__button"
      >
        {icon ? icon : <DownArrowIcon />}
      </button>
      <div
        id="dropdown"
        className={`${
          !open ? "hidden" : ""
        } ui-button-dropdown__dropdown z-10 mt-16 divide-y`}
      >
        <ul aria-labelledby="dropdownDefaultButton">
          {elements.map((element, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={element.onClick}
                className="ui-button-dropdown__dropdown__element"
              >
                {element.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
