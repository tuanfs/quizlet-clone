import React, {useState, useEffect, useContext, useRef} from 'react'
import {Link} from 'react-router-dom'
import DropdownLibarian from '../../../dropdowns/DropdownLibarian'
import {AiOutlineFolder, AiOutlineCopy} from 'react-icons/ai'
import TopicModal from '../../../topic/TopicModal'
import {StateContext} from '../../../StateContext'
import {useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getIsAuthentication} from '../../../../features/authSlice'
import ModalCreateClass from '../../../ModalCreateClass'

export default function Navbar(props) {
  const value = useContext(StateContext)

  const {
    showMenuMobile,
    onShowModalMobile,
    onShowMenuMobile,
    onShowModalCreateFolder,
    onShowModalCreateClass
  } = value

  const {
    showDropdowLibarian,
    setShowDropdownLibarian,
    showDropdownCreateMobile,
    setShowDropdownCreateMobile
  } = props

  const isAuthenticated = useSelector(getIsAuthentication)
  const [isAuthentication, setIsAuthentication] = useState(isAuthenticated)

  useEffect(() => {
    setIsAuthentication(isAuthenticated)
  }, [isAuthenticated])
  const path = useLocation()
  const navListRef = useRef(null)
  const createRef = useRef(null)

  const [showDropdown, setShowDropdown] = useState(false)
  const [showDropdownCreate, setShowDropdownCreate] = useState(false)
  const libarianRef = useRef(null)

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown)
  }
  const handleCloseDropdown = () => {
    setShowDropdown(false)
  }
  useEffect(() => {
    const navList = navListRef.current.childNodes
    const page = path.pathname.replace('/', '')
    Array.from(navList).forEach((item) => {
      if (item.dataset.key === page) {
        item.childNodes[0].classList.add('after:w-full')
        item.childNodes[0].classList.remove('after:w-0')
      } else {
        item.childNodes[0].classList.remove('after:w-full')
        item.childNodes[0].classList.add('after:w-0')
      }
    })
  }, [path])

  useEffect(() => {
    const handleOnScroll = () => {
      setShowDropdownCreate(false)
    }
    window.addEventListener('scroll', handleOnScroll)
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [])

  useEffect(() => {
    const handleOnClickCreate = (e) => {
      if (createRef.current) {
        if (!createRef.current.contains(e.target)) {
          setShowDropdownCreate(false)
        }
      }
    }

    const handleOnClickLibarian = (e) => {
      if (libarianRef.current) {
        if (!libarianRef.current.contains(e.target)) {
          handleCloseDropdown()
        }
      }
    }
    window.addEventListener('click', handleOnClickLibarian)
    window.addEventListener('click', handleOnClickCreate)
    return () => {
      window.removeEventListener('click', handleOnClickLibarian)
      window.removeEventListener('click', handleOnClickCreate)
    }
  }, [])

  return (
    <>
      <div
        ref={navListRef}
        className='md:flex hidden items-center h-[60px] text-primary dark:text-textDark'
      >
        <div data-key='' className='px-4 hidden xl:block h-full'>
          <Link
            to='/'
            className='relative h-full flex items-center justify-center after:content-[""] after:absolute after:bg-borderColor after:w-0 after:right-0 after:left-auto hover:after:left-0 hover:after:right-auto after:h-[4px] hover:after:w-full after:bottom-0 after:duration-300 after:transition-all after:ease-linear'
          >
            <span className=''>Trang chủ</span>
          </Link>
        </div>
        <div
          data-key='topic'
          className={`xl:px-4 px-2 h-full ${
            isAuthenticated ? 'hidden' : 'hidden md:block'
          }`}
        >
          <button
            onClick={() => onShowModalMobile(true)}
            className='relative font-semibold cursor-pointer h-full flex items-center justify-center after:content-[""] after:absolute after:bg-borderColor after:w-0 after:right-0 after:left-auto hover:after:left-0 hover:after:right-auto after:h-[4px] hover:after:w-full after:bottom-0 after:duration-300 after:transition-all after:ease-linear'
          >
            <span className=''>Chủ đề</span>
          </button>
          <TopicModal />
        </div>
        <div data-key='explain' className='xl:px-4 hidden md:block px-2 h-full'>
          <Link
            to='/explain'
            className='relative h-full flex items-center justify-center after:content-[""] after:absolute after:bg-borderColor after:w-0 after:right-0 after:left-auto hover:after:left-0 hover:after:right-auto after:h-[4px] hover:after:w-full after:bottom-0 after:duration-300 after:transition-all after:ease-linear'
          >
            <span className=''>Giải thích</span>
          </Link>
        </div>
        <div
          ref={libarianRef}
          data-key='libarian'
          className={`relative xl:px-4 px-2 h-full item-libarian ${
            isAuthenticated ? 'block' : 'hidden'
          }`}
        >
          <button
            onClick={handleShowDropdown}
            className='relative h-full flex items-center font-semibold justify-center after:content-[""] after:absolute after:bg-borderColor after:w-0 after:right-0 after:left-auto hover:after:left-0 hover:after:right-auto after:h-[4px] hover:after:w-full after:bottom-0 after:duration-300 after:transition-all after:ease-linear'
          >
            <span className=''>Thư viện của bạn</span>
            <i className='fa-solid fa-angle-down ml-2'></i>
          </button>
          <DropdownLibarian
            showDropdown={showDropdown}
            onCloseDropdown={handleCloseDropdown}
          />
        </div>
        <div
          className='px-4 h-full item-create cursor-pointer hidden md:block relative'
          ref={createRef}
        >
          <div
            className=' text-white flex items-center h-full'
            onClick={() => setShowDropdownCreate(true)}
          >
            <span className='bg-[#4254ff] flex items-center xl:py-2 xl:px-6 p-2 rounded-[3px] xl:rounded-[6px]'>
              <span className='xl:block hidden'>Tạo</span>
              <span className='xl:hidden block'>
                <i className='fa-solid fa-plus'></i>
              </span>
              <i className='fa-solid fa-angle-down ml-2 xl:block hidden'></i>
            </span>
          </div>
          <div
            className={`absolute dropdown-create top-[110%] min-w-[200px] dark:bg-[#13141b] bg-white shadow-lg rounded-[10px] py-2 ${
              showDropdownCreate ? 'block' : 'hidden'
            }`}
          >
            <ul
              onClick={() => {
                setShowDropdownCreate(false)
              }}
            >
              <li className='py-3 pl-8 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
                <Link
                  className='text-[#949494] flex items-center text-base'
                  to='/add-term'
                >
                  <AiOutlineCopy className='mr-2' />
                  <span>Học phần</span>
                </Link>
              </li>
              <li
                className='py-3 pl-8 hover:bg-bgColor dark:hover:bg-[#2e3956]'
                onClick={() => onShowModalCreateFolder(true)}
              >
                <div className='text-[#949494] flex items-center text-base'>
                  <AiOutlineFolder className='mr-2' />
                  <span>Thư mục</span>
                </div>
              </li>
              <li
                className='py-3 pl-8 hover:bg-bgColor dark:hover:bg-[#2e3956]'
                onClick={() => onShowModalCreateClass(true)}
              >
                <button className='text-[#949494] flex items-center text-base'>
                  <i className='fa-solid fa-user-group mr-2'></i>
                  <span>Lớp</span>
                </button>
              </li>
              <ModalCreateClass />
            </ul>
          </div>
        </div>
      </div>
      <ul className={`${showMenuMobile ? '' : 'hidden'}`}>
        <li className='' onClick={() => onShowMenuMobile(false)}>
          <Link
            to='/'
            className='font-semibold flex my-2 text-base items-center  md:text-xl leading-0 w-full py-1 px-3 relative after:content-[""] after:absolute after:left-0 after:bg-transparent after:rounded-tr-[4px] after:rounded-br-[4px] hover:after:bg-borderColor after:w-[4px] after:h-full'
          >
            Trang chủ
          </Link>
        </li>
        <li
          className={`${isAuthentication ? 'block' : ''}`}
          onClick={() => onShowMenuMobile(false)}
        >
          <span
            onClick={() => onShowModalMobile(true)}
            to='/'
            className='font-semibold cursor-pointer flex my-2 text-base items-center md:text-xl leading-0 w-full py-1 px-3 relative after:content-[""] after:absolute after:left-0 after:bg-transparent after:rounded-tr-[4px] after:rounded-br-[4px] hover:after:bg-borderColor after:w-[4px] after:h-full'
          >
            Chủ đề
          </span>
        </li>
        <li className='' onClick={() => onShowMenuMobile(false)}>
          <Link
            to='/explain'
            className='font-semibold flex my-2 text-base items-center md:text-xl leading-0 w-full py-1 px-3 relative after:content-[""] after:absolute after:left-0 after:bg-transparent after:rounded-tr-[4px] after:rounded-br-[4px] hover:after:bg-borderColor after:w-[4px] after:h-full'
          >
            Giải thích
          </Link>
        </li>
        <li className={`${isAuthentication ? '' : 'hidden'}`}>
          <Link
            onClick={() => setShowDropdownLibarian(!showDropdowLibarian)}
            to='/'
            className='font-semibold flex my-2 text-base items-center md:text-xl leading-0 w-full py-1 px-3 relative after:content-[""] after:absolute after:left-0 after:bg-transparent after:rounded-tr-[4px] after:rounded-br-[4px] hover:after:bg-borderColor after:w-[4px] after:h-full'
          >
            <span>Thư viện của bạn</span>
            <i className='fa-solid fa-angle-down ml-2'></i>
          </Link>
          <ul
            className={`mx-3 px-3 border-l-[1px] border-[#ccc] ${
              showDropdowLibarian ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link
                to='/'
                className='text-xl block my-2 font-light hover:opacity-70'
              >
                Học phần
              </Link>
            </li>
            <li onClick={() => onShowModalMobile(false)}>
              <Link
                to='/'
                className='text-xl block my-2 font-light hover:opacity-70'
              >
                Giải thích
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='text-xl block my-2 font-light hover:opacity-70'
              >
                Thư mục
              </Link>
            </li>
            <li>
              <Link
                to='/'
                className='text-xl block my-2 font-light hover:opacity-70'
              >
                Lớp học
              </Link>
            </li>{' '}
          </ul>
        </li>
        <li>
          <Link
            onClick={() =>
              setShowDropdownCreateMobile(!showDropdownCreateMobile)
            }
            to='/'
            className='font-semibold flex my-2 text-base items-center md:text-xl leading-0 w-full py-1 px-3 relative after:content-[""] after:absolute after:left-0 after:bg-transparent after:rounded-tr-[4px] after:rounded-br-[4px] hover:after:bg-borderColor after:w-[4px] after:h-full'
          >
            <span>Tạo</span>
            <i className='fa-solid fa-angle-down ml-2'></i>
          </Link>
          <ul
            onClick={() => {
              onShowMenuMobile(false)
              setShowDropdownCreateMobile(false)
            }}
            className={`mx-3 px-3 border-l-[1px] border-[#ccc] ${
              showDropdownCreateMobile ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link
                to='/add-term'
                className='text-xl block my-2 font-light hover:opacity-70'
              >
                Học phần
              </Link>
            </li>
            <li>
              <button
                onClick={() => onShowModalCreateFolder(true)}
                className='text-xl block my-2 font-light hover:opacity-70'
              >
                Thư mục
              </button>
            </li>
            <li>
              <button
                onClick={() => onShowModalCreateClass(true)}
                className='text-xl block my-2 font-light hover:opacity-70'
              >
                Lớp học
              </button>
            </li>{' '}
          </ul>
        </li>
      </ul>
    </>
  )
}
