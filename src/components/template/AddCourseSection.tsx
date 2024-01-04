import React from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";

interface PropsI {
  formRef: React.RefObject<HTMLFormElement>;
}

export const AddCourseSection = ({ formRef }: PropsI) => {
  return (
    <form ref={formRef}>
      <FormLabelLayout label="Nombre">
        <FormInput placeholder="Nombre de la seccion" name="title" />
      </FormLabelLayout>
    </form>
  );
};
