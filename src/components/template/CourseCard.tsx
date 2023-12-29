import Image from "next/image";
import React from "react";

interface PropsI {
  imageUrl: string;
  title: string;
  authorName: string;
}

export const CourseCard = ({ imageUrl, title, authorName }: PropsI) => {
  return (
    <div className="flex w-[245px] flex-col items-start gap-[9px]">
      <div className="relative h-[162px] w-full cursor-pointer transition duration-500  hover:scale-105">
        <Image src={imageUrl} alt="course" fill objectFit="cover" />
      </div>
      <article className="text-base font-medium not-italic leading-[normal] text-black">
        {title}
      </article>
      <article className="text-[10px] font-medium not-italic leading-[normal] text-[#393939]">
        Por: {authorName}
      </article>
    </div>
  );
};
