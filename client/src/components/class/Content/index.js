import React, {useRef} from 'react'
import Button from '../../commonsComponents/Button'
import {MdOutlineLocationCity} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsFiles} from 'react-icons/bs'
import CourseItem from '../CourseItem'
export default function Content() {
  const inputRef = useRef(null)

  const handleCopyHref = () => {
    if (inputRef.current) {
      inputRef.current.select()
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className='mt-5'>
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-12 lg:col-span-9'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <h3 className='text-xs text-[#303545] dark:text-bgColor font-normal mr-4'>
                Sắp xếp
              </h3>
              <div className=''>
                <select
                  // value={sortValue}
                  // onChange={(e) => {
                  //   localStorage.setItem('SORT_FOLDER', e.target.value)
                  //   setSortValue(e.target.value)
                  // }}
                  className='outline-none min-w-[130px] border-[#d9dde8] border-[2px] rounded-[4px] dark:bg-bgElement py-2 px-2 text-[#3ccfcf]'
                >
                  <option value='recently'>Gần đây</option>
                  <option value='alphabetical'>Bảng chữ cái</option>
                </select>
              </div>
            </div>
            <div className='w-[200px] md:w-[250px]'>
              <label className='group'>
                <input
                  type='text'
                  // value={filterValue}
                  // onChange={(e) => setFilterValue(e.target.value)}
                  className='w-full text-[#1a1d28] text-base py-2 outline-none bg-transparent border-none'
                  placeholder='Lọc'
                />
                <span className='border-b-[2px] group-focus-within:border-textHover border-[#303545] border-t-[2px] border-b-transparent block w-full'></span>
              </label>
            </div>
          </div>
          <div className='my-5'>
            <div className='my-5'>
              <div className='flex items-center '>
                <h3 className='text-sm text-textColor font-medium mr-5'>
                  THÁNG 10 NĂM 2021{' '}
                </h3>
                <span className='block flex-1 w-full h-[2px] bg-[#e4e7eb]'></span>
              </div>
              <div>
                <CourseItem />
              </div>
            </div>
            <div className='my-5'>
              <div className='flex items-center '>
                <h3 className='text-sm text-textColor font-medium mr-5'>
                  THÁNG 10 NĂM 2021{' '}
                </h3>
                <span className='block flex-1 w-full h-[2px] bg-[#e4e7eb]'></span>
              </div>
              <div>
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-0 hidden lg:block lg:col-span-3'>
          <h3 className='text-base text-[#3c4150] font-normal mb-3'>
            Liên kết mời
          </h3>
          <div className='flex justify-between items-center'>
            <input
              type='text'
              ref={inputRef}
              value={window.location.href}
              className='border-2 px-3 py-1 overflow-hidden block line-clamp-1 flex-1 mr-2 border-textPrimary rounded-[6px] outline-none '
            />
            <Button onClick={handleCopyHref}>Sao chép</Button>
          </div>
          <div>
            <h3 className='text-base text-[#3c4150] font-normal mt-3 mb-2'>
              Chi tiết lớp học
            </h3>
            <ul>
              <li className='flex items-end mb-2'>
                <span className='text-[#d9dde8] text-3xl mr-2'>
                  <MdOutlineLocationCity />
                </span>
                <p className='text-textColor font-medium text-sm'>
                  Trường đại học Bách Khoa Hà Nội
                </p>
              </li>
              <li className='flex items-end mb-2'>
                <span className='text-[#d9dde8] text-3xl mr-2'>
                  <BsFiles />
                </span>
                <p className='text-textColor font-medium text-sm'>
                  20 Học phần
                </p>
              </li>
              <li className='flex items-end mb-2'>
                <span className='text-[#d9dde8] text-3xl mr-2'>
                  <BiUser />
                </span>
                <p className='text-textColor font-medium text-sm'>
                  1 Thành viên
                </p>
              </li>
              <li className='flex items-end mb-2'>
                <span className='text-[#d9dde8] text-3xl mr-2'>
                  <AiOutlineInfoCircle />
                </span>
                <p className='text-textColor font-medium text-sm'>
                  Lê Văn Tuấn
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
