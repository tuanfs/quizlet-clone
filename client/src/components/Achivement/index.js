import React from 'react';

export default function Achivement() {
  return (
    <div className='section'>
      <h3 className='font-semibold mb-3 text-[#333848] dark:text-bgColor text-xl'>
        Thành tựu đạt được
      </h3>
      <div className=' flex flex-wrap bg-white dark:bg-[#2e3956] rounded-[10px] shadow-xl py-10 justify-center border-b-[6px] border-transparent hover:border-borderColor'>
        <div>
          <div className='mx-10 bg-[url("https://assets.quizlet.com/a/j/dist/app/i/achievements/week-streak-badge.fd8c50f24ce2a57.svg")] w-[100px] h-[100px] bg-cover flex items-center justify-center'>
            <span>3</span>
          </div>
          <div className='text-center'>
            <h3 className='font-semibold dark:text-[#d5d9e2]'>Chuỗi 3 tuần</h3>
            <p className='dark:text-[#c7ccd9] text-xs'>1 tháng 12, 2021</p>
          </div>
        </div>
        <div>
          <div className='mx-10 bg-[url("https://assets.quizlet.com/a/j/dist/app/i/achievements/week-streak-badge.fd8c50f24ce2a57.svg")] w-[100px] h-[100px] bg-cover flex items-center justify-center'>
            <span>6</span>
          </div>
          <div className='text-center'>
            <h3 className='font-semibold dark:text-[#586480]'>Chuỗi 6 tuần</h3>
            <p className='dark:text-[#c7ccd9] text-xs'>1 tháng 2, 2022</p>
          </div>
        </div>
        <div>
          <div className='mx-10 bg-[url("https://assets.quizlet.com/a/j/dist/app/i/achievements/week-streak-badge-disabled.7dc29ddfd962190.svg")] w-[100px] h-[100px] bg-cover flex items-center justify-center'>
            <span>10</span>
          </div>
          <div className='text-center'>
            <h3 className='font-semibold dark:text-[#586480]'>Chuỗi 10 tuần</h3>
          </div>
        </div>
        <div>
          <div className='mx-10 bg-[url("https://assets.quizlet.com/a/j/dist/app/i/achievements/week-streak-badge-disabled.7dc29ddfd962190.svg")] w-[100px] h-[100px] bg-cover flex items-center justify-center'>
            <span>20</span>
          </div>
          <div className='text-center'>
            <h3 className='font-semibold dark:text-[#586480]'>Chuỗi 20 tuần</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
