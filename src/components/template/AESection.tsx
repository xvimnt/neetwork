import React from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";

interface PropsI {
  formRef: React.RefObject<HTMLFormElement>;
  defaultTitle?: string;
}

export const AESection = ({ formRef, defaultTitle }: PropsI) => {
  return (
    <form ref={formRef}>
      <FormLabelLayout label="Nombre">
        <FormInput
          placeholder="Nombre de la seccion"
          name="title"
          defaultValue={defaultTitle}
        />
      </FormLabelLayout>
    </form>
  );
};
