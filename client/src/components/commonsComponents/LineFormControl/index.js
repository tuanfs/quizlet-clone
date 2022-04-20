import React from "react";
import { twMerge } from "tailwind-merge";

export default function LineFormControl(props) {
  const className = twMerge(
    "absolute border-b-[2px] border-t-[2px] w-full bottom-0 border-[#303545] border-b-transparent group-focus-within:border-textHover",
    props.className
  );
  return <div {...props} className={className}></div>;
}
