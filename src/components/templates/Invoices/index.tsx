import React from "react";
import { tradesData } from "../../../../lib/tradesData";
import Invoice from "@/components/modules/invoice";

export default function InvoicesTrade() {
  return (
    <tbody className="flex flex-col  lg:pt-8 pb-11 ">
      {tradesData?.slice(0, 6)?.map((item, index) => (
        <>
          <Invoice {...item} key={index} />
        </>
      ))}
    </tbody>
  );
}
