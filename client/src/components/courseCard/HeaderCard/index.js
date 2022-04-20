import React, {useRef, useState} from 'react'
import Sidebar from '../Sidebar'
import {Swiper, SwiperSlide} from 'swiper/react'
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsKeyboard,
  BsArrowsFullscreen
} from 'react-icons/bs'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Navigation} from 'swiper'

export default function HeaderCard({itemCourse = {}}) {
  const [changeSlide, setChangeSlide] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const swiperRef = useRef(null)
  return (
    <div>
      <div className='my-5 lg:my-10'>
        <h3 className='text-[30px] text-[#303545] font-bold dark:text-bgColor'>
          {Object.keys(itemCourse).length > 0 && itemCourse.name}
        </h3>
      </div>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-start-1 col-end-13 lg:col-start-1 lg:col-end-3 order-2 lg:order-1'>
          <Sidebar />
        </div>
        <div className='col-start-1 relative col-end-13 md:col-end-10 lg:col-start-3 lg:col-end-10 order-1 lg:order-2'>
          <Swiper
            ref={swiperRef}
            cssMode={true}
            modules={[Navigation]}
            className='mySwiper w-full h-[440px]'
          >
            {Object.keys(itemCourse).length > 0 &&
              itemCourse.card.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className='h-full w-full flex cursor-pointer'
                      onClick={() => {
                        setChangeSlide(!changeSlide)
                      }}
                    >
                      <div className='relative h-[400px] xl:w-[580px] max-w-[90%] w-[500px] m-auto'>
                        <div
                          className={`transition-all duration-[0.6s] ease-linear absolute rounded-[36px] flex items-center justify-center text-black bg-white dark:text-bgColor dark:bg-[#2e3956] shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] w-full h-full`}
                        >
                          {item.term}
                        </div>
                        <div
                          className={`absolute transition-all duration-[0.6s] ease-linear rounded-[36px] flex items-center justify-center  bg-white dark:bg-[#2e3956] dark:text-bgColor shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] ${
                            changeSlide
                              ? 'opacity-0 slide2 translate-y-[5%] scale-[1.1] z-[5]'
                              : 'slide21'
                          } text-black w-full h-full`}
                        >
                          {item.defination}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
          <div className='flex z-[10] w-full absolute bottom-[-10px] left-[50%] translate-x-[-50%]'>
            <div className='flex items-center absolute z-[10] left-[50%] translate-x-[-50%]'>
              <button
                disabled={activeIndex === 1}
                id='previousButton'
                className='hover:text-[#fecd20] dark:disabled:opacity-30 disabled:opacity-30 dark:text-bgColor dark:hover:text-textHover disabled:hover:text-[#330545] text-[#330545] mr-[100px] cursor-pointer text-4xl'
                onClick={() => {
                  swiperRef.current.swiper.slidePrev()
                  setActiveIndex(activeIndex - 1)
                }}
              >
                <BsArrowLeftShort />
              </button>
              <div className='text-[#303545] dark:text-bgColor absolute right-[40%] text-base font-semibold '>
                <span>{activeIndex}/</span>
                <span>
                  {Object.keys(itemCourse).length > 0 && itemCourse.total}
                </span>
              </div>
              <button
                disabled={
                  Object.keys(itemCourse).length > 0 &&
                  activeIndex === itemCourse.total
                }
                id='nextButton'
                className='hover:text-[#fecd20] dark:disabled:opacity-30 disabled:hover:text-[#303545] dark:text-[#c3c7d5] dark:hover:text-textHover text-[#303545] disabled:opacity-30 cursor-pointer text-4xl'
                onClick={() => {
                  swiperRef.current.swiper.slideNext()
                  setActiveIndex(activeIndex + 1)
                }}
              >
                <BsArrowRightShort />
              </button>
            </div>
            <div className='flex w-full relative items-center justify-end'>
              <div className='dark:text-bgColor relative group flex text-xl cursor-pointer mr-5'>
                <BsKeyboard />
                {/* <div className='absolute group-hover:block hidden bg-[#4257b2] after:content-[""] after:absolute after:top-[-20px] after:right-[58px] after:border-[10px] after:border-[#4257b2] after:border-l-transparent after:border-r-transparent after:border-t-transparent after:border-[] top-full right-[-60px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
                    <span>Phím tắt bàn phím</span>
                  </div> */}
              </div>
              <div className='dark:text-bgColor group flex text-xl cursor-pointer'>
                <BsArrowsFullscreen />
                {/* <div className='absolute group-hover:block hidden bg-[#4257b2] after:content-[""] after:absolute after:top-[-20px] after:right-[51px] after:border-[10px] after:border-[#4257b2] after:border-l-transparent after:border-r-transparent after:border-t-transparent after:border-[] top-full right-[-52px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
                    <span>Toàn màn hình</span>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
