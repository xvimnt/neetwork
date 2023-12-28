import Image from "next/image";
import React from "react";
import { BannerArrowIcon } from "../UI/Icons";

interface PropsType {
  imageUrl: string;
  timeAgo: string;
  title: string;
  authorImageUrl: string;
  authorName: string;
  authorTitle: string;
  handleNext?: () => void;
  handlePrev?: () => void;
}

export const DashboardBanner = ({
  imageUrl,
  timeAgo,
  title,
  authorImageUrl,
  authorName,
  authorTitle,
  handleNext,
  handlePrev,
}: PropsType) => {
  return (
    <div className="relative">
      <div className="flex h-[239px] w-full shrink-0 items-center bg-cover px-[-120px] blur-[7.5px] brightness-50 saturate-200">
        <Image src={imageUrl} alt="course" fill objectFit="cover" />
      </div>
      <div className="absolute left-10 top-10 flex w-full flex-row items-center">
        <BannerArrowIcon
          className="mx-4 h-12 w-12 cursor-pointer stroke-white hover:stroke-primary-500"
          onClick={handlePrev}
        />
        <Image src={imageUrl} alt="course" width={272} height={162} />
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
            <Image
              src={authorImageUrl}
              alt="teacher"
              width={45}
              height={45}
              className="shrink-0 rounded-[45px]"
            />
            <div className="ml-2 flex flex-col">
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
          className="absolute right-10 h-12 w-12 rotate-180 cursor-pointer stroke-white hover:stroke-primary-500"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
