import React, { type FormEvent } from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";
import { FormLayout } from "../forms/FormLayout";

interface PropsI {
  handleSubmit: (e: FormEvent) => void;
}

export const AddCourseSection = ({ handleSubmit }: PropsI) => {
  return (
    <FormLayout buttonLabel="Agregar" onSubmit={handleSubmit}>
      <FormLabelLayout label="Nombre">
        <FormInput placeholder="Nombre de la seccion" />
      </FormLabelLayout>
    </FormLayout>
  );
};
