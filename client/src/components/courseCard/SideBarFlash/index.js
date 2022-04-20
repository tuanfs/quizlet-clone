import React, {useEffect, useRef} from 'react'
import {BiChevronLeft} from 'react-icons/bi'
import {IoPlay, IoOptions} from 'react-icons/io5'
import {MdShuffle} from 'react-icons/md'
import {BsFiles} from 'react-icons/bs'
import {useNavigate, useParams} from 'react-router-dom'

export default function SideBarFlash({
  countItem,
  currentIndex,
  onPlaySlide,
  playSlide,
  setMessage,
  onSetCurrentIndex,
  setRandomSlide,
  randomSlide,
  folderPage = false
}) {
  const navigate = useNavigate()
  const {id} = useParams()
  const currentRef = useRef(null)
  const percentRef = useRef(null)
  const timer = useRef(null)

  useEffect(() => {
    if (currentRef.current && percentRef.current) {
      const currentPercent = Math.ceil(
        (100 / countItem) * currentIndex
      ).toString()

      currentRef.current.style.width = `${currentPercent}%`
      percentRef.current.style.width = `${(100 - currentPercent).toString()}%`
    }
  }, [currentIndex, countItem])

  useEffect(() => {
    if (currentIndex >= countItem) {
      timer.current = setTimeout(() => {
        onPlaySlide(() => false)
      }, 2000)
    }
    return () => clearTimeout(timer.current)
  }, [currentIndex, countItem, onPlaySlide])

  const handleBackPage = async () => {
    if (currentIndex >= countItem) {
      await onSetCurrentIndex(1)
    }
    onPlaySlide(false)
    setMessage(false)
    if (folderPage) {
      navigate(`/folder/${id}`)
    } else {
      navigate(`/course-detail/${id}`)
    }
  }

  return (
    <div className='w-full shadow-lg'>
      <div className='flex flex-col h-[93vh] justify-between p-5'>
        <div
          className='flex items-center cursor-pointer group'
          onClick={handleBackPage}
        >
          <span className='text-[#3dcfcf] group-hover:text-textHover mr-4 text-xl'>
            <BiChevronLeft />
          </span>
          <span className='text-[#303545] dark:text-bgColor text-sm font-medium'>
            Trở về
          </span>
        </div>
        <div>
          <div className='flex items-center'>
            <span className='text-[#4257b2] text-xl mr-4'>
              <BsFiles />
            </span>
            <span className='text-[#303545] dark:text-bgColor text-base font-medium'>
              Thẻ ghi nhớ
            </span>
          </div>
          <div>
            <div className='w-full h-[12px] relative flex mt-8 mb-1'>
              <div
                ref={currentRef}
                className={`block left-0 right-auto absolute h-full bg-[#4257b2]`}
              ></div>

              <div
                ref={percentRef}
                className={`block h-full right-0 left-auto absolute bg-[#c4cae6]`}
              ></div>
            </div>
            <div className='flex uppercase items-center justify-between text-[#303535] dark:text-bgColor text-sm font-normal'>
              <span>Tiến độ</span>
              <span className=''>
                {currentIndex}/{countItem}
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setMessage(false)
              onPlaySlide(!playSlide)
              if (currentIndex >= countItem) {
                onSetCurrentIndex(1)
              }
            }}
            // disabled={playSlide}
            className={`${
              playSlide
                ? 'bg-textHover hover:text-[#303545] border-textHover text-[#303545]'
                : 'hover:text-textHover text-[#3dcfcf] disabled:hover:text-[#3dcfcf]'
            } flex bg-white  items-center w-full  border-[2px] disabled:hover:text-[#3dcfcf] border-[#d9dde8] text-sm font-semibold justify-center p-2 rounded-[4px]`}
          >
            <span className='mr-2'>
              <IoPlay />
            </span>
            <span>Bắt đầu</span>
          </button>
          <button
            onClick={() => {
              onSetCurrentIndex(1)
              setMessage(false)
              setRandomSlide(!randomSlide)
            }}
            className={`flex my-4 items-center w-full  border-[2px] 
             text-sm font-semibold justify-center p-2 rounded-[4px] ${
               randomSlide
                 ? 'bg-textHover border-textHover text-[#303545]'
                 : 'bg-white hover:text-textHover border-[#d9dde8] text-[#3dcfcf]'
             }`}
          >
            <span className='mr-2'>
              <MdShuffle />
            </span>
            <span>Trộn thẻ</span>
          </button>
          <button className='flex bg-white hover:text-textHover items-center w-full text-[#3dcfcf] border-[2px] border-[#d9dde8] text-sm font-semibold justify-center p-2 rounded-[4px]'>
            <span className='mr-2'>
              <IoOptions />
            </span>
            <span>Tùy chọn</span>
          </button>
        </div>
      </div>
    </div>
  )
}
