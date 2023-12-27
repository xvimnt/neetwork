import React from "react";

interface IElement {
  label: React.ReactNode;
  onClick: () => void;
}

export interface IUIDropdown {
  elements: IElement[];
  text: React.ReactNode;
}

export const UIDropdown = ({ elements, text }: IUIDropdown) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        className="ui-dropdown__button"
      >
        {text}
      </button>
      <div
        id="dropdown"
        className={`${
          !open ? "hidden" : ""
        } ui-dropdown__dropdown z-10 divide-y`}
      >
        <ul aria-labelledby="dropdownDefaultButton">
          {elements.map((element, index) => (
            <li key={index} className="ui-dropdown__dropdown__element">
              <a href="#" onClick={element.onClick}>
                {element.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
