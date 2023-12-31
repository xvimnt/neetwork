import Image from "next/image";
import React from "react";
import Logo from "~/assets/img/logo.png";
import { EmailFooterIcon, FacebookIcon, InstagramIcon } from "../UI/Icons";

export const Footer = () => {
  return (
    <div className="flex h-[100px] w-full flex-row items-center justify-between bg-[#C7E21C] px-8">
      <div className="flex flex-row items-center gap-4">
        <div className="relative ml-[6vh] h-[68px] w-[68px]">
          <Image src={Logo} alt="logo" layout="fill" objectFit="contain" />
        </div>
        <p className="text-[15px] font-bold not-italic leading-[normal] text-black">
          Copyright 2023
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <InstagramIcon className="h-[32px] w-[32px] fill-[#000000]" />
        <FacebookIcon className="h-[32px] w-[32px] fill-[#000000]" />
        <EmailFooterIcon className="h-[32px] w-[32px] fill-[#000000]" />
      </div>
    </div>
  );
};
