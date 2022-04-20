import React, {useContext} from 'react'
import {MdFolderOpen} from 'react-icons/md'
import {AiOutlinePlus, AiOutlineDelete, AiTwotoneEdit} from 'react-icons/ai'
import {BsDownload, BsThreeDots} from 'react-icons/bs'
import {BiBookReader} from 'react-icons/bi'
import ModalEdit from '../ModalEdit'
import ModalAddTerm from '../ModalAddTerm'
import ModalLearn from '../ModalLearn'
import ModalShare from '../ModalShare'
import {StateContext} from '../../StateContext'
import {deleteFolder} from '../../../features/folderSlice'
import {useParams, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getAllFolder} from '../../../features/folderSlice'

export default function HeaderCreate({folder}) {
  const {id} = useParams()
  const navigate = useNavigate()
  const value = useContext(StateContext)
  const dispatch = useDispatch()
  const {
    onShowModalEditFolder,
    onShowModalAddTerm,
    onShowModalLearn,
    onShowModalShare
  } = value

  const handleDeleteFolder = async (id) => {
    await dispatch(deleteFolder(id)).then((res) => {
      console.log(res)
      if (res.payload.data.success) {
        dispatch(getAllFolder())
        navigate('/')
      }
    })
  }

  return (
    <div>
      <div className='mt-10 flex justify-between'>
        {Object.keys(folder).length > 0 && (
          <div>
            <div className='sm:flex block text-sm font-semibold'>
              <span className='text-[#303545] dark:text-bgColor'>
                {folder.folderItem.totalCourse} học phần
              </span>
              <div className='flex sm:ml-10 mt-4 sm:mt-0'>
                <span className='text-[#d9dde8] dark:text-[#929cb4]'>
                  Tạo bởi
                </span>
                <h3 className='ml-2 text-[#3dcfcf] cursor-pointer hover:text-textHover '>
                  {folder.author}
                </h3>
              </div>
            </div>
            <div className='flex items-end mt-3'>
              <span className='text-[#939bb4] text-[50px]'>
                <MdFolderOpen />
              </span>
              <h2 className='ml-3 font-semibold dark:text-bgColor text-[#303644] text-[30px]'>
                {folder.folderItem.name}
              </h2>
            </div>
          </div>
        )}
        <div className='flex'>
          <div className='relative h-[82px]'>
            <button
              onClick={() => onShowModalAddTerm(true)}
              className='bg-[#3dcfcf] peer ml-4 hover:bg-[#28a7a7] cursor-pointer h-[38px] w-[38px] flex items-center justify-center rounded-full'
            >
              <AiOutlinePlus className='text-white dark:text-textPrimary font-bold text-xl' />
            </button>
            <div className='text-sm peer-hover:block hidden absolute left-[-50%] bottom-[-2px] whitespace-nowrap rounded-[4px] px-3 py-2 bg-[#4255ff] dark:bg-bgElement font-semibold text-white'>
              <span>Thêm học phần</span>
              <span
                className='block absolute top-[-18px] left-[42%] border-[10px] dark:border-t-transparent 
              border-t-transparent border-r-transparent dark:border-r-transparent border-l-transparent dark:border-l-transparent border-[#4255ff] dark:border-bgElement'
              ></span>
            </div>
          </div>
          <div className='relative h-[82px]'>
            <button
              onClick={() => onShowModalLearn(true)}
              className='bg-[#3dcfcf] peer ml-4 hover:bg-[#28a7a7] cursor-pointer h-[38px] w-[38px] flex items-center justify-center rounded-full'
            >
              <BiBookReader className='text-white dark:text-textPrimary font-bold text-xl' />
            </button>
            <div className='text-sm peer-hover:block hidden absolute left-[17%] bottom-[-2px] whitespace-nowrap rounded-[4px] px-3 py-2 bg-[#4255ff] dark:bg-bgElement font-semibold text-white'>
              <span>Học</span>
              <span
                className='block absolute top-[-18px] left-[34%] border-[10px] dark:border-t-transparent 
              border-t-transparent border-r-transparent dark:border-r-transparent border-l-transparent dark:border-l-transparent border-[#4255ff] dark:border-bgElement'
              ></span>
            </div>
          </div>

          <div className='relative h-[82px]'>
            <button
              onClick={() => onShowModalShare(true)}
              className='bg-[#3dcfcf] peer ml-4 hover:bg-[#28a7a7] cursor-pointer h-[38px] w-[38px] flex items-center justify-center rounded-full'
            >
              <BsDownload className='text-white dark:text-textPrimary font-bold text-xl' />
            </button>
            <div className='text-sm peer-hover:block hidden absolute left-[-10%] bottom-[-2px] whitespace-nowrap rounded-[4px] px-3 py-2 bg-[#4255ff] dark:bg-bgElement font-semibold text-white'>
              <span>Chia sẻ</span>
              <span
                className='block absolute top-[-18px] left-[42%] border-[10px] dark:border-t-transparent 
              border-t-transparent border-r-transparent dark:border-r-transparent border-l-transparent dark:border-l-transparent border-[#4255ff] dark:border-bgElement'
              ></span>
            </div>
          </div>
          <div className='relative h-[82px] group'>
            <button className='bg-[#3dcfcf] ml-4 hover:bg-textHover cursor-pointer h-[38px] w-[38px] flex items-center justify-center rounded-full'>
              <BsThreeDots className='text-white dark:text-textPrimary font-bold text-xl' />
            </button>
            <div className='shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] w-[150px] text-sm group-hover:block hidden absolute right-0 top-[65%] whitespace-nowrap bg-white dark:bg-bgElement font-semibold text-[#303545] '>
              <button
                onClick={() => onShowModalEditFolder(true)}
                className='flex w-full dark:text-bgColor items-center pl-4 py-2 hover:bg-textHover font-semibold'
              >
                <span className='mr-4'>
                  <AiTwotoneEdit />
                </span>{' '}
                Sửa
              </button>
              <button
                onClick={() => handleDeleteFolder(id)}
                className='text-[#ff7873] flex items-center pl-4 w-full py-2 hover:bg-textHover font-semibold'
              >
                <span className='mr-4'>
                  <AiOutlineDelete />
                </span>{' '}
                Xóa
              </button>
              <span className='block absolute top-[-20px] right-[7px] border-[10px] border-t-transparent border-r-transparent border-l-transparent dark:border-t-transparent dark:border-r-transparent dark:border-l-transparent border-white dark:border-bgElement'></span>
              <span className='block absolute top-[-20px] right-0 bg-transparent w-[50px] h-[20px]'></span>
            </div>
          </div>
        </div>
      </div>
      {Object.keys(folder).length > 0 && (
        <ModalEdit
          title={folder.folderItem.name}
          desc={folder.folderItem.description}
        />
      )}
      <ModalAddTerm />
      <ModalLearn />
      <ModalShare />
    </div>
  )
}
