import Image from "next/image";
import React from "react";
import { BannerArrowIcon } from "../UI/Icons";
import Link from "next/link";

interface PropsI {
  id: string;
  imageUrl: string;
  timeAgo: string;
  title: string;
  authorImageUrl: string;
  authorName: string;
  authorTitle: string;
  handleNext: () => void;
  handlePrevious: () => void;
}

export const DashboardBanner = ({
  id,
  imageUrl,
  timeAgo,
  title,
  authorImageUrl,
  authorName,
  authorTitle,
  handleNext,
  handlePrevious,
}: PropsI) => {
  return (
    <div className="relative">
      <div className="-ml-[40px] flex h-[250px] w-[95vw] shrink-0 items-center bg-cover blur-[7.5px] brightness-50 saturate-200">
        <Image
          src={imageUrl}
          alt="course"
          fill
          objectFit="cover"
          className="selectDisable"
        />
      </div>
      <div className="absolute left-0 top-10 flex w-full flex-row items-center">
        <BannerArrowIcon
          className="mr-4 h-12 w-12 cursor-pointer stroke-white hover:stroke-primary-500"
          onClick={handlePrevious}
        />
        <Link
          href={`/course/${id}`}
          className="relative h-[162px] w-[272px] cursor-pointer transition duration-500  hover:scale-110"
        >
          <Image
            src={imageUrl}
            alt="course"
            fill
            objectFit="cover"
            className="selectDisable"
          />
        </Link>
        <div className="ml-6 flex h-[162px] flex-col">
          <div className="flex flex-row">
            <div className="w-[52px] shrink-0 rounded-[50px] bg-green-500 text-center text-[10px] font-bold not-italic leading-[normal] text-white">
              Nuevo
            </div>
            <div className="ml-2 h-[18px] w-[139px] shrink-0 text-center text-xs font-bold not-italic leading-[normal] text-[#E7E7E7]">
              Subido hace {timeAgo}
            </div>
          </div>
          <div className="text-[38px] font-bold not-italic leading-[normal] text-white">
            {title}
          </div>
          <div className="mt-14 flex flex-row">
            <div className="relative h-[40px] w-[40px] rounded-full">
              <Image
                src={authorImageUrl}
                alt="teacher"
                fill
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="ml-2 flex flex-col items-start justify-center">
              <p className="text-center text-[15px] font-bold not-italic leading-[normal] text-white">
                {authorName}
              </p>
              <p className="text-center text-[11px] font-medium not-italic leading-[normal] text-[#F9F9F9]">
                {authorTitle}
              </p>
            </div>
          </div>
        </div>
        <BannerArrowIcon
          className="absolute right-0 h-12 w-12 rotate-180 cursor-pointer stroke-white hover:stroke-primary-500"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
