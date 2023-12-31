import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PropsI {
  id: string;
  imageUrl: string;
  title: string;
  authorName: string;
}

export const CourseCard = ({ imageUrl, title, authorName, id }: PropsI) => {
  return (
    <div className="flex w-[245px] flex-col items-start gap-[9px]">
      <Link
        href={`course/${id}`}
        className="relative h-[162px] w-full cursor-pointer transition duration-500  hover:scale-105"
      >
        <Image src={imageUrl} alt="course" fill objectFit="cover" />
      </Link>
      <article className="text-base font-medium not-italic leading-[normal] text-black">
        {title}
      </article>
      <article className="text-[10px] font-medium not-italic leading-[normal] text-[#393939]">
        Por: {authorName}
      </article>
    </div>
  );
};
