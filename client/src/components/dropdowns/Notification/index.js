import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

export default function Nodification(props) {
  const { onNotify, onCloseDropdown } = props;
  return (
    <div className={`${onNotify ? 'block' : 'hidden'}`}>
      <div className='sm:w-[480px] fixed top-0 sm:top-dropdown bottom-0 right-0 sm:right-[15px] sm:h-[420px] z-[2] sm:absolute bg-white dark:bg-[#13141b] sm:rounded-[10px] shadow-lg'>
        <div
          className='flex items-end sm:hidden justify-end p-4 cursor-pointer'
          onClick={() => onCloseDropdown(false)}
        >
          <AiOutlineClose className='text-lg inline-block' />
        </div>
        <ul className='sm:mt-4'>
          <li className='px-3 sm:py-2 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link to='/' className='flex items-center'>
              <div className='min-h-[50px] max-h-[50px] mr-4 bg-black min-w-[50px] max-w-[50px] overflow-hidden rounded-full'>
                <img
                  className='h-full w-full'
                  src={
                    'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  }
                  alt='Nodification'
                />
              </div>
              <div>
                <p className='text-sm text-[#949494] dark:text-white'>
                  Bạn có thể thành thạo List 1 ở chế độ học?
                  <span className='text-primary mx-1 dark:text-[#949ca9]'>
                    cùng tìm hiểu nào
                  </span>
                  <span>hôm qua</span>
                </p>
              </div>
              <div className='h-[70px] w-[70px] rounded-100 flex justify-center items-center'>
                <i className='text-2xl fa-solid fa-ellipsis'></i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
