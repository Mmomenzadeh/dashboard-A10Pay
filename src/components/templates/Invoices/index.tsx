import React from "react";
import { tradesData } from "../../../../lib/tradesData";
import Invoice from "@/components/modules/invoice";

export default function InvoicesTrade() {
  return (
    <div className=" mt-8">
      {tradesData?.map((item, index) => (
        <>
          <Invoice {...item} key={index} />
        </>
      ))}
    </div>
  );
}
