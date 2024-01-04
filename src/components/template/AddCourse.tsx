import React, { type RefObject } from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";
import { FormTextArea } from "../forms/FormTextArea";
import UIUploader from "../UI/UIUploader";
import { FormLayout } from "../forms/FormLayout";

interface PropsI {
  addCourseFormRef: RefObject<HTMLFormElement>;
  file: File | null;
  setFile: (file: File | null) => void;
}

export const AddCourse = ({ addCourseFormRef, file, setFile }: PropsI) => {
  return (
    <form ref={addCourseFormRef}>
      <FormLabelLayout label="Nombre">
        <FormInput placeholder="Nombre del curso" name="title" />
      </FormLabelLayout>
      <FormLabelLayout label="Habilidades Nuevas">
        <FormInput placeholder="Emprendimiento, Marketing" name="skills" />
      </FormLabelLayout>
      <FormLabelLayout label="Descripcion">
        <FormTextArea placeholder="Descripcion del curso" name="description" />
      </FormLabelLayout>
      <FormLabelLayout label="Imagen">
        <UIUploader file={file} setFile={setFile} hasUploadButton={false} />
      </FormLabelLayout>
    </form>
  );
};
