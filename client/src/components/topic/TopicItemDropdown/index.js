import React from "react";
import { Link } from "react-router-dom";

export default function index(props) {
  const { listItem = [] } = props;
  return (
    <div>
      <ul className='w-full h-full '>
        {listItem.map((item, index) => (
          <li
            key={index}
            className='text-[#586380] hover:text-[#2e3856] p-6 border-b-[1px] border-[#eceff4] text-sm font-semibold'
          >
            <Link to='/'>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
