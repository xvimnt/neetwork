import React from "react";
import Image from "next/image";

export const UIHorizontalCard = ({
  size = "md",
  imageSrc,
  children,
}: {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  imageSrc: string | null;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`max-w-${size} ui-horizontal-card my-2`}>
      <div className="ui-horizontal-card__body">
        <div
          className="relative h-auto flex-none overflow-hidden  rounded-xl bg-cover text-center sm:w-80 lg:w-40 xl:w-60"
          title="Card Image"
        >
          {imageSrc && (
            <Image
              layout="fill"
              objectFit="cover"
              src={imageSrc}
              alt="Sunset in the mountains"
            />
          )}
        </div>
        <div className="flex w-full flex-col justify-between rounded-r-xl  p-4 leading-normal ">
          {children}
        </div>
      </div>
    </div>
  );
};
