import React from "react";
import { NextIcon } from "./Icons";

interface IStep {
  title: string;
  icon?: React.ReactNode;
}

export default function UISteps({
  currentStep,
  steps,
}: {
  currentStep: number;
  steps: IStep[];
}) {
  return (
    <ol className="ui-steps ">
      {steps.map((step, index) => {
        return (
          <div key={index + step.title} className="flex flex-row items-center ">
            <li
              className={`ui-steps__tab ${
                currentStep >= index + 1 ? "ui-steps__checked" : ""
              }`}
            >
              <span className={`hidden px-2 sm:flex`}>
                {step.icon ? step.icon : index + 1}
              </span>
              {step.title}
            </li>
            {index + 1 === steps.length ? null : (
              <NextIcon className="ui-steps__tab" />
            )}
          </div>
        );
      })}
    </ol>
  );
}
