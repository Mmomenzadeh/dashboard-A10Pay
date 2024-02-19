import React from "react";
import { LayoutProps } from "../../../lib/interface";
import SideBar from "./sideBar";
import Header from "./header";
import MenuMobile from "./menuMobile";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full relative flex bg-dark-800 h-screen ">
      <SideBar />
      <div className="w-full ">
        <Header />
        <div className=" px-5 xl:px-10 py-[22px] ">{children}</div>
      </div>
      <MenuMobile />
    </div>
  );
}
