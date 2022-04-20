import React from 'react';
import { Link } from 'react-router-dom';
import { BiLock } from 'react-icons/bi';

export default function Questions() {
  return (
    <div>
      <div className='mb-5'>
        <h3 className='text-2xl text-[#303545] font-bold dark:text-bgColor'>
          Recently answered Question
        </h3>
      </div>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-12 md:col-span-4'>
          <Link
            to='/'
            className='bg-white dark:bg-[#2e3956] p-5 pb-4 border-b-[4px] block border-transparent hover:border-borderColor rounded-[5px] shadow-lg'
          >
            <div className='flex items-center mb-4'>
              <h3 className='text-xs text-[#646f90] dark:text-[#8892aa] font-medium mr-2'>
                DIRERENTIAL EQUATIONS
              </h3>
              <span className=' w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#ffcd20]'>
                <BiLock />
              </span>
            </div>
            <div>
              <p className='text-[#393e4c] dark:text-bgColor text-sm font-light line-clamp-3'>
                Evaluate the given laplace transform without evaluating the
                intergal. Evaluate the given laplace transform without
                evaluating the intergal.
              </p>
            </div>
          </Link>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <Link
            to='/'
            className='bg-white dark:bg-[#2e3956] p-5 pb-4 border-b-[4px] block border-transparent hover:border-borderColor rounded-[5px] shadow-lg'
          >
            <div className='flex items-center mb-4'>
              <h3 className='text-xs text-[#646f90] dark:text-[#8892aa] font-medium mr-2'>
                DIRERENTIAL EQUATIONS
              </h3>
              <span className=' w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#ffcd20]'>
                <BiLock />
              </span>
            </div>
            <div>
              <p className='text-[#393e4c] dark:text-bgColor text-sm font-light line-clamp-3'>
                Evaluate the given laplace transform without evaluating the
                intergal. Evaluate the given laplace transform without
                evaluating the intergal.
              </p>
            </div>
          </Link>
        </div>
        <div className='col-span-12 md:col-span-4'>
          <Link
            to='/'
            className='bg-white dark:bg-[#2e3956] p-5 pb-4 border-b-[4px] block border-transparent hover:border-borderColor rounded-[5px] shadow-lg'
          >
            <div className='flex items-center mb-4'>
              <h3 className='text-xs text-[#646f90] dark:text-[#8892aa] font-medium mr-2'>
                DIRERENTIAL EQUATIONS
              </h3>
              <span className=' w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#ffcd20]'>
                <BiLock />
              </span>
            </div>
            <div>
              <p className='text-[#393e4c] dark:text-bgColor text-sm font-light line-clamp-3'>
                Evaluate the given laplace transform without evaluating the
                intergal. Evaluate the given laplace transform without
                evaluating the intergal.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
