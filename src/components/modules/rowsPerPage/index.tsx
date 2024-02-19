import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function RowsPerPage() {
  return (
    <>
      <div className="flex items-center text-cloud-100 gap-x-3 text-sm  xl:text-base">
        <span className="">Rows per page</span>
        <div className="flex items-center gap-x-2">
          <span className="border-solid border-b border-b-cyan">10</span>
          <IoIosArrowDown size={16} />
        </div>
      </div>
    </>
  );
}
