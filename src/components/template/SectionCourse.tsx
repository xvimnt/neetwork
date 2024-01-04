import React from "react";
import { SectionCard } from "./SectionCard";
import {
  CircleIcon,
  PlusIcon,
  DownArrowIcon,
  XIcon,
  EditIcon,
} from "../UI/Icons";

interface SubItemI {
  title: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

interface ItemI {
  title: string;
  handleEdit: () => void;
  handleDelete: () => void;
  handleAdd: () => void;
  items: SubItemI[];
}

interface PropsI {
  items: ItemI[];
  title: string;
  handleDelete: () => void;
  handleAddSection: () => void;
  handleEdit: () => void;
}

export const SectionCourse = ({
  items,
  title,
  handleAddSection,
  handleDelete,
  handleEdit,
}: PropsI) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpanded = () => setExpanded((prev) => !prev);
  const hasItems = items && items.length > 0;

  return (
    <>
      {/* title and button */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <span className="text-[22px] font-semibold not-italic leading-[normal] text-black">
            {title}
          </span>
          {/* dropdown button */}
          <button className="relative" onClick={handleExpanded}>
            <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#41869F] hover:fill-[#51aed0]" />
            <DownArrowIcon
              className={`absolute left-[10px] top-[10px] h-[20px] w-[20px]  fill-[#FFFFFF] stroke-white ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
          {/* delete */}
          <button onClick={handleDelete} className="relative">
            <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#E02929] hover:fill-[#ec5858]" />
            <XIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
          </button>
          {/* edit */}
          <button onClick={handleEdit} className="relative">
            <CircleIcon className="h-[40px] w-[40px] shrink-0 fill-[#41869F] hover:fill-[#51aed0]" />
            <EditIcon className="absolute left-[10px] top-[10px] h-[20px] w-[20px] fill-[#FFFFFF] stroke-white" />
          </button>
        </div>
        {/* add section */}
        <button
          onClick={handleAddSection}
          className="inline-flex items-center justify-center gap-[19px] rounded-[50px] border border-[#c7e21c] bg-[#c7e21c] px-8 py-2.5 hover:bg-[#eeff7e]"
        >
          <span className="font-semibold not-italic leading-[normal] text-black">
            Agregar Seccion
          </span>
          <PlusIcon className="h-[24px] w-[24px]  fill-[#000000]" />
        </button>
      </div>
      {/* cards */}
      <div className={`flex flex-col gap-4 ${expanded ? "" : "hidden"}`}>
        {/* card */}
        {hasItems ? (
          items.map((item, index) => (
            <SectionCard
              key={item.title}
              title={`${index + 1}. ${item.title}`}
              handleDelete={item.handleDelete}
              handleEdit={item.handleEdit}
              handleAdd={item.handleAdd}
              items={item.items}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-[20px] font-bold not-italic leading-[normal] text-black">
              No tienes secciones
            </span>
          </div>
        )}
      </div>
    </>
  );
};
