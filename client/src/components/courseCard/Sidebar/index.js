import React from 'react';
import { IoMdAlbums } from 'react-icons/io';
import { BsFillPencilFill, BsUiChecks } from 'react-icons/bs';
import { GiCardExchange } from 'react-icons/gi';
import { HiVolumeUp } from 'react-icons/hi';
import { RiDonutChartFill } from 'react-icons/ri';
import { IoPlanetSharp } from 'react-icons/io5';
import { useParams, Link } from 'react-router-dom';

export default function CourseCardDetail() {
  const { id } = useParams();
  return (
    <div className='flex lg:block mb-10 lg:mb-0'>
      <div>
        <h3 className='text-[#979eb7] text-base py-1 px-2 font-normal dark:text-bgColor'>
          Học
        </h3>
        <ul className='flex flex-col'>
          <li>
            <Link
              className=' items-center group w-full cursor-pointer inline-flex py-2 hover:bg-[#fecd20] px-2 pr-5 rounded-[4px] '
              to={`/flash-card/${id}`}
            >
              <span className='mr-2'>
                <IoMdAlbums className='text-[#4257b2] text-xl' />
              </span>
              <span className='text-base dark:group-hover:text-bgDark text-[#303545] dark:text-bgColor font-medium'>
                Thẻ ghi nhớ
              </span>
            </Link>
          </li>
          <li>
            <Link
              className=' items-center w-full group cursor-pointer w-full inline-flex py-2 hover:bg-[#fecd20] px-2 pr-5 rounded-[4px] '
              to={`/learn/${id}`}
            >
              <span className='mr-2'>
                <RiDonutChartFill className='text-[#4257b2] text-xl' />
              </span>
              <span className='text-base dark:group-hover:text-bgDark text-[#303545] dark:text-bgColor font-medium'>
                Học
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`/write/${id}`}
              className=' items-center group w-full cursor-pointer inline-flex py-2 hover:bg-[#fecd20] px-2 pr-5 rounded-[4px] '
            >
              <span className='mr-2'>
                <BsFillPencilFill className='text-[#4257b2] text-xl' />
              </span>
              <span className='text-base dark:group-hover:text-bgDark text-[#303545] dark:text-bgColor font-medium'>
                Viết
              </span>
            </Link>
          </li>
          <li className=' items-center w-full group cursor-pointer inline-flex py-2 hover:bg-[#fecd20] px-2 pr-5 rounded-[4px] '>
            <span className='mr-2'>
              <HiVolumeUp className='text-[#4257b2] text-xl' />
            </span>
            <span className='text-base text-[#303545] dark:group-hover:text-bgDark dark:text-bgColor font-medium'>
              Chính tả
            </span>
          </li>
          <li className='items-center w-full group cursor-pointer inline-flex py-2 hover:bg-[#fecd20] px-2 pr-5 rounded-[4px] '>
            <span className='mr-2'>
              <BsUiChecks className='text-[#4257b2] text-xl' />
            </span>
            <span className='text-base text-[#303545] dark:group-hover:text-bgDark dark:text-bgColor font-medium'>
              Kiểm tra
            </span>
          </li>
        </ul>
      </div>
      <div className='lg:mt-5 ml-10 lg:ml-0'>
        <h3 className='text-[#979eb7] text-base py-1 dark:text-bgColor px-2 font-normal'>
          Trò chơi
        </h3>
        <ul className='flex flex-col'>
          <li className=' items-center w-full group cursor-pointer inline-flex py-2 hover:bg-[#fecd20] px-2 pr-5 rounded-[4px] '>
            <span className='mr-2'>
              <GiCardExchange className='text-[#4257b2] text-xl' />
            </span>
            <span className='text-base dark:text-bgColor dark:group-hover:text-bgDark text-[#303545] font-medium'>
              Ghép thẻ
            </span>
          </li>
          <li className=' items-center w-full group cursor-pointer inline-flex py-2 hover:bg-[#fecd20] px-2 pr-5 rounded-[4px] '>
            <span className='mr-2'>
              <IoPlanetSharp className='text-[#4257b2] text-xl' />
            </span>
            <span className='text-base text-[#303545] dark:group-hover:text-bgDark dark:text-bgColor font-medium'>
              Thiên thạch
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
