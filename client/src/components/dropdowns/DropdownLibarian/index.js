import React, {useState, useEffect, useContext} from 'react'
import ListTerm from '../ListTerm'
import {getAllCourseList, getAllCourse} from '../../../features/courseSlice'
import {getAllFolder, getAllFolderList} from '../../../features/folderSlice'
import {getAllClass, getClassList} from '../../../features/classSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {FcTemplate, FcGallery, FcOpenedFolder} from 'react-icons/fc'
import {StateContext} from '../../StateContext'
import {getIsAuthentication} from '../../../features/authSlice'

export default function DropdownLibarian(props) {
  const [tab, setTab] = useState('term')
  const listCourse = useSelector(getAllCourseList)
  const listFolder = useSelector(getAllFolderList)
  const classList = useSelector(getClassList)

  const isAuthenticated = useSelector(getIsAuthentication)
  const value = useContext(StateContext)
  const {onShowModalCreateFolder, onShowModalCreateClass} = value
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {showDropdown, onCloseDropdown} = props

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllCourse())
      dispatch(getAllFolder())
      dispatch(getAllClass())
    }
  }, [dispatch])

  const handleAddCourse = () => {
    navigate(`/add-term`)
  }

  const handleTab = (tab) => {
    setTab(tab)
  }

  return (
    <div
      className={`${
        showDropdown ? 'block' : 'hidden'
      } duration-1000 dropdown-libarian transition-all ease-in w-[480px] overflow-hidden min-h-[420px] absolute shadow-lg bg-white dark:bg-[#13141b] top-dropdown left-0 pt-3 rounded-[10px]`}
    >
      <ul className='mx-3 after:content-[""] after:z-[1] relative after:absolute after:bg-[#ccc] after:bottom-0 after:w-full after:h-[2px] flex items-center text-primary dark:text-white'>
        <li
          className='relative group py-2 h-full mr-5 cursor-pointer'
          onClick={() => handleTab('term')}
        >
          <span
            className={`group-hover:text-colorPrimary after:z-[2]  after:content-[""] after:bottom-0 after:right-0  after:bg-colorPrimary after:absolute group-hover:after:w-full after:h-[2px] ${
              tab === 'term' ? 'after:w-full' : 'after:w-0'
            }`}
          >
            Học phần
          </span>
        </li>
        <li
          className='relative group py-2 h-full mr-5 cursor-pointer'
          onClick={() => handleTab('explain')}
        >
          <span
            className={`group-hover:text-colorPrimary after:z-[2]  after:content-[""] after:bottom-0 after:right-0  after:bg-colorPrimary after:absolute group-hover:after:w-full after:h-[2px] ${
              tab === 'explain' ? 'after:w-full' : 'after:w-0'
            }`}
          >
            Giải thích
          </span>
        </li>
        <li
          className='relative group py-2 h-full mr-5 cursor-pointer'
          onClick={() => handleTab('folder')}
        >
          <span
            className={`group-hover:text-colorPrimary after:z-[2]  after:content-[""] after:bottom-0 after:right-0  after:bg-colorPrimary after:absolute group-hover:after:w-full after:h-[2px] ${
              tab === 'folder' ? 'after:w-full' : 'after:w-0'
            }`}
          >
            Thư mục
          </span>
        </li>
        <li
          className='relative group py-2 h-full mr-5 cursor-pointer'
          onClick={() => handleTab('class')}
        >
          <span
            className={`group-hover:text-colorPrimary after:z-[2]  after:content-[""] after:bottom-0 after:right-0  after:bg-colorPrimary after:absolute group-hover:after:w-full after:h-[2px] ${
              tab === 'class' ? 'after:w-full' : 'after:w-0'
            }`}
          >
            Lớp học
          </span>
        </li>
      </ul>

      <div className='' onClick={onCloseDropdown}>
        <div
          className={`${
            tab === 'term' ? 'block' : 'hidden'
          } relative h-[372px]`}
        >
          <ListTerm
            footerTitle='Xem danh sách học phần'
            list={listCourse.length > 0 ? listCourse : []}
            tab={tab}
            listEmpty={{
              title: 'Học phần rỗng',
              button: 'Tạo học phần',
              icon: <FcGallery />,
              onClick: handleAddCourse
            }}
          />
        </div>
        <div className={`${tab === 'explain' ? 'block' : 'hidden'} mt-24`}>
          <div className='flex h-full'>
            <div className='m-auto text-center'>
              <p className='text-[#919090] mb-5'>
                Tìm lời giải từng bước kèm giải thích
              </p>
              <button className='border-[1px] rounded-[10px] text-center p-3 border-[#ccc] text-[#818181]'>
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            tab === 'folder' ? 'block' : 'hidden'
          } relative h-[372px]`}
        >
          <ListTerm
            footerTitle='Xem danh sách thư mục'
            list={listFolder.length > 0 ? listFolder : []}
            tab={tab}
            listEmpty={{
              title: 'Thư mục rỗng',
              button: 'Tạo thư mục',
              icon: <FcOpenedFolder />,
              onClick: onShowModalCreateFolder
            }}
          />
        </div>
        <div
          className={`${
            tab === 'class' ? 'block' : 'hidden'
          } relative h-[372px]`}
        >
          <ListTerm
            list={classList.length > 0 ? classList : []}
            tab={tab}
            footerTitle='Xem danh sách lớp học'
            listEmpty={{
              title: 'Lớp học rỗng',
              button: 'Tạo Lớp học',
              icon: <FcTemplate />,
              onClick: onShowModalCreateClass
            }}
          />
        </div>
      </div>
    </div>
  )
}
