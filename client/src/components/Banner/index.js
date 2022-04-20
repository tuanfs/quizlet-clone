import React from 'react';

export default function Banner() {
  return (
    <div className='pt-10'>
      <div className='h-[100px]'>
        <div className='hidden h-full md:block'>
          <div className='h-full flex justify-between w-full bg-cover relative rounded-[10px] bg-[#ffe663] dark:bg-[#303545]'>
            <div className='min-w-[60%]'>
              <div className='font-bold absolute top-[-12px] left-[-10px] bg-colorPrimary text-white text-sm px-2 py-1 rounded-[20px]'>
                <span>Quizlet </span>
                <span className='text-[#fecd1f]'>Plus</span>
              </div>
              <div className='absolute h-full flex items-center ml-6 dark:text-[#eceff4]'>
                <div>
                  <h3 className='font-bold text-lg'>
                    Tìm lời giải đã kiểm chứng từ chuyên gia
                  </h3>
                  <p className='font-light hidden lg:inline-block text-base'>
                    Lời giải từng bước trên Quizlet
                  </p>
                </div>
              </div>
            </div>
            <div className='min-w-[40%] relative overflow-hidden flex'>
              <div className="bg-[url('https://assets.quizlet.com/a/j/dist/app/i/homepage/banner-girl@2x.209043e467ddcb2.png')] hidden sm:block z-[2] rounded-tl-full bg-[center] rounded-br-full absolute my-auto bg-cover w-[80%] h-full"></div>
              <div className='bg-[#ffe663] dark:bg-[#303545] group hover:bg-colorPrimary flex justify-center items-center lg:w-[240px] md:w-[170px] w-full rounded-[10px] rounded-br-[10px] right-0 h-full absolute '>
                <div className='text-white cursor-pointer group-hover:bg-[#0b1576] bg-colorPrimary absolute right-[5%] flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                  <i className='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='rounded-[10px] md:hidden cursor-pointer bg-[#ffe663] group relative px-4 flex items-center h-[100px] w-[100%]'>
          <div className='bg-colorPrimary order-2 absolute z-[2] right-[5%] w-[40px] cursor-pointer group-hover:bg-[#333] h-[40px] flex items-center justify-center text-white rounded-full'>
            <i className='fa-solid fa-angle-right'></i>
          </div>
          <h3 className='font-bold text-lg order-1 w-full group-hover:bg-colorPrimary group-hover:text-white px-2 right-0 left-0 rounded-[10px] h-full flex items-center mr-6 absolute '>
            Tìm lời giải đã kiểm chứng từ chuyên gia
          </h3>
        </div>
      </div>
    </div>
  );
}
