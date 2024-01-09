import Image from "next/image";
import React from "react";
import Logo from "~/assets/img/logo.png";
import { HamburguerCourseIcon } from "../UI/Icons";
import Link from "next/link";
import { UILoadingPage } from "../UI/UILoader";
import { api } from "~/utils/api";

interface PropsI {
  assignationId: string;
  courseId: string;
  title: string;
  authorName: string;
  date: string;
  imageUrl: string;
}

export const CourseCardLarge = ({
  assignationId,
  courseId,
  title,
  authorName,
  date,
  imageUrl,
}: PropsI) => {
  const { data: progress, isLoading: assignationLoading } =
    api.assignation.getProgress.useQuery({
      id: assignationId,
    });

  if (assignationLoading) return <UILoadingPage />;
  return (
    <div className="relative">
      <div className="relative flex flex-row gap-4">
        <Link
          href={`course/${courseId}`}
          className="relative h-[147px] w-[222px] shrink-0"
        >
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt="Curso"
            className="cursor-pointer transition duration-500 hover:scale-105"
          />
        </Link>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h3 className="text-[20px] font-bold not-italic leading-[normal] text-black">
              {title}
            </h3>
            <div className="flex flex-row items-center gap-2">
              <div className="relative h-[20px] w-[20px]">
                <Image src={Logo} fill objectFit="cover" alt="Logo" />
              </div>
              <p className="text-sm font-semibold not-italic leading-[normal] text-[#565555]">
                educatree - Por: {authorName} - {date}
              </p>
            </div>
            <div className="relative mt-16 flex flex-row items-center gap-2">
              <div className="h-[6px] w-full shrink-0 bg-gray-200"></div>
              {progress && (
                <div
                  className={`top-3.4 absolute left-0 h-[6px] w-[${
                    progress * 100
                  }%] shrink-0 bg-[#C7E21C]`}
                ></div>
              )}
              {progress && (
                <p className="text-sm font-normal not-italic leading-[normal] text-[#565555]">
                  {progress * 100}% restantes
                </p>
              )}
            </div>
          </div>
        </div>
        <HamburguerCourseIcon className="absolute right-0 cursor-pointer fill-black hover:fill-[#C7E21C]" />
      </div>
      <div className="absolute left-0 right-0 my-4 h-[1px] bg-gray-200"></div>
    </div>
  );
};
