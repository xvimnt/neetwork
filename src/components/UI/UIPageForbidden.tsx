import Image from "next/image";
import React from "react";
import Forbidden from "~/assets/svg/forbidden.svg";

export const UIPageForbidden = () => {
  return (
    <section className="justify-cente flex h-[100vh] w-full items-center">
      <Image src={Forbidden} alt="" className="h-[95%] w-[95%]" />
    </section>
  );
};
