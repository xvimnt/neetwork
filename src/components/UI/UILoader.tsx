import Image from "next/image";
import React from "react";
import LoadingGif from "../../assets/img/loading.gif";

export const UILoader = (props: { size?: number }) => {
  return (
    <Image
      src={LoadingGif}
      width={props.size ?? 500}
      height={props.size ?? 500}
      alt="loading"
    />
  );
};

export const UILoadingPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <UILoader />
    </div>
  );
};
