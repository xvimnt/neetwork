import Link from "next/link";
import React from "react";
import {
  CategoryIcon,
  DashboardIcon,
  GalleryIcon,
  HamburguerIcon,
  HouseIcon,
  LogoutIcon,
  MenuIcon,
  StatsIcon,
  UsersIcon,
  VideoIcon,
} from "../UI/Icons";
import { useSession } from "next-auth/react";

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const { data: session } = useSession();
  const menuItems = [
    {
      name: "Inicio",
      icon: <HouseIcon className="h-5 w-5" />,
      link: "/dashboard",
    },
    {
      name: "Mis Cursos",
      icon: <DashboardIcon />,
      link: "/courses",
    },
    // {
    //   name: "Proyectos",
    //   icon: <GalleryIcon />,
    //   link: "/projects",
    // },
    // {
    //   name: "Calendario",
    //   icon: <CalendarIcon />,
    //   link: "/calendar",
    // },
    // {
    //   name: "Reservaciones",
    //   icon: <CategoryIcon />,
    //   link: "/reports/reservations",
    // },
    {
      name: "Usuarios",
      icon: <UsersIcon className="h-5 w-5" />,
      link: "/reports/users",
      permissions: ["admin"],
    },
    {
      name: "Mis Cursos",
      icon: <VideoIcon className="h-5 w-5" />,
      link: `/user`,
    },
    {
      name: "Salir",
      icon: <LogoutIcon />,
      link: "/api/auth/signout",
    },
  ];

  const sidebar = document.querySelector("aside");
  const maxSidebar = document.querySelector(".max");
  const miniSidebar = document.querySelector(".mini");
  const maxToolbar = document.querySelector(".max-toolbar");
  const logo = document.querySelector(".logo");
  const content = document.querySelector(".content");

  function openNav() {
    if (open) {
      // max sidebar
      sidebar?.classList.remove("-translate-x-48");
      sidebar?.classList.add("translate-x-none");
      maxSidebar?.classList.remove("hidden");
      maxSidebar?.classList.add("flex");
      miniSidebar?.classList.remove("flex");
      miniSidebar?.classList.add("hidden");
      maxToolbar?.classList.add("translate-x-0");
      maxToolbar?.classList.remove("translate-x-24", "scale-x-0");
      logo?.classList.remove("ml-12");
      content?.classList.remove("ml-12");
      content?.classList.add("ml-12", "md:ml-60");
    } else {
      // mini sidebar
      sidebar?.classList.add("-translate-x-48");
      sidebar?.classList.remove("translate-x-none");
      maxSidebar?.classList.add("hidden");
      maxSidebar?.classList.remove("flex");
      miniSidebar?.classList.add("flex");
      miniSidebar?.classList.remove("hidden");
      maxToolbar?.classList.add("translate-x-24", "scale-x-0");
      maxToolbar?.classList.remove("translate-x-0");
      logo?.classList.add("ml-12");
      content?.classList.remove("ml-12", "md:ml-60");
      content?.classList.add("ml-12");
    }
    setOpen((prev) => !prev);
  }

  return (
    <>
      <nav className="bg-gradient mb-2 w-full shadow md:hidden">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-20 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              <Link href="#" className="">
                <div className="avatar">
                  <div className="w-16 rounded">
                    <h1 className="text-3xl font-bold text-white">Neetwork </h1>
                  </div>
                </div>
              </Link>

              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-white outline-none focus:font-bold"
                  onClick={() => setOpen(!open)}
                >
                  <HamburguerIcon />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`md:hidden ${open ? "block" : "hidden"}`}>
              <ul className=" items-center justify-center space-y-8 py-6 ">
                {menuItems.map((item, index) => {
                  if (item.permissions && session?.user?.role) {
                    if (!item.permissions.includes(session?.user?.role))
                      return null;
                  }
                  return (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex w-full transform flex-row items-center space-x-3 rounded-full  text-white duration-300 ease-in-out hover:ml-4 hover:text-secondary-100 dark:hover:text-blue-500"
                    >
                      {item.icon}
                      <div>{item.name}</div>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <aside className="fixed z-50 hidden h-screen w-60 -translate-x-48 transform bg-[#68E1FD] transition duration-1000 ease-in-out md:flex">
        <button
          onClick={openNav}
          className="absolute right-0 top-4 flex w-full transform items-center justify-between bg-[#C7E21C] p-4 pl-4 text-black transition duration-500 ease-in-out hover:bg-black hover:fill-[#C7E21C] hover:text-[#C7E21C]"
        >
          Neetwork
          <MenuIcon className="h-6 w-6" />
        </button>
        <div className="max mt-20 hidden h-screen w-full flex-col space-y-2 text-white">
          {/* text and logo */}
          {menuItems.map((item, index) => {
            if (item.permissions && session?.user?.role) {
              if (!item.permissions.includes(session?.user?.role)) return null;
            }
            return (
              <Link
                key={index}
                href={item.link}
                className="flex w-full transform flex-row items-center space-x-3  p-2 pl-4 text-black duration-300 ease-in-out  hover:bg-black hover:fill-[#C7E21C] hover:text-[#C7E21C]"
              >
                {item.icon}
                <div>{item.name}</div>
              </Link>
            );
          })}
        </div>
        {/* only logos */}
        <div className="mini mt-20 flex h-full w-full flex-col ">
          {menuItems.map((item, index) => {
            if (item.permissions && session?.user?.role) {
              if (!item.permissions.includes(session?.user?.role)) return null;
            }
            return (
              <Link
                key={index}
                href={item.link}
                className="flex w-full transform justify-end  p-4 text-black duration-300 ease-in-out hover:bg-black hover:fill-[#C7E21C] hover:text-[#C7E21C]"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};
