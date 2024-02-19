import React from "react";
import { InvoiceProps } from "../../../../lib/interface";
import Button from "../button";
import { IoIosArrowForward } from "react-icons/io";

export default function Invoice({
  id,
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
      <tr
        key={id}
        className="flex  items-center justify-between sm:gap-x-8 text-white py-3 px-3 xl:py-[14px]  xl:px-8 child:text-[8px] child:lg:text-xs child:2xl:text-base"
      >
        <td className="text-cyan">{currencyName}</td>
        <td className="hidden sm:inline-block">{exchange}</td>
        <td className="hidden sm:inline-block">{type}</td>
        <td>{amount}</td>
        <td className="hidden sm:inline-block">{network}</td>
        <td>{date}</td>
        <td>
          <Button
            className={`py-1 px-2 rounded-lg ${
              (status === "Received" && "received") ||
              (status === "Pending" && "pending") ||
              (status === "Canceled" && "canceled")
            }`}
          >
            {status}
          </Button>
        </td>
        <td className="hidden sm:inline-block">
          <IoIosArrowForward />
        </td>
      </tr>
    </>
  );
}
