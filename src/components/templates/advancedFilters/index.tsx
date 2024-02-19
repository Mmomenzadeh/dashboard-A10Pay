import React from "react";
import { sort } from "../../../../lib/sort";
import Input from "@/components/modules/input/inex";

export default function AdvancedFilters() {
  return (
    <div className="flex justify-between items-center  gap-x-1">
      {sort?.map((item, index) => (
        <div
          className=" flex flex-col items-center gap-3  text-cloud-100"
          key={index}
        >
          <span>{item.name}</span>

          <div className="bg-cloud-900 py-1 px-2 rounded-lg w-[100px] ">
            <Input className=" bg-transparent pl-4" type="text">
              <img
                src={item.svg}
                alt=""
                className="w-[14px] h-[14px]  absolute top-[27%]"
              />
            </Input>
          </div>
        </div>
      ))}
    </div>
  );
}
