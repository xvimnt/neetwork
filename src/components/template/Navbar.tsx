import { type DefaultSession } from "next-auth";
import Image from "next/image";
import React from "react";

export const Navbar = (props: { user: DefaultSession["user"] }) => {
  const { user } = props;
  const [search, setSearch] = React.useState("");
  if (!user) return <></>;
  return (
    <div className="fixed z-30 hidden h-16 w-full items-center justify-center bg-white py-2 pl-[40px] pr-[30px] md:flex dark:bg-[#0F172A]">
      <div className="logo  ml-12 flex h-full flex-none transform items-center justify-center text-xl duration-500 ease-in-out dark:text-white">
        Neetwork
      </div>
      <div className="flex h-full grow items-center justify-center">
        {/* <UIDebouncer
          icon={<SearchIcon className="h-7 w-7" />}
          value={search}
          setValue={setSearch}
        /> */}
      </div>
      <div className="flex h-full flex-none items-center justify-center text-center">
        <div className="flex items-center space-x-3 px-3">
          <div className="flex flex-none justify-center">
            <div className="flex h-8 w-8 ">
              {user.image ? (
                <Image
                  src={user.image}
                  alt="profile"
                  className="rounded-full object-cover shadow"
                  width={32}
                  height={32}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="md:text-md hidden text-sm text-black md:block dark:text-white">
            {user.name}
          </div>
        </div>
      </div>
    </div>
  );
};
