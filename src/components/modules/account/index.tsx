import React from "react";
import { TbArrowsTransferUp } from "react-icons/tb";

export default function Account() {
  return (
    <div className="hidden xl:flex w-full  items-center justify-between   border-solid border-t border-t-dark-500 py-5">
      <div className="flex items-center gap-x-[14px]">
        <div className="w-10 h-10">
          <img src="/images/account/profile.png" alt="profile" />
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm font-[500] leading-6">
            Frankie Evans
          </span>
          <span className="text-cloud-100 text-xs leading-4 font-[500]">
            Frankie@gmail.com
          </span>
        </div>
      </div>

      <div>
        <TbArrowsTransferUp className="text-white" size={18} />
      </div>
    </div>
  );
}
