import Button from "@/components/modules/button";
import Pagination from "@/components/modules/pagination";
import RowsPerPage from "@/components/modules/rowsPerPage";
import Search from "@/components/modules/search";
import InvoicesTrade from "@/components/templates/Invoices";
import AdvancedFilters from "@/components/templates/advancedFilters";
import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { LuPlus, LuSettings2 } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { sort } from "../../../lib/sort";

export default function Invoices() {
  return (
    <div className="bg-dark rounded-lg  md:px-6 h-auto  overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan">
      {/* ......Header.... */}
      <div className="flex justify-between items-center pt-6">
        <div className="hidden lg:flex items-center gap-x-[14px]">
          <h1 className="text-white font-bold text-lg ">Invoices</h1>
          <BsQuestionCircleFill className="text-cloud-100" />
        </div>
        <div className="hidden lg:flex items-center gap-x-4">
          <Search
            placeholder="Search"
            className="hidden lg:flex  h-full lg:w-52 xl:w-[324px]  items-center  bg-cloud-900 text-cloud-100  "
          >
            <RiSearchLine size={24} />
          </Search>
          <Button className=" flex items-center gap-x-2 bg-cyan  py-2 lg:h-10 px-2 xl:py-2 xl:px-4 rounded-lg text-black  bt-hover_cyan font-bold text-xs lg:text-sm  xl:text-base ">
            <LuPlus />
            <span>Import Invoice</span>
          </Button>
          <Button className=" flex items-center gap-x-2 bg-cyan  py-2 lg:h-10 px-2 xl:py-2 xl:px-4 rounded-lg text-black  bt-hover_cyan font-bold text-xs lg:text-sm  xl:text-base ">
            <LuPlus />
            <span>New Invoice</span>
          </Button>
        </div>
        {/* down 1024px width */}
        <div className="w-full flex lg:hidden items-center justify-between ">
          <Button
            className="flex items-center gap-x-2 text-cyan  capitalize text-xs md:text-sm   border-solid 
          
          border border-cyan px-3 py-2 rounded-lg
          
          "
          >
            <LuSettings2 />

            <span>Advanced Filters</span>
          </Button>

          <div className="hidden md:flex items-center gap-x-4">
            <Button className=" flex items-center gap-x-1 md:gap-x-2 bg-cyan py-1 md:py-2  px-2 rounded-lg text-black  bt-hover_cyan font-bold text-[10px] md:text-xs  ">
              <LuPlus />
              <span>Import Invoice</span>
            </Button>
            <Button className=" flex items-center gap-x-1 md:gap-x-2 bg-cyan py-1 md:py-2  px-2 rounded-lg text-black  bt-hover_cyan font-bold text-[10px] md:text-xs  ">
              <LuPlus />
              <span>New Invoice</span>
            </Button>
          </div>
        </div>
      </div>

      {/* ...... table ..... */}
      <table className="table-dark w-full">
        {/* up 1024px width */}
        <thead className="hidden lg:block">
          <div className="flex items-center gap-x-6 py-5 2xl:py-10">
            <div className=" flex items-center gap-x-2 text-cyan  capitalize text-sm  2xl:text-base ">
              <LuSettings2 />

              <span>Advanced Filters</span>
            </div>

            <Button className="bg-cloud-900 py-2 px-4 text-white rounded-lg text-sm  2xl:text-base">
              Clear
            </Button>
          </div>
          <AdvancedFilters />
        </thead>

        {/* down 1024px width */}
        <thead className="lg:hidden">
          <tr className=" w-full flex justify-between items-center    py-3  pt-10">
            {sort?.map((item, index) => (
              <td
                className={`w-full flex justify-center  text-cloud-100 ${
                  item.id === 2 ||
                  item.id === 3 ||
                  item.id === 5 ||
                  item.id === 8
                    ? "hidden sm:inline-flex"
                    : ""
                }`}
                key={index}
              >
                <span className={`text-sm  xl:text-sm 2xl:text-base `}>
                  {4 === index + 1
                    ? "amount"
                    : 5 === index + 1
                    ? "network"
                    : item.name}

                  {/* {item.name} */}
                </span>
              </td>
            ))}
          </tr>
        </thead>
        {/* ......table body ..... */}
        <InvoicesTrade />
        {/* ......table footer ..... */}
        <tfoot className="hidden w-full lg:flex justify-between items-center pb-3 xl:pb-6 ">
          <RowsPerPage />

          <Pagination />
        </tfoot>
      </table>

      {/*  ...... table in mobile mode ..... */}
    </div>
  );
}
