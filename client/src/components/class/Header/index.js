import React from 'react'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {BsPlusLg, BsThreeDots} from 'react-icons/bs'
import {BiUserPlus} from 'react-icons/bi'
import {AiOutlineFolder} from 'react-icons/ai'
import {MdModeEdit, MdOutlineNotificationsNone} from 'react-icons/md'
import {IoWarningOutline, IoTrash} from 'react-icons/io5'
import {deleteClass} from '../../../features/classSlice'
import {useDispatch} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'

export default function Header() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const navigate = useNavigate()
  const handleDeleteClass = async () => {
    await dispatch(deleteClass(id)).then((res) => {
      if (res.payload.data.success) {
        navigate('/')
      }
    })
  }

  return (
    <div>
      <div className='flex justify-between items-center py-5'>
        <div className='flex-1 flex items-center'>
          <span className='mr-5 font-semibold text-[40px] text-[#a0a0a0]'>
            <HiOutlineUserGroup />
          </span>
          <h3 className='font-bold text-textPrimary text-[30px]'>Voca_Tuan</h3>
        </div>
        <div className='flex'>
          <div className='h-[40px] group relative cursor-pointer w-[40px] mr-2 bg-white border-[#ccc] border-2 rounded-full flex items-center justify-center'>
            <span className='text-[#77829d] font-medium  text-xl'>
              <BsPlusLg />
            </span>
            <div className='rounded-[4px] group-hover:block hidden px-4 py-1 top-[140%] absolute bg-[#4257b2] whitespace-nowrap text-white'>
              <span className='text-sm'>Thêm học phần</span>
              <span className='absolute block border-[10px] border-b-[#4257b2] -top-1/2 left-[50%] -translate-x-1/2 border-t-transparent border-l-transparent border-r-transparent'></span>
            </div>
          </div>
          <div className='h-[40px] group relative cursor-pointer w-[40px] mr-2 bg-white border-[#ccc] border-2 rounded-full flex items-center justify-center'>
            <span className='text-[#77829d] font-medium  text-xl'>
              <BiUserPlus />
            </span>
            <div className='rounded-[4px] hidden group-hover:block px-4 py-1 top-[140%] absolute bg-[#4257b2] whitespace-nowrap text-white'>
              <span className='text-sm'>Thêm thành viên</span>
              <span className='absolute block border-[10px] border-b-[#4257b2] -top-1/2 left-[50%] -translate-x-1/2 border-t-transparent border-l-transparent border-r-transparent'></span>
            </div>
          </div>
          <div className='h-[40px] relative group cursor-pointer w-[40px] mr-2 bg-white border-[#ccc] border-2 rounded-full flex items-center justify-center'>
            <span className='text-[#77829d] font-medium  text-xl'>
              <AiOutlineFolder />
            </span>
            <div className='rounded-[4px] hidden group-hover:block px-4 py-1 top-[140%] absolute bg-[#4257b2] whitespace-nowrap text-white'>
              <span className='text-sm'>Thêm thư mục</span>
              <span className='absolute block border-[10px] border-b-[#4257b2] -top-1/2 left-[50%] -translate-x-1/2 border-t-transparent border-l-transparent border-r-transparent'></span>
            </div>
          </div>
          <div className='h-[40px] hover:bg-textHover group relative cursor-pointer w-[40px] mr-2 bg-white border-[#ccc] border-2 rounded-full flex items-center justify-center'>
            <span className='text-[#77829d] font-medium  text-xl'>
              <BsThreeDots />
            </span>
            <div className='h-[20px] w-[100px] bg-transparent absolute right-0 top-full'></div>
            <ul className='absolute group-hover:block hidden top-[140%] right-0 min-w-[200px] bg-white'>
              <li className='flex px-4 py-2 items-center hover:bg-textHover'>
                <span className='mr-4'>
                  <MdModeEdit />
                </span>
                <span>Sửa</span>
              </li>
              <li className='flex px-4 py-2 items-center hover:bg-textHover'>
                <span className='mr-4'>
                  <MdOutlineNotificationsNone />
                </span>
                <span>Thông báo</span>
              </li>
              <li className='flex px-4 py-2 items-center hover:bg-textHover'>
                <span className='mr-4'>
                  <IoWarningOutline />
                </span>
                <span>Báo cáo</span>
              </li>

              <li
                onClick={handleDeleteClass}
                className='flex px-4 py-2 text-[red] items-center hover:bg-textHover'
              >
                <span className='mr-4'>
                  <IoTrash />
                </span>
                <span>Xóa</span>
              </li>
            </ul>
            <span className='border-[10px] group-hover:block hidden absolute top-[85%] border-l-transparent border-r-transparent border-t-transparent border-white'></span>
          </div>
        </div>
      </div>
      <div className='w-full border-b-2 boder-[#ccc]'>
        <div className='relative mb-[-2px] py-1 inline-block border-b-2 border-b-borderColor'>
          <span>Các học phần</span>
        </div>
      </div>
    </div>
  )
}
