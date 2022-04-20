import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button(props) {
  const className = twMerge(
    "text-white bg-[#3ecfcf] text-center hover:bg-[#29a7a7] text-base font-bold py-2 px-4 inline-block rounded-[6px]",
    props.className
  );
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}
