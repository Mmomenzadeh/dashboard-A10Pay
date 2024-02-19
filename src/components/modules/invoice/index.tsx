import React from "react";
import { InvoiceProps } from "../../../../lib/interface";
import Button from "../button";
import { IoIosArrowForward } from "react-icons/io";

export default function Invoice({
  currencyName,
  exchange,
  type,
  amount,
  network,
  date,
  status,
  details,
}: InvoiceProps) {
  return (
    <>
      <div className="flex  items-center gap-x-8 text-white py-[14px] px-8">
        <span className="text-cyan">{currencyName}</span>
        <span>{exchange}</span>
        <span>{type}</span>
        <span>{amount}</span>
        <span>{network}</span>
        <span>{date}</span>
        <Button
          className={`py-1 px-2 rounded-lg ${
            (status === "Received" && "received") ||
            (status === "Pending" && "pending") ||
            (status === "Canceled" && "canceled")
          }`}
        >
          {status}
        </Button>
        <div>
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}
