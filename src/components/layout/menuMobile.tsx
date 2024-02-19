import React from "react";
import { CgArrowsExchangeV } from "react-icons/cg";
import { HiOutlineHome } from "react-icons/hi";
import { LuWallet2 } from "react-icons/lu";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";

export default function MenuMobile() {
  return (
    <div
      className=" lg:hidden
    bg-dark absolute bottom-0 left-0 right-0 mx-auto w-[90%] flex justify-between items-center text-cloud-100 text-2xl sm:text-3xl  px-3 border-solid border border-dark-500 rounded-2xl"
    >
      <div>
        <HiOutlineHome />
      </div>
      <div>
        <LuWallet2 />
      </div>

      <div className=" -translate-y-[50%]   ">
        <div className="bg-dark w-14 h-14 sm:w-16 sm:h-16  flex-center rounded-full border-solid border-t  border-dark-500  ">
          <CgArrowsExchangeV className=" text-cyan text-4xl sm:text-5xl" />
        </div>
      </div>
      <div>
        <TbFileInvoice />
      </div>
      <div>
        <RiAccountPinCircleLine />
      </div>
    </div>
  );
}
