import React, { useState, type RefObject } from "react";
import { FormLabelLayout } from "../forms/FormLabelLayout";
import { FormInput } from "../forms/FormInput";
import UIUploader from "../UI/UIUploader";
import { CircleIcon, XIcon } from "../UI/Icons";

interface PropsI {
  formRef: RefObject<HTMLFormElement>;
  file: File | null;
  setFile: (file: File | null) => void;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultSkills?: string;
  defaultVideo?: string;
}

export const AELesson = ({
  formRef,
  file,
  setFile,
  defaultTitle,
  defaultVideo,
}: PropsI) => {
  const [changeFile, setChangeFile] = useState(defaultVideo ? false : true);
  return (
    <form ref={formRef}>
      <FormLabelLayout label="Nombre">
        <FormInput
          placeholder="Nombre de la leccion"
          name="title"
          defaultValue={defaultTitle}
        />
      </FormLabelLayout>
      <FormLabelLayout label="Video">
        {!changeFile && defaultVideo && (
          <div className="mt-2 flex flex-row justify-center gap-2">
            <video autoPlay loop controls className="h-[250px] w-[500px]">
              <source src={defaultVideo} />
            </video>
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
          <UIUploader
            file={file}
            setFile={setFile}
            hasUploadButton={false}
            accept="video/*"
          />
        )}
      </FormLabelLayout>
    </form>
  );
};
