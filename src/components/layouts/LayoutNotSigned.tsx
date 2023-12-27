import React from "react";
// import Footer from "../pages/landing/components/Footer";
// import TopHeader from "../pages/landing/components/Topbar";
// import Navbar from "../pages/landing/components/Navbar";

export const LayoutNotSigned = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {/* <Hero/> */}
      {/* <TopHeader />
      <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};
