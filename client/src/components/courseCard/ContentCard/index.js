import React, {useState, useRef, useEffect} from 'react'
import {BsThreeDots, BsFillPenFill} from 'react-icons/bs'
import {BiShare} from 'react-icons/bi'
import {
  AiOutlinePlus,
  AiOutlineInfo,
  AiOutlinePrinter,
  AiOutlineClose,
  AiOutlineStar
} from 'react-icons/ai'
import {BiLock, BiChevronDown} from 'react-icons/bi'
import {IoTrashOutline, IoGitCompareOutline} from 'react-icons/io5'
import {MdCode, MdSaveAlt, MdOutlineFilterNone} from 'react-icons/md'
import ListTerm from '../ListTerm'

export default function ContentCard({itemCourse}) {
  const [showDropDownFilter, setShowDropdownFilter] = useState(false)
  const [selectAll, setSelectAll] = useState(false)
  const [itemSelect, setItemSelect] = useState(false)
  const [quantitySelect, setQuantitySelect] = useState(0)
  return (
    <>
      <div className='grid grid-cols-12 mt-5'>
        <div className='col-start-1 md:col-end-6 col-end-6'>
          <div className='flex'>
            <div className="rounded-full mr-2 bg-cover bg-[url('https://up.quizlet.com/3oi34w-sj2Sh-96s.jpg')] w-[60px] h-[60px]"></div>
            <div>
              <span className='text-[#b7b7b8] text-xs font-normal'>
                Tạo bởi
              </span>
              <h3 className='font-semibold cursor-pointer hover:text-[#fecd20] text-base text-[#303545] dark:text-bgColor'>
                {itemCourse && itemCourse.user.fullName}
              </h3>
            </div>
          </div>
          <div>
            <h3 className='text-[#303545] mt-2 font-semibold text-base dark:text-bgColor'>
              Đã thêm vào học phần
            </h3>
          </div>
        </div>
        <div className='md:col-start-6 md:col-end-10 col-start-6 col-end-13 flex items-center justify-end'>
          <div className='w-[36px] mr-2 group relative cursor-pointer h-[36px] text-xl hover:text-textHover rounded-full bg-white dark:bg-[#13141b] dark:text-white flex items-center justify-center'>
            <AiOutlinePlus />
            <div className='absolute group-hover:block hidden bg-[#4257b2] dark:bg-[#2e3956] after:content-[""] after:absolute after:top-[-20px] after:right-[84px] after:border-[10px] after:border-[#4257b2] dark:after:border-[#2e3956] dark:after:border-l-transparent after:border-l-transparent dark:after:border-r-transparent dark:after:after:border-r-transparent after:border-t-transparent dark:after:border-t-transparent top-full right-[-78px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
              <span>Thêm học phần vào thư mục</span>
            </div>
          </div>
          <div className='w-[36px] mr-2 group relative cursor-pointer h-[36px] text-base hover:text-textHover rounded-full bg-white dark:bg-[#13141b] dark:text-white flex items-center justify-center'>
            <BsFillPenFill />
            <div className='absolute group-hover:block hidden bg-[#4257b2] dark:bg-[#2e3956] after:content-[""] after:absolute after:top-[-20px] after:right-[40px] after:border-[10px] after:border-[#4257b2] dark:after:border-[#2e3956] dark:after:border-l-transparent after:border-l-transparent dark:after:border-r-transparent dark:after:after:border-r-transparent after:border-t-transparent dark:after:border-t-transparent top-full right-[-35px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
              <span>Chỉnh sửa</span>
            </div>
          </div>
          <div className='w-[36px] mr-2 group relative cursor-pointer h-[36px] text-base hover:text-textHover rounded-full bg-white dark:bg-[#13141b] dark:text-white flex items-center justify-center'>
            <BiShare />
            <div className='absolute group-hover:block hidden bg-[#4257b2] dark:bg-[#2e3956] after:content-[""] after:absolute after:top-[-20px] after:right-[34px] after:border-[10px] after:border-[#4257b2] dark:after:border-[#2e3956] dark:after:border-l-transparent after:border-l-transparent dark:after:border-r-transparent dark:after:after:border-r-transparent after:border-t-transparent dark:after:border-t-transparent top-full right-[-27px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
              <span>Chia sẻ</span>
            </div>
          </div>
          <div className='w-[36px] mr-2 group relative cursor-pointer h-[36px] text-base hover:text-textHover rounded-full bg-white dark:bg-[#13141b] dark:text-white flex items-center justify-center'>
            <AiOutlineInfo />
            <div className='absolute group-hover:block hidden bg-[#4257b2] dark:bg-[#2e3956] after:content-[""] after:absolute after:top-[-20px] after:right-[40px] after:border-[10px] after:border-[#4257b2] dark:after:border-[#2e3956] dark:after:border-l-transparent after:border-l-transparent dark:after:border-r-transparent dark:after:after:border-r-transparent after:border-t-transparent dark:after:border-t-transparent top-full right-[-32px] mt-4 text-white text-xs rounded-[8px] whitespace-nowrap px-5 py-2'>
              <span>Thông tin</span>
            </div>
          </div>
          <div className='w-[36px] mr-2 group relative cursor-pointer h-[36px] text-base rounded-full bg-white dark:bg-[#13141b] dark:text-white flex items-center justify-center'>
            <BsThreeDots className='group-hover:text-textHover' />

            <div className='absolute'>
              <ul
                className='absolute z-[5] dark:text-bgColor text-[#303545] dark:bg-[#13141b] hidden group-hover:block w-[180px] top-[30px] right-[-18px] before:content-[""] before:absolute before:block before:w-[40px] before:h-[20px] before:bg-transparent before:top-[-14px] before:right-0 after:content-[""] after:absolute after:border-[10px] after:top-[-20px] after:right-[6px] after:border-white dark:after:border-[#13141b] after:border-r-transparent dark:after:border-r-transparen after:border-l-transparent dark:after:border-l-transparent after:border-t-transparent dark:after:border-t-transparent bg-white 
              shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)]'
              >
                <li className='flex items-center px-4 py-2 hover:bg-textHover dark:hover:text-[#13141b] '>
                  <span className='mr-4'>
                    <MdOutlineFilterNone />
                  </span>
                  <span className='text-base font-medium'>Tùy chỉnh</span>
                </li>
                <li className='flex items-center px-4 py-2 hover:bg-textHover dark:hover:text-[#13141b]'>
                  <span className='mr-4'>
                    <AiOutlinePrinter />
                  </span>
                  <span className=' text-base font-medium'>In</span>
                </li>
                <li className='flex items-center px-4 py-2 hover:bg-textHover dark:hover:text-[#13141b]'>
                  <span className='mr-4'>
                    <IoGitCompareOutline />
                  </span>
                  <span className='text-base font-medium'>Ghép</span>
                </li>
                <li className='flex items-center px-4 py-2 hover:bg-textHover dark:hover:text-[#13141b]'>
                  <span className='mr-4'>
                    <MdSaveAlt />
                  </span>
                  <span className='text-base font-medium'>Xuất</span>
                </li>
                <li className='flex items-center px-4 py-2 hover:bg-textHover dark:hover:text-[#13141b]'>
                  <span className='mr-4'>
                    <MdCode />
                  </span>
                  <span className='text-base font-medium'>Nhúng</span>
                </li>
                <li className='flex items-center px-4 py-2 hover:bg-textHover dark:hover:text-[#13141b]'>
                  <span className='mr-4 text-[red]'>
                    <IoTrashOutline />
                  </span>
                  <span className='text-base font-medium'>Xóa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-[30px]'>
        <div className='col-span-12 md:col-span-9 bg-white dark:bg-[#2e3956] shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] rounded-[10px] px-5 py-3'>
          <div className='flex justify-between items-center'>
            <h3 className='flex items-center text-[#303545] dark:text-bgColor font-bold text-base'>
              Tiến độ của bạn
              <span className='bg-textHover w-[20px] h-[20px] ml-4 rounded-full flex items-center justify-center'>
                <BiLock />
              </span>
            </h3>
            <div className='p-2 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='my-3'>
            <p className='text-[#303545] dark:text-[#80808c] text-sm font-normal'>
              Với Tiến độ học, bạn có thể bắt đầu nghiên cứu các thuật ngữ cần
              nắm vững chỉ bằng một cú nhấp chuột.
            </p>
          </div>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-4 p-4 block lg:flex text-center bg-white shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] items-center justify-between rounded-[4px]'>
              <div className='flex justify-center flex-col lg:flex-row items-center'>
                <div className='rounded-full w-[50px] opacity-60 inline-flex items-center justify-center h-[50px] border-[4px] border-[#7b89c9] border-b-transparent'>
                  <span className='text-2xl'>
                    <BiLock />
                  </span>
                </div>
                <h3 className='font-bold text-base lg:ml-4 text-[#303545]'>
                  Chưa học
                </h3>
              </div>
              <p className='text-[#d9dde8] text-base font-normal'>Học</p>
            </div>
            <div className='col-span-4 p-4 block lg:flex text-center bg-white shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] items-center justify-between rounded-[4px]'>
              <div className='flex justify-center flex-col lg:flex-row items-center'>
                <div className='rounded-full w-[50px] opacity-60 inline-flex items-center justify-center h-[50px] border-[4px] border-[#ff983a] border-b-transparent'>
                  <span className='text-2xl'>
                    <BiLock />
                  </span>
                </div>
                <h3 className='font-bold text-base lg:ml-4 text-[#303545]'>
                  Đang học
                </h3>
              </div>
              <p className='text-[#d9dde8] text-base font-normal'>Học</p>
            </div>
            <div className='col-span-4 p-4 block lg:flex text-center bg-white shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] items-center justify-between rounded-[4px]'>
              <div className='flex justify-center flex-col lg:flex-row items-center'>
                <div className='rounded-full w-[50px] opacity-60 inline-flex items-center justify-center h-[50px] border-[4px] border-[#18ae79] border-b-transparent'>
                  <span className='text-2xl'>
                    <BiLock />
                  </span>
                </div>
                <h3 className='font-bold text-base lg:ml-4 text-[#303545]'>
                  Thành thạo
                </h3>
              </div>
              <p className='text-[#d9dde8] text-base font-normal'>Học</p>
            </div>
          </div>
          <div className='lg:flex text-center lg:justify-start mt-4 justify-between dark:text-[#80808c] items-center'>
            <h3 className='text-[#303545] dark:text-[#80808c] text-xs font-normal'>
              Truy cập tất cả các số liệu thống kê, trang tổng quan tiến độ cá
              nhân và các lối tắt học thông minh với Quizlet Plus.
            </h3>
            <p className='text-sm cursor-pointer font-bold hover:text-textHover text-[#282e3e] dark:text-bgColor'>
              Mở khóa tiến bộ
            </p>
          </div>
        </div>
      </div>
      <div className='my-5 grid grid-cols-12'>
        <div className='col-span-12 md:col-span-9'>
          <div className='flex items-center justify-between'>
            <h3 className='text-textColor font-bold text-xl dark:text-bgColor'>
              Thuật ngữ trong học phần này <span>{'(20)'}</span>
            </h3>
            <button
              onBlur={() => setShowDropdownFilter(false)}
              onClick={() => setShowDropdownFilter(true)}
              className='flex relative bg-white dark:bg-[#13141b] shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] px-4 py-2 justify-between items-center'
            >
              <p className='font-semibold text-textColor dark:text-bgColor text-sm'>
                Thông số của bạn
              </p>
              <span className='ml-4 text-[#3ccfcf] text-lg'>
                <BiChevronDown />
              </span>
              <ul
                className={`${
                  showDropDownFilter ? 'block' : 'hidden'
                } absolute shadow-[0px_0.3125rem_1.25rem_0_rgb(0,0,0,0.16)] overflow-hidden top-[-100%] 
              min-w-[180px] bg-white dark:bg-bgDarkSc rounded-[4px]`}
              >
                <li className='text-left px-5 text-textColor text-base whitespace-nowrap py-3 cursor-pointer dark:text-bgColor dark:hover:bg-bgElement dark:bg-bgDarkSc hover:bg-bgColor'>
                  Theo bảng chữ cái
                </li>
                <li className='text-left px-5 text-textColor text-base whitespace-nowrap py-3 cursor-pointer dark:text-bgColor dark:hover:bg-bgElement dark:bg-bgDarkSc hover:bg-bgColor'>
                  Thứ tự
                </li>
                <li className='text-left px-5 text-textColor text-base whitespace-nowrap py-3 cursor-pointer dark:text-bgColor dark:hover:bg-bgElement dark:bg-bgDarkSc hover:bg-bgColor'>
                  Thông số của bạn
                </li>
              </ul>
            </button>
          </div>
          <div className='flex justify-between items-center my-5'>
            <div>
              <h3 className='text-[#f08700] mb-2 font-bold text-xl'>
                Đang học
                <span>{'(1)'}</span>
              </h3>
              <p className='text-textColor dark:text-bgColor text-base font-normal'>
                Bạn đã bắt đầu học thuật ngữ này. Tiếp tục phát huy nhé
              </p>
            </div>
            <button
              onClick={() => {
                setSelectAll(!selectAll)
                setItemSelect(!itemSelect)
              }}
              className={`${
                selectAll
                  ? 'text-textHover dark:text-textHover'
                  : 'hover:text-textHover'
              } px-4 cursor-pointer py-2 flex items-center animate-fadeIn odd:text-[red] border-[1px] rounded-[4px] text-textColor text-sm font-semibold dark:text-bgColor bg-white dark:bg-bgDarkSc shadow-sm`}
            >
              <span className='mr-1'>
                <AiOutlineStar />
              </span>
              <span className='mr-1'>Chọn </span>
              <span>({quantitySelect})</span>
            </button>
          </div>

          {Object.keys(itemCourse).length > 0 && (
            <ListTerm
              itemCourse={itemCourse}
              selectAll={selectAll}
              setSelectAll={setSelectAll}
              itemSelect={itemSelect}
              setItemSelect={setItemSelect}
              setQuantitySelect={setQuantitySelect}
              quantitySelect={quantitySelect}
            />
          )}
        </div>
      </div>
    </>
  )
}
