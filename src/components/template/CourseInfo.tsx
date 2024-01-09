import React from "react";
import Image from "next/image";
import { SkillPill } from "./SkillPill";

interface PropsI {
  description: string;
  userName: string;
  userProfession: string;
  userImageUrl: string;
  skills: string[];
}

export const CourseInfo = ({
  description,
  userName,
  userProfession,
  userImageUrl,
  skills,
}: PropsI) => {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-left text-[26px] font-bold not-italic leading-[normal] text-black">
          Descripcion del curso
        </h2>
        <article className="w-[601px] text-left text-[17px] font-light not-italic leading-[normal] text-[#383838]">
          {description}
        </article>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-left text-[26px] font-bold not-italic leading-[normal] text-black">
          Instructor
        </h2>
        <div className="flex flex-row gap-2">
          <div className="relative h-10 w-10 shrink-0 rounded-[40px]">
            <Image
              src={userImageUrl}
              fill
              objectFit="cover"
              alt="user"
              className="rounded-[40px]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-left text-[17px] font-normal not-italic leading-[normal] text-[#383838]">
              {userName}
            </p>
            <p className="text-left text-sm font-light not-italic leading-[normal] text-[#666]">
              {userProfession}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-left text-[26px] font-bold not-italic leading-[normal] text-black">
          Habilidades Nuevas
        </h2>
        <div className="flex flex-row gap-2">
          {skills.map((skill) => (
            <span
              className="flex  items-center justify-center gap-2.5 rounded-[50px] border border-[#525252] px-[9px] py-[5px] text-left text-[12px] font-normal not-italic leading-[normal] text-[#525252]"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
