import React, { useState, type RefObject } from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";
import { FormTextArea } from "../forms/FormTextArea";
import UIUploader from "../UI/UIUploader";
import Image from "next/image";
import { CircleIcon, XIcon } from "../UI/Icons";

interface PropsI {
  AECourseFormRef: RefObject<HTMLFormElement>;
  file: File | null;
  setFile: (file: File | null) => void;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultSkills?: string;
  defaultImage?: string;
}

export const AECourse = ({
  AECourseFormRef,
  file,
  setFile,
  defaultTitle,
  defaultDescription,
  defaultImage,
  defaultSkills,
}: PropsI) => {
  const [changeFile, setChangeFile] = useState(defaultImage ? false : true);
  return (
    <form ref={AECourseFormRef}>
      <FormLabelLayout label="Nombre">
        <FormInput
          placeholder="Nombre del curso"
          name="title"
          defaultValue={defaultTitle}
        />
      </FormLabelLayout>
      <FormLabelLayout label="Habilidades Nuevas">
        <FormInput
          placeholder="Emprendimiento, Marketing"
          name="skills"
          defaultValue={defaultSkills}
        />
      </FormLabelLayout>
      <FormLabelLayout label="Descripcion">
        <FormTextArea
          placeholder="Descripcion del curso"
          name="description"
          defaultValue={defaultDescription}
        />
      </FormLabelLayout>
      <FormLabelLayout label="Imagen">
        {!changeFile && defaultImage && (
          <div className="mt-2 flex flex-row justify-center gap-2">
            <Image src={defaultImage} alt="user" height={250} width={500} />
            {/* delete */}
            <button
              onClick={() => setChangeFile(true)}
              type="button"
              className="relative h-fit w-fit"
            >
              <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#E02929] hover:fill-[#ec5858]" />
              <XIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
            </button>
          </div>
        )}
        {changeFile && (
          <UIUploader file={file} setFile={setFile} hasUploadButton={false} />
        )}
      </FormLabelLayout>
    </form>
  );
};
