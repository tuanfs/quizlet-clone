import React, {useState, useRef, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {BsKeyboard} from 'react-icons/bs'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {IoRepeat} from 'react-icons/io5'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {Mousewheel, Keyboard} from 'swiper'

export default function ContentFlash({
  onSetCurrentIndex,
  currentIndex,
  listItem = [],
  countItem,
  playSlide,
  message,
  randomSlide,
  setMessage
}) {
  const [changeSlide, setChangeSlide] = useState(false)
  const swiperRef = useRef(null)
  const timerInterval = useRef(null)
  const timerTimeOut = useRef(null)
  const timerTimeOut2 = useRef(null)
  const timerTimeOut3 = useRef(null)
  const [listRandom, setListRandom] = useState(listItem)
  const [initialSwiperRef, setInitialSwiperRef] = useState(null)
  const [lastSwiperRef, setLastSwiperRef] = useState(null)

  useEffect(() => {
    if (swiperRef.current) {
      setInitialSwiperRef(swiperRef)
      setLastSwiperRef(swiperRef)
    }
  }, [])

  useEffect(() => {
    if (randomSlide) {
      const newArr = []
      let itemNew = {}

      listItem.forEach(() => {
        let isCondition = []
        if (newArr.length === 0) {
          const itemNew = listItem[Math.floor(Math.random() * listItem.length)]
          newArr.push(itemNew)
        } else {
          do {
            itemNew = listItem[Math.floor(Math.random() * listItem.length)]
            isCondition = newArr.some((item2) => {
              if (item2 && itemNew) {
                return item2.idCardItem === itemNew.idCardItem
              }
              return ''
            })
          } while (isCondition)
          newArr.push(itemNew)
          setListRandom(newArr)
        }
      })
    } else {
      if (listItem) {
        setListRandom(listItem)
      }
    }
  }, [randomSlide, currentIndex, listItem])

  useEffect(() => {
    const handleAutoplay = () => {
      swiperRef.current.swiper.slideNext()
      onSetCurrentIndex((currentIndex) => currentIndex + 1)
      timerTimeOut.current = setTimeout(() => {
        setChangeSlide((changeSlide) => !changeSlide)
      }, 2000)
    }
    if (playSlide) {
      if (currentIndex === 1) {
        timerTimeOut2.current = setTimeout(() => {
          setChangeSlide((changeSlide) => !changeSlide)
        }, 2000)
      }

      timerInterval.current = setInterval(handleAutoplay, 4000)
    } else {
      clearInterval(timerInterval.current)
      clearTimeout(timerTimeOut.current)
      clearTimeout(timerTimeOut2.current)
    }
    return () => {
      clearTimeout(timerTimeOut.current)
      clearInterval(timerInterval.current)
    }
  }, [playSlide, onSetCurrentIndex, currentIndex])
  useEffect(() => {
    if (!playSlide) {
      if (currentIndex === countItem) {
        timerTimeOut3.current = setTimeout(() => setMessage(true), 4000)
        // setMessage(true);
      }
    }

    return () => clearTimeout(timerTimeOut3.current)
  }, [currentIndex, countItem, playSlide, setMessage])

  const handleReturnPlay = () => {
    onSetCurrentIndex(1)
    setMessage(false)
    setLastSwiperRef(initialSwiperRef)
    setListRandom(listItem)
    swiperRef.current.swiper.activeIndex = currentIndex - 1

    // onPlaySlide(true);
  }
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.activeIndex = currentIndex - 1
    }
  }, [currentIndex])

  useEffect(() => {
    if (currentIndex === 1) swiperRef.current.swiper.slideTo(0, 0)
  }, [currentIndex])

  return (
    <div className='py-10 h-full relative'>
      <div className={`${message && 'hidden'} h-full`}>
        <Swiper
          cssMode={true}
          ref={swiperRef}
          mousewheel={true}
          initialSlide={currentIndex - 1}
          modules={[Mousewheel, Keyboard]}
          className='mySwiper h-[500px]'
        >
          {listItem.map((item, index) => {
            return (
              <SwiperSlide key={index} className='h-full'>
                <div
                  className='h-full flex cursor-pointer'
                  onClick={() => {
                    setChangeSlide(!changeSlide)
                  }}
                >
                  <div className='relative h-full w-[95%] m-auto'>
                    <div
                      className={`transition-all duration-[0.6s] ease-linear absolute flex bg-white dark:bg-bgElement items-center justify-center dark:text-bgColor text-black  w-full h-full`}
                    >
                      {item.term}
                    </div>
                    <div
                      className={`transition-all duration-[0.6s] ease-linear absolute flex bg-white dark:bg-bgElement dark:text-bgColor items-center justify-center ${
                        changeSlide
                          ? 'slide2 opacity-0 slide2 translate-y-[5%] scale-[1.1] z-[5]'
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
        <div className='flex z-[20] w-full absolute mt-5 left-[50%] translate-x-[-50%]'>
          <div className='flex absolute z-[20] left-[50%] translate-x-[-50%]'>
            <button
              disabled={currentIndex === 1}
              id='previousButton'
              className='rounded-full bg-white h-[30px] w-[30px] text-[#3dcfcf] flex items-center justify-center hover:bg-[#fecd20] disabled:hover:bg-white disabled:hover:text-[#3dcfcf] disabled:hover:cursor-default hover:text-[#303545] disabled:opacity-30 mr-[100px] cursor-pointer text-2xl'
              onClick={() => {
                swiperRef.current.swiper.slidePrev()
                swiperRef.current.swiper.activeIndex = currentIndex
                onSetCurrentIndex(currentIndex - 1)
              }}
            >
              <MdChevronLeft />
            </button>
            <button
              disabled={currentIndex === countItem}
              id='nextButton'
              className='rounded-full bg-white h-[30px] w-[30px] text-[#3dcfcf] flex items-center justify-center hover:bg-[#fecd20] hover:text-[#303545] disabled:hover:bg-white disabled:hover:text-[#3dcfcf] disabled:hover:cursor-default disabled:opacity-30 cursor-pointer text-2xl'
              onClick={() => {
                swiperRef.current.swiper.slideNext()
                swiperRef.current.swiper.activeIndex = currentIndex
                onSetCurrentIndex(currentIndex + 1)
              }}
            >
              <MdChevronRight />
            </button>
          </div>
          <div className='flex w-full relative items-center justify-end'>
            <button
              onClick={() => setChangeSlide(!changeSlide)}
              className='relative h-[30px] w-[30px] bg-white hover:bg-textHover group flex items-center justify-center rounded-full cursor-pointer mr-5'
            >
              <IoRepeat />
              <div className='absolute group-hover:block hidden bg-[#4257b2] dark:bg-bgElement after:content-[""] after:absolute after:top-[-16px] after:right-[90px] after:border-[8px] after:border-[#4257b2] dark:after:border-bgElement after:border-l-transparent after:border-r-transparent after:border-t-transparent dark:after:border-l-transparent dark:after:border-r-transparent dark:after:border-t-transparent top-[90%] right-[-84px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
                <span>Đảo mặt trước và sau của thẻ</span>
              </div>
            </button>
            <button className='relative h-[30px] w-[30px] bg-white hover:bg-textHover group flex items-center justify-center rounded-full cursor-pointer mr-5'>
              <BsKeyboard />
              {/* <div className='absolute group-hover:block hidden bg-[#4257b2] after:content-[""] after:absolute after:top-[-20px] after:right-[58px] after:border-[10px] after:border-[#4257b2] after:border-l-transparent after:border-r-transparent after:border-t-transparent after:border-[] top-full right-[-60px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
                    <span>Phím tắt bàn phím</span>
                  </div> */}
            </button>
          </div>
        </div>
      </div>

      <div className='h-full flex'>
        {message && (
          <div className='w-[400px] m-auto text-center'>
            <div>
              <h3 className='text-[38px] mb-4 text-[#303545] font-semibold'>
                Làm tốt lắm!
              </h3>
            </div>
            <button
              onClick={handleReturnPlay}
              className='bg-[#3dcfcf] hover:bg-[#28a7a7] w-full py-4 rounded-[6px] text-white font-semibold text-lg'
            >
              Bắt đầu lại
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
