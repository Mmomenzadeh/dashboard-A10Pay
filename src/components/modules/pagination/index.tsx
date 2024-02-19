import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination() {
  return (
    <div className="flex items-center gap-x-7 child:text-cloud-100 child-hover:bg-cyan child-hover:text-black child-hover:font-[500] text-sm  xl:text-base">
      <div className="w-[32px] h-[36px] flex-center rounded-lg font[500] text-sm">
        <IoIosArrowBack />
      </div>
      {Array.from({ length: 5 }).map((item, index) => (
        <>
          <div
            className="w-[32px] h-[36px] flex-center rounded-lg font[500] text-sm"
            key={index}
          >
            {index}
          </div>
        </>
      ))}

      <div className="w-[32px] h-[36px] flex-center rounded-lg font[500] text-sm">
        <IoIosArrowForward />
      </div>
    </div>
  );
}
