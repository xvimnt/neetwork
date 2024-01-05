import Link from "next/link";
import React from "react";
import { GraduationIcon } from "../UI/Icons";
import WhiteGradient from "~/assets/svg/white-gradient.svg";
import Image from "next/image";

interface PropsI {
  courseId: string;
  title: string;
  imageUrl: string;
  createdAt: Date;
  assignationCount: number;
  hasAssignation: boolean;
  duration: string;
  handleInscription: () => void;
}

export const CourseBanner = ({
  courseId,
  title,
  imageUrl,
  createdAt,
  assignationCount,
  hasAssignation,
  duration,
  handleInscription,
}: PropsI) => {
  return (
    <div className="flex w-full flex-row">
      {/* image */}
      <div className="relative h-60 w-[70%] shrink-0">
        <Image src={imageUrl} alt="curso" fill objectFit="cover" />

        <div className="absoulte left-0 right-0 top-0 h-60 w-[70%] shrink-0">
          <Image src={WhiteGradient} alt="curso" fill objectFit="cover" />
        </div>
      </div>
      {/* course info */}
      <div className="flex w-full flex-col items-end justify-center gap-4">
        {/* title */}
        <h1 className=" text-end text-3xl font-bold not-italic leading-[normal] text-black">
          {title}
        </h1>
        {/* info */}
        <h2 className="text-[15px] font-semibold not-italic leading-[normal] text-[#383838]">
          {duration} - Desde el {createdAt.toLocaleDateString()}
        </h2>
        {/* number of students */}
        <div className="flex flex-row gap-2">
          <GraduationIcon className="fill-[#C7E21C]" />
          <p className="leading-[normal]; text-[13px] font-normal not-italic text-[#383838]">
            {assignationCount ? assignationCount : 0} Inscritos
          </p>
        </div>
        {/* cta */}
        {hasAssignation ? (
          <Link
            href={`${courseId}/play`}
            className="flex h-10 w-[157px] shrink-0 items-center justify-center rounded-[5px] bg-[#c7e21c] font-semibold hover:bg-[#becf4f]"
          >
            Empezar
          </Link>
        ) : (
          <button
            onClick={handleInscription}
            className="flex h-10 w-[157px] shrink-0 items-center justify-center rounded-[5px] bg-[#c7e21c] font-semibold hover:bg-[#becf4f]"
          >
            Inscribirse
          </button>
        )}
      </div>
    </div>
  );
};
