import React from "react";
import { CircleIcon, EditIcon, PlusIcon, XIcon } from "../UI/Icons";
import { SectionVideoRow } from "./SectionVideoRow";

interface ItemI {
  title: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

interface PropsI {
  title: string;
  handleEdit: () => void;
  handleDelete: () => void;
  handleAdd: () => void;
  items: ItemI[];
}

export const SectionCard = ({
  title,
  handleEdit,
  handleDelete,
  handleAdd,
  items,
}: PropsI) => {
  return (
    <div className="h-fit w-full shrink-0 rounded-[40px] border border-solid border-[#D1D3D4] p-6">
      <div className="flex flex-col">
        {/* header */}
        <div className="flex flex-row justify-between">
          <h2 className="ml-2 h-[36.6px] w-[233.312px] shrink-0 text-[20px] font-semibold not-italic leading-[normal] text-black">
            {title}
          </h2>
          <div className="flex flex-row gap-2">
            {/* plus */}
            <button onClick={handleAdd} className="relative">
              <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#379E3C]" />
              <PlusIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
            </button>
            {/* edit */}
            <button onClick={handleEdit} className="relative">
              <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#41869F]" />
              <EditIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
            </button>
            {/* delete */}
            <button onClick={handleDelete} className="relative">
              <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#E02929]" />
              <XIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
            </button>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <SectionVideoRow
              key={item.title}
              title={`${index + 1}. ${item.title}`}
              handleDelete={item.handleDelete}
              handleEdit={item.handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
