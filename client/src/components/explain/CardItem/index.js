import React from 'react';
import { BiLock } from 'react-icons/bi';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function CardItem({ item }) {
  return (
    <>
      {item && (
        <div className='dark:bg-[#2e3956] md:col-span-6 col-span-12 p-5 pb-4 shadow-lg overflow-hidden border-b-[4px] border-transparent hover:border-borderColor rounded-[10px] bg-white'>
          <Link to='/' className='flex'>
            <div className='relative mr-5'>
              <div className='h-[130px] w-[95px] overflow-hidden rounded-[4px]'>
                <img
                  className='h-full w-full'
                  src={item.url}
                  alt='Popular Textbooks'
                />
              </div>
              <span className='absolute top-[-8px] left-[-8px] w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#ffcd20]'>
                <BiLock />
              </span>
            </div>
            <div className='dark:text-[#babfcd] text-[#5c6683] flex flex-col justify-between'>
              <div>
                <h3 className='text-xl text-[#2e3856] dark:text-[#e3e4eb] whitespace-normal text-ellipsis overflow-hidden line-clamp-2 font-semibold'>
                  {item.title}
                </h3>
                <p className='text-xs my-2 font-medium'>7th Edition</p>
                <p className='text-xs my-2 font-medium'>Kenneth Rosen</p>
              </div>
              <div>
                <div className='bg-[#edefff] px-2 py-1 inline-flex w-auto rounded-[10px]'>
                  <span>
                    <BsFillPatchCheckFill />
                  </span>
                  <p className='text-[#2e3856] ml-2 text-xs font-medium'>
                    4.285 lời giải
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
