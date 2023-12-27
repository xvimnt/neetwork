import React from "react";
import Image from "next/image";

export const UIStackedCard = ({
  size = "md",
  imageSrc,
  children,
}: {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  imageSrc: string | null;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`max-w-${size} ui-stacked-card relative my-2 w-full overflow-hidden rounded-xl p-4 `}
    >
      <div className="ui-stacked-card__body">
        <div className="relative mb-4 h-56 w-full">
          {imageSrc && (
            <Image
              layout="fill"
              objectFit="cover"
              src={imageSrc}
              alt="Sunset in the mountains"
              className="rounded-xl"
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
