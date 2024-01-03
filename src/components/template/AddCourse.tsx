import React, { type FormEvent } from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";
import { FormTextArea } from "../forms/FormTextArea";
import UIUploader from "../UI/UIUploader";
import { FormLayout } from "../forms/FormLayout";

export const AddCourse = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormLayout buttonLabel="Agregar" onSubmit={handleSubmit}>
      <FormLabelLayout label="Nombre">
        <FormInput placeholder="Nombre del curso" />
      </FormLabelLayout>
      <FormLabelLayout label="Habilidades Nuevas">
        <FormInput placeholder="Emprendimiento, Marketing" />
      </FormLabelLayout>
      <FormLabelLayout label="Descripcion">
        <FormTextArea placeholder="Descripcion del curso" />
      </FormLabelLayout>
      <FormLabelLayout label="Imagen">
        <UIUploader file={file} setFile={setFile} hasUploadButton={false} />
      </FormLabelLayout>
    </FormLayout>
  );
};
