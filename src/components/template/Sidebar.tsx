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
} from "../UI/Icons";
import { useSession } from "next-auth/react";

const menuItems = [
  {
    name: "Inicio",
    icon: <HouseIcon className="h-5 w-5 text-white" />,
    link: "/dashboard",
  },
  // {
  //   name: "Datos",
  //   icon: <DashboardIcon />,
  //   link: "/add",
  //   permissions: ["admin"],
  // },
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
  // {
  //   name: "Transacciones",
  //   icon: <TransactionIcon />,
  //   link: "/reports/transactions",
  // },
  {
    name: "Salir",
    icon: <LogoutIcon />,
    link: "/api/auth/signout",
  },
];

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const { data: session } = useSession();

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
      <aside className="fixed z-50 hidden h-screen w-60 -translate-x-48 transform bg-primary-500 transition duration-1000 ease-in-out md:flex">
        <div className="max-toolbar absolute -right-6 top-2 flex h-12 w-full translate-x-24 scale-x-0 transform items-center justify-between rounded-full border-4 border-white bg-primary-500  transition duration-300 ease-in dark:border-[#0F172A]">
          <div className="group flex items-center space-x-3 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-secondary-500 py-1  pl-10 pr-2 text-white dark:from-primary-500 dark:to-secondary-500  ">
            <Link href="/" className="mr-12 transform duration-300 ease-in-out">
              Neetwork
            </Link>
          </div>
        </div>
        <button
          onClick={openNav}
          className="absolute -right-6 top-2 flex transform rounded-full border-4 border-white bg-primary-500 p-3 text-white transition duration-500 ease-in-out hover:rotate-45 hover:bg-secondary-500 dark:border-[#0F172A] dark:hover:bg-secondary-500"
        >
          <MenuIcon />
        </button>
        <div className="max mt-20 hidden h-screen w-full flex-col space-y-2 text-white">
          {menuItems.map((item, index) => {
            if (item.permissions && session?.user?.role) {
              if (!item.permissions.includes(session?.user?.role)) return null;
            }
            return (
              <Link
                key={index}
                href={item.link}
                className="flex w-full transform flex-row items-center space-x-3 rounded-full bg-primary-500 p-2 pl-8 text-white duration-300 ease-in-out hover:ml-4 hover:text-secondary-100 dark:hover:text-blue-500"
              >
                {item.icon}
                <div>{item.name}</div>
              </Link>
            );
          })}
        </div>
        <div className="mini mt-20 flex h-full w-full flex-col space-y-2">
          {menuItems.map((item, index) => {
            if (item.permissions && session?.user?.role) {
              if (!item.permissions.includes(session?.user?.role)) return null;
            }
            return (
              <Link
                key={index}
                href={item.link}
                className="flex w-full transform justify-end rounded-full bg-primary-500 p-3 pr-5 text-white duration-300 ease-in-out hover:ml-4 hover:text-secondary-100 dark:hover:text-blue-500"
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
