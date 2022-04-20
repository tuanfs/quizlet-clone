import React from 'react'
import {BsThreeDots} from 'react-icons/bs'

export default function CourseItem() {
  return (
    <div className='bg-white p-4 rouded-[6px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] my-5 flex justify-between items-center'>
      <div>
        <div className='flex items-center'>
          <div className='px-4 relative py-1'>
            <h4 className='text-sm text-textColor font-semibold'>
              21 Thuật ngữ
            </h4>
            <span className='absolute block h-5 top-1/2 -translate-y-1/2 right-0 w-[2px] bg-gray-100'></span>
          </div>
          <div className='flex relative px-4 items-center'>
            <div className='rounded-full mr-2 h-[30px] w-[30px] bg-contain bg-[url("https://up.quizlet.com/3oi34w-sj2Sh-96s.jpg")]'></div>
            <h4 className='text-[#3ccfcf] cursor-pointer hover:text-textHover font-bold text-xs'>
              Lê Văn Tuấn
            </h4>
            <span className='absolute block h-5 top-1/2 -translate-y-1/2 right-0 w-[2px] bg-gray-100'></span>
          </div>
          <div className='px-4'>
            <h4 className='text-sm font-semibold text-[#929cb4]'>
              Le Van Tuan
            </h4>
          </div>
        </div>
        <div>
          <h4 className='text-base font-bold hover:text-textHover cursor-pointer px-3 text-textColor'>
            Course 4
          </h4>
        </div>
      </div>
      <div>
        <span className='text-2xl'>
          <BsThreeDots />
        </span>
      </div>
    </div>
  )
}
