import Image from "next/image";
import React from "react";
import LoadingGif from "../../assets/img/loading.gif";
import LoaderGif from "../../assets/img/loader.gif";

export const UILoader = (props: { size?: number }) => {
  return (
    <div className="h-full w-full items-center justify-center">
      <Image
        src={LoaderGif}
        width={props.size ?? 500}
        height={props.size ?? 500}
        alt="loading"
      />
    </div>
  );
};

export const UILoadingTurtle = (props: { size?: number }) => {
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
      <UILoadingTurtle />
    </div>
  );
};
