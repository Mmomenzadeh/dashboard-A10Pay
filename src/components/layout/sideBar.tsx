"use client";
import { useState } from "react";
import Link from "next/link";
import { sideBarLink } from "../../../lib/sideBarLink";
import Logo from "../modules/logo";
import Account from "../modules/account";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function SideBar() {
  const [openDropdownsMenu, setOpenDropdownsMenu] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <>
      {/* up 1024px width */}
      <aside className="hidden lg:block w-28 lg:w-40 xl:w-64 px-3 lg:px-2 xl:px-3 bg-dark border-solid border-r border-r-dark-500 h-screen overflow-auto scrollbar-none">
        <div className="mb-10 mt-[25px] flex-center">
          <Logo />
        </div>

        <div className=" flex flex-col gap-y-3 ">
          {sideBarLink?.map((item, index) => (
            <>
              <Link
                href={item.srcLink}
                className="flex items-center justify-between px-2 py-3 lg:px-1 lg:py-2 xl:py-3  xl:px-5 hover:bg-cloud-900 rounded-lg"
                key={index}
                onClick={() => setOpenDropdownsMenu(!openDropdownsMenu)}
              >
                <div className="flex items-center gap-x-3">
                  <span className="block w-6 h-6">
                    <img src={item.svg} alt={item.title} />
                  </span>
                  <span className="hidden lg:block text-cloud-100 font-[500] capitalize font-base leading-6 text-xs  xl:text-base">
                    {item.title}
                  </span>
                </div>
                {item.subMenu.length > 0 && (
                  <div className="text-cloud-100">
                    {openDropdownsMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                )}
              </Link>

              {openDropdownsMenu && item.subMenu.length > 0 && (
                <>
                  {item.subMenu?.map((item, index) => (
                    <Link
                      href={item.srcLink}
                      className={`flex items-center justify-between  px-3 py-1 lg:py-2 xl:py-3  xl:px-5  rounded-lg ${
                        active === item.id
                          ? "bg-cyan shadow-green text-black"
                          : "hover:bg-cloud-900 text-cloud-100"
                      }`}
                      key={index}
                      onClick={() => setActive(item.id)}
                    >
                      <span className=" font-[500] capitalize font-base leading-6 text-xs  xl:text-base">
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
      </aside>
    </>
  );
}
