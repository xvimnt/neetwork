import Image from "next/image";
import React from "react";
import Logo from "~/assets/img/logo.png";
import { HamburguerCourseIcon } from "../UI/Icons";

interface PropsI {
  title: string;
  authorName: string;
  remainingTime: string;
  date: string;
  imageUrl: string;
}

export const CourseCardLarge = ({
  title,
  authorName,
  remainingTime,
  date,
  imageUrl,
}: PropsI) => {
  return (
    <div>
      <div className="relative flex flex-row gap-4">
        <div className="relative h-[147px] w-[222px] shrink-0">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt="Curso"
            className="cursor-pointer transition duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h3 className="text-[26px] font-bold not-italic leading-[normal] text-black">
              {title}
            </h3>
            <div className="flex flex-row items-center gap-2">
              <div className="relative h-[26px] w-[26px]">
                <Image src={Logo} fill objectFit="cover" alt="Logo" />
              </div>
              <p className="text-sm font-bold not-italic leading-[normal] text-[#565555]">
                Neetwork - Por: {authorName} - {date}
              </p>
            </div>
            <div className="relative mt-16 flex flex-row items-center gap-2">
              <div className="h-[6px] w-[324px] shrink-0 bg-gray-200"></div>
              <div className="absolute left-0 top-1.5 h-[6px] w-[300px] shrink-0 bg-[#C7E21C]"></div>
              <p className="text-sm font-bold not-italic leading-[normal] text-[#565555]">
                {remainingTime} restantes
              </p>
            </div>
          </div>
        </div>
        <HamburguerCourseIcon className="absolute right-0 cursor-pointer fill-black hover:fill-[#C7E21C]" />
      </div>
      <div className="fixed  left-0 right-0 my-4 h-[1px] bg-gray-200"></div>
    </div>
  );
};
