import React from "react";
import { LayoutProps } from "../../../lib/interface";
import SideBar from "./sideBar";
import Header from "./header";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full flex bg-dark-800 h-screen">
      <SideBar />
      <div className="w-full ">
        <Header />
        {children}
      </div>
    </div>
  );
}
