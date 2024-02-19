import Button from "@/components/modules/button";
import Search from "@/components/modules/search";
import InvoicesTrade from "@/components/templates/Invoices";
import AdvancedFilters from "@/components/templates/advancedFilters";
import React from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { LuPlus, LuSettings2 } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";

export default function Invoices() {
  return (
    <div className="bg-dark rounded-lg px-6">
      {/* ......Header.... */}
      <div className="flex justify-between items-center pt-6">
        <div className="flex items-center gap-x-[14px]">
          <h1 className="text-white font-bold text-lg ">Invoices</h1>
          <BsQuestionCircleFill className="text-cloud-100" />
        </div>
        <div className="flex items-center gap-x-4">
          <Search
            placeholder="Search"
            className="  h-full w-[324px] flex items-center  bg-cloud-900 text-cloud-100  "
          >
            <RiSearchLine size={24} />
          </Search>
          <Button className=" flex items-center gap-x-2 bg-cyan py-2 px-4 rounded-lg text-black  bt-hover_cyan font-bold">
            <LuPlus />
            <span>Import Invoice</span>
          </Button>
          <Button className=" flex items-center gap-x-2 bg-cyan py-2 px-4 rounded-lg text-black  bt-hover_cyan font-bold">
            <LuPlus />
            <span>New Invoice</span>
          </Button>
        </div>
      </div>

      {/* ......Advanced Filters ..... */}

      <div className="flex items-center gap-x-6 py-[42px]">
        <div className=" flex items-center gap-x-2 text-cyan  capitalize ">
          <LuSettings2 />

          <span>Advanced Filters</span>
        </div>

        <Button className="bg-cloud-900 py-2 px-4 text-white rounded-lg">
          Clear
        </Button>
      </div>
      <AdvancedFilters />

      {/* ......Invoices ..... */}

      <InvoicesTrade />
    </div>
  );
}
