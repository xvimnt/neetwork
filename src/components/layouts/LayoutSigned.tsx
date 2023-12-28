import React, { type ReactNode } from "react";
import { Sidebar } from "~/components/template/Sidebar";
import { Navbar } from "~/components/template/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UIPageForbidden } from "../UI/UIPageForbidden";
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
  if (!session?.user) return <UIPageForbidden />;

  // Verify roles or roles
  if (role) {
    if (Array.isArray(role)) {
      if (!role.includes(session.user.role)) return <UIPageForbidden />;
    } else {
      if (role !== session.user.role) return <UIPageForbidden />;
    }
  }
  return (
    <>
      <Navbar user={session.user} />
      <Sidebar />
      <div className="w-full pt-2 md:pt-20">
        <div
          className={`${
            noPadding
              ? ""
              : "mx-auto w-full px-[20px] md:px-[60px]  2xl:px-[120px]"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
