import React from "react";
import { CourseCard } from "./CourseCard";
import { BannerArrowIcon, CircleIcon } from "../UI/Icons";

interface CourseI {
  id: string;
  imageUrl: string;
  title: string;
  authorName: string;
}

interface PropsI {
  items: CourseI[];
  title: string;
}

export const CourseCarrousel = ({ items, title }: PropsI) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <h3 className="text-[17px] font-bold not-italic leading-[normal] text-black">
          {title}
        </h3>
        <div className="relative cursor-pointer">
          <CircleIcon className="fill-[#D9D9D9] hover:fill-[#727272]" />
          <BannerArrowIcon className="absolute left-0 top-0 hover:stroke-primary-500" />
        </div>
        <div className="relative cursor-pointer">
          <CircleIcon className="fill-[#D9D9D9]" />
          <BannerArrowIcon className="absolute left-0 top-0 rotate-180 hover:stroke-primary-500" />
        </div>
      </div>
      <div className="flex w-full flex-row gap-2 ">
        {items.map((item) => (
          <CourseCard
            id={item.id}
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            authorName={item.authorName}
          />
        ))}
      </div>
    </div>
  );
};
