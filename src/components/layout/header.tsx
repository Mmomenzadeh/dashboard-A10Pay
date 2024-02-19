"use client";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import Profile from "../modules/profile";
import { HiOutlineBell } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "../modules/logo";
import { sideBarLink } from "../../../lib/sideBarLink";
import Link from "next/link";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import Account from "../modules/account";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdownsMenu, setOpenDropdownsMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <>
      {/* up 1024px width */}

      <header className="hidden lg:flex bg-dark w-full  justify-between items-center py-6 px-10 border-solid border-b border-b-dark-500 ">
        <h1 className="text-white capitalize font-bold text-xl leading-8">
          Invoices
        </h1>
        <div className="flex gap-x-10 items-center ">
          <FaBell className="text-white cursor-pointer" size={16} />
          <Profile />
        </div>
      </header>

      {/* down 1024px width*/}
      <header className="relative w-full flex items-center justify-between lg:hidden px-4 py-3">
        <div className=" text-white " onClick={() => setShowMenu(true)}>
          <BiMenuAltLeft size={32} />
        </div>

        <h1 className="capitalize text-white font-bold text-lg">Invoices</h1>
        <div className=" flex items-center gap-x-3 text-white">
          <div>
            <HiOutlineBell size={22} />
          </div>
          <div>
            <BsSearch size={18} />
          </div>
        </div>

        {/*.....  menu .... */}
        {showMenu && (
          <div
            className={`  
          fixed ${showMenu ? "left-0" : "-left-72"}
          z-20 transition-all  top-0
          h-screen  w-64 px-2 bg-dark border-solid border-r border-r-dark-500 overflow-auto scrollbar-none
          `}
          >
            <div className="w-full flex items-center justify-between    my-5  ">
              <Logo />
              <div onClick={() => setShowMenu(false)}>
                <IoIosCloseCircleOutline size={24} className="text-cyan" />
              </div>
            </div>

            <div className=" flex flex-col gap-y-2 ">
              {sideBarLink?.map((item, index) => (
                <>
                  <Link
                    href={item.srcLink}
                    className="flex items-center justify-between  py-2 px-1 hover:bg-cloud-900 rounded-lg"
                    key={index}
                    onClick={() => setOpenDropdownsMenu(!openDropdownsMenu)}
                  >
                    <div className="flex items-center gap-x-3">
                      <span className="block w-5 h-5">
                        <img src={item.svg} alt={item.title} />
                      </span>
                      <span className="text-cloud-100 font-[500] capitalize text-base leading-6">
                        {item.title}
                      </span>
                    </div>
                    {item.subMenu.length > 0 && (
                      <div className="text-cloud-100">
                        {openDropdownsMenu ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                    )}
                  </Link>

                  {openDropdownsMenu && item.subMenu.length > 0 && (
                    <>
                      {item.subMenu?.map((item, index) => (
                        <Link
                          href={item.srcLink}
                          className={`flex items-center text-sm justify-between  py-1 px-3  rounded-lg ${
                            active === item.id
                              ? "bg-cyan shadow-green text-black"
                              : "hover:bg-cloud-900 text-cloud-100"
                          }`}
                          key={index}
                          onClick={() => setActive(item.id)}
                        >
                          <span className=" font-[500] capitalize text-xs leading-6">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </>
                  )}
                </>
              ))}
            </div>

            <Account />
          </div>
        )}

        {/* <!-- overlay --> */}

        {showMenu && (
          <div
            className=" fixed inset-0 lg:hidden overlay-bg w-full h-full z-10 transition-all"
            onClick={() => setShowMenu(false)}
          ></div>
        )}
      </header>
    </>
  );
}
