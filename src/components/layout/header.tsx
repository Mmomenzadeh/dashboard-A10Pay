import React from "react";
import { FaBell } from "react-icons/fa";
import Profile from "../modules/profile";

export default function Header() {
  return (
    <>
      <header className="bg-dark w-full flex justify-between items-center py-6 px-10 border-dark500 ">
        <h1 className="text-white capitalize font-bold text-xl leading-8">
          Invoices
        </h1>
        <div className="flex gap-x-10 items-center ">
          <FaBell className="text-white cursor-pointer" size={16} />
          <Profile />
        </div>
      </header>
    </>
  );
}
