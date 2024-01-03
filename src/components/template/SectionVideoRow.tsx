import React from "react";
import { CircleIcon, EditIcon, XIcon } from "../UI/Icons";

interface PropsI {
  title: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

export const SectionVideoRow = ({
  title,
  handleEdit,
  handleDelete,
}: PropsI) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="inline-flex items-center justify-center gap-[19px] rounded-[50px] bg-[#c7e21c] px-[35px] py-2.5">
        <span className="font-light not-italic leading-[normal] text-black">
          {title}
        </span>
      </div>
      {/* edit */}
      <button onClick={handleEdit} className="relative">
        <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#41869F] hover:fill-[#51aed0] " />
        <EditIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
      </button>
      {/* delete */}
      <button onClick={handleDelete} className="relative">
        <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#E02929] hover:fill-[#ec5858]" />
        <XIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
      </button>
    </div>
  );
};
