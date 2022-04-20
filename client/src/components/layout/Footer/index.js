import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='pb-24 pt-28 min-w-[375px] dark:bg-bgDark dark:border-t-[1px] dark:border-[#282e3e]'>
      <div className='max-w-[80%] mx-auto '>
        <div className='flex mb-10 flex-wrap'>
          <div className='mb-8 md:mb-0 md:basis-1/5 basis-1/2 max-w-[50%] md:max-w-[20%]'>
            <h3 className='font-semibold mb-3 text-textPrimary dark:text-bgColor text-base'>
              Chủ đề
            </h3>
            <ul className='text-[#626671] dark:text-bgColor'>
              <li className=' cursor-pointer py-2 text-xs font-normal'>
                Khoa học
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Khoa học xã hội
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>Khác</li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Nghệ thuật và nhân
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Ngôn ngữ
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Toán học
              </li>
            </ul>
          </div>
          <div className='mb-8 md:mb-0 md:basis-1/5 basis-1/2 max-w-[50%] md:max-w-[20%]'>
            <h3 className='font-semibold mb-3 text-textPrimary text-base dark:text-bgColor'>
              Tính năng
            </h3>
            <ul className='dark:text-bgColor text-[#626671]'>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Quizlet Live
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Cột mốc Quizlet
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Chế độ học
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Giải thích
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Thẻ ghi nhớ
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Ứng dụng
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Nâng cấp
              </li>
            </ul>
          </div>
          <div className='mb-8 md:mb-0 md:basis-1/5 basis-1/2 max-w-[50%] md:max-w-[20%]'>
            <h3 className='font-semibold mb-3 text-textPrimary text-base dark:text-bgColor'>
              Hỗ trợ
            </h3>
            <ul className='dark:text-bgColor text-[#626671]'>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Trung tâm hỗ trợ
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Quy tắc danh dự
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Nguyên tắc cộng đồng
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Giáo viên
              </li>
            </ul>
          </div>
          <div className='mb-8 md:mb-0 md:basis-1/5 basis-1/2 max-w-[50%] md:max-w-[20%]'>
            <h3 className='font-semibold mb-3 text-textPrimary text-base dark:text-bgColor'>
              Giới thiệu
            </h3>
            <ul className='text-[#626671] dark:text-bgColor'>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Công ty
              </li>
              <li className=' cursor-pointer py-2 text-xs font-normal'>Blog</li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Báo chí
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Tuyển dụng
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Quyền riêng tư
              </li>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Chính sách quảng cáo và cookie
              </li>
            </ul>
          </div>
          <div className='mb-8 md:mb-0 md:basis-1/5 basis-1/2 max-w-[50%] md:max-w-[20%]'>
            <h3 className='font-semibold mb-3 text-textPrimary text-base dark:text-bgColor'>
              Ngôn ngữ
            </h3>
            <ul className='text-[#626671] dark:text-bgColor'>
              <li className='cursor-pointer py-2 text-xs font-normal'>
                Tiếng Việt
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className='flex justify-center'>
            <Link
              to='/'
              className='flex items-center hover:bg-[#edeff4] dark:hover:bg-[#2e3956] dark:bg-transparent dark:text-bgColor mr-6 justify-center w-[50px] h-[50px] rounded-full bg-white'
            >
              <i className='fa-brands fa-twitter text-xl'></i>
            </Link>
            <Link
              to='/'
              className='flex items-center hover:bg-[#edeff4] dark:hover:bg-[#2e3956] dark:bg-transparent dark:text-bgColor mr-6 justify-center w-[50px] h-[50px] rounded-full bg-white'
            >
              <i className='fa-brands fa-facebook-f text-xl'></i>
            </Link>
            <Link
              to='/'
              className='flex items-center hover:bg-[#edeff4] dark:hover:bg-[#2e3956] dark:bg-transparent dark:text-bgColor mr-6 justify-center w-[50px] h-[50px] rounded-full bg-white'
            >
              <i className='text-xl fa-brands fa-instagram'></i>
            </Link>
            <Link
              to='/'
              className='flex items-center hover:bg-[#edeff4] dark:hover:bg-[#2e3956] dark:bg-transparent dark:text-bgColor mr-6 justify-center w-[50px] h-[50px] rounded-full bg-white'
            >
              <i className='text-xl fa-brands fa-youtube'></i>
            </Link>
          </div>
          <h3 className='w-full text-center mt-6 dark:text-bgColor'>
            © 2022 Quizlet Inc.
          </h3>
        </div>
        <div></div>
      </div>
    </div>
  );
}
