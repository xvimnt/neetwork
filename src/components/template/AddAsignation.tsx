import React, { useState, type RefObject } from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";

interface PropsI {
  formRef: RefObject<HTMLFormElement>;
  defaultTitle?: string;
}

export const AddAssignation = ({ formRef, defaultTitle }: PropsI) => {
  return (
    <form ref={formRef}>
      <FormLabelLayout label="Nombre">
        <FormInput
          placeholder="Nombre del curso"
          name="title"
          defaultValue={defaultTitle}
        />
      </FormLabelLayout>
    </form>
  );
};
