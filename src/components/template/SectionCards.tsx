import React from "react";
import { SectionCard } from "./SectionCard";

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
}

export const SectionCards = ({ items }: PropsI) => {
  return (
    <div className="flex flex-col gap-4">
      {/* card */}
      {items.map((item) => (
        <SectionCard
          key={item.title}
          title={item.title}
          handleDelete={item.handleDelete}
          handleEdit={item.handleEdit}
          handleAdd={item.handleAdd}
          items={item.items}
        />
      ))}
    </div>
  );
};
