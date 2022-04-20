import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineFolder} from 'react-icons/ai'
import {BsFolder2} from 'react-icons/bs'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {removeCourseOutFolder, getFolder} from '../../features/folderSlice'

export default function CardItem(props) {
  const {topicCp, itemCard, folderCp} = props
  const [showSelectItem, setShowSelectItem] = useState(false)
  const {id} = useParams()
  const popoverRef = useRef()

  const dispatch = useDispatch()
  const handleRemoveCourse = (idCourse) => {
    dispatch(removeCourseOutFolder({idFolder: id, idCourse})).then((res) => {
      dispatch(getFolder(id))
    })
  }

  useEffect(() => {
    const handleClickPopover = (e) => {
      if (popoverRef) {
        if (!popoverRef.current.contains(e.target)) {
          setShowSelectItem(false)
        }
      }
    }

    window.addEventListener('click', handleClickPopover)

    return () => window.removeEventListener('click', handleClickPopover)
  }, [])

  return (
    <div
      className={`${topicCp ? 'col-span-6' : 'lg:col-span-4'} ${
        folderCp
          ? 'lg:col-span-6 sm:col-span-6 col-span-12'
          : 'md:col-span-6 col-span-12'
      } rounded-[4px] bg-white dark:bg-[#2e3956] shadow-md border-b-[4px] border-transparent hover:border-borderColor dark:hover:border-[#cedaf3]`}
    >
      <div className='pt-6 pb-4 px-4'>
        <Link to={`/course-detail/${itemCard._id}`} className='pb-6 block'>
          <div className='flex justify-between'>
            <div>
              <h3 className='font-semibold text-base uppercase dark:text-bgColor'>
                {folderCp ? itemCard.course.name : itemCard.name}
              </h3>
              <p className='text-xs text-[#96a0b7] font-medium mt-1 dark:text-[#8a95ad]'>
                {`${
                  folderCp ? itemCard.course.total : itemCard.total
                } Thuật ngữ`}
              </p>
            </div>
            <div className='bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rosa_chinensis_petals.jpg/1200px-Rosa_chinensis_petals.jpg")] w-[60px] h-[60px] bg-cover'></div>
          </div>
        </Link>
        <div className='flex justify-between items-center'>
          <Link to={`/course-detail/${itemCard._id}`} className='flex-1'>
            <div className='flex items-center'>
              <div className='bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rosa_chinensis_petals.jpg/1200px-Rosa_chinensis_petals.jpg")] w-[30px] h-[30px] rounded-full bg-cover'></div>
              <div className=''>
                <h3 className='text-lg  flex font-semibold mx-2 dark:text-[#eeeff4]'>
                  {itemCard.author}
                  <p className='font-normal ml-2 text-lg text-[#96a0b7]'>
                    Giáo viên
                  </p>
                </h3>
              </div>
            </div>
          </Link>
          <div>
            <div className='text-[#303545] relative' ref={popoverRef}>
              <button
                onClick={() => setShowSelectItem(!showSelectItem)}
                className='block p-2 cursor-pointer'
              >
                <i className='fa-solid fa-ellipsis-vertical cursor-pointer block hover:text-[#fecd1f]'></i>
              </button>

              {folderCp ? (
                <div
                  onClick={() => setShowSelectItem(false)}
                  className={`after:content-[""] after:absolute after:border-[15px] after:border-t-transparent  after:border-r-transparent  after:border-l-transparent after:border-[#f6f7fb]
  after:bottom-[40px] after:right-[2px] absolute top-[120%] py-2 right-[-5px] hover:bg-textHover bg-[#f6f7fb] min-w-[200px] rounded-[4px] shadow-lg ${
    showSelectItem ? ' block' : 'hidden'
  }`}
                >
                  <div
                    onClick={() => {
                      setShowSelectItem(false)
                      handleRemoveCourse(itemCard.course._id)
                    }}
                    className='flex px-4 items-center cursor-pointer'
                  >
                    <span className='mr-2 text-[#ff725b] text-lg font-semibold'>
                      <BsFolder2 />
                    </span>
                    <span className='text-[#ff725b] font-semibold'>Xóa</span>
                  </div>
                </div>
              ) : (
                <ul
                  onClick={() => setShowSelectItem(false)}
                  className={`after:content-[""] after:absolute after:border-[20px] after:border-b-transparent  after:border-r-transparent  after:border-l-transparent after:border-[#f6f7fb]
  after:bottom-[-32px] after:right-[-3px] absolute bottom-[50px] py-4 right-[-5px] bg-[#f6f7fb] min-w-[200px] rounded-[4px] shadow-lg ${
    showSelectItem ? ' block' : 'hidden'
  }`}
                >
                  <li className='flex cursor-pointer items-center text-sm py-2 px-4'>
                    <AiOutlineFolder className='text-lg mr-4' />
                    <p>Lưu vào thư mục</p>
                  </li>
                  <li className='flex cursor-pointer items-center text-sm py-2 px-4'>
                    <i className='fa-solid fa-user-group text-base mr-4'></i>
                    <p>Lưu lớp</p>
                  </li>
                  <li className='flex cursor-pointer items-center text-sm py-2 px-4'>
                    <i className='fa-solid text-base fa-eye-slash mr-4'></i>
                    <p>Ẩn thư mục</p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
