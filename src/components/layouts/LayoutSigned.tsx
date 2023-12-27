import React, { type ReactNode } from "react";
// import { Sidebar } from "~/components/template/Sidebar";
// import { Navbar } from "~/components/template/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UIPage404 } from "../UI/UIPage404";
export const LayoutSigned = ({
  role = ["admin", "salesperson", "supervisor"],
  children,
  noPadding = false,
}: {
  children: ReactNode;
  noPadding?: boolean;
  role?: string | string[];
}) => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  if (!session?.user) return <UIPage404 />;

  // Verify roles or roles
  if (role) {
    if (Array.isArray(role)) {
      if (!role.includes(session.user.role)) return <UIPage404 />;
    } else {
      if (role !== session.user.role) return <UIPage404 />;
    }
  }
  return (
    <>
      {/* <Navbar user={session.user} />
      <Sidebar /> */}
      <div className="w-full pt-2 md:pl-12 md:pt-20">
        <div
          className={`${
            noPadding ? "" : "mx-auto w-full px-2 md:px-4 lg:px-12 2xl:px-48"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
