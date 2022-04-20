import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logOut} from '../../../features/authSlice'
import useDarkMode from '../../../hook/useDarkMode'
import {logoutUser} from '../../../features/authSlice'

export default function DropdownUser(props) {
  const [colorTheme, setColorTheme] = useDarkMode()

  const dispatch = useDispatch()
  const {onDropdownUser, setOnDropdownUser} = props

  return (
    <div
      onClick={() => setOnDropdownUser(false)}
      type='button'
      className={`bg-white dark:bg-[#13141b] shadow-lg dropdown-user w-[220px] overflow-scroll min-h-[300px] h-[80vh] max-h-[580px] rounded-[10px] absolute right-0 top-dropdown ${
        onDropdownUser ? 'block' : 'hidden'
      }`}
    >
      <div className='flex cursor-pointer px-5 py-4 border-b-[1px] border-[#949494]'>
        <div className='h-[40px] w-[40px] rounded-full overflow-hidden bg-[url("https://hoahongthanglong.com/wp-content/uploads/2021/02/IMG_1741.jpg")] bg-cover'></div>
        <div className='pl-4'>
          <h3 className='text-primay w-[120px] text-ellipsis whitespace-nowrap overflow-hidden'>
            Le Van Tuand_
          </h3>
          <p className='text-sm text-[#585858] w-[120px] text-ellipsis whitespace-nowrap overflow-hidden'>
            tuanpro4501@gmail.com
          </p>
        </div>
      </div>
      <div className='border-b-[1px] border-[#949494]'>
        <ul className='text-[#515664] cursor-pointer text-sm font-semibold'>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] dark:group-hover:text-bgColor'
            >
              Hồ sơ
            </Link>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] dark:group-hover:text-bgColor'
            >
              Tiến độ
            </Link>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <button
              onClick={(e) => {
                setColorTheme(colorTheme)
              }}
              className='group-hover:text-[#424652] font-semibold flex items-center dark:group-hover:text-bgColor'
            >
              Chế độ ban đêm
              <div
                className={`rounded-[5px] ml-4 flex items-center h-[12px] w-[28px] ${
                  colorTheme === 'light' ? 'bg-[#333]' : 'bg-[#ccc]'
                } overflow-hidden`}
              >
                <span
                  className={`w-[8px] duration-300 ease ml-1 block h-[8px] rounded-full ${
                    colorTheme === 'light'
                      ? 'translate-x-[12px] bg-[#c2c2c2]'
                      : 'bg-[#747474]'
                  }`}
                ></span>
              </div>
            </button>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <button className='group-hover:text-[#424652] dark:group-hover:text-bgColor'>
              Cài đặt
            </button>
          </li>
        </ul>
      </div>
      <div className='border-b-[1px] border-[#949494]'>
        <ul className='text-[#515664] cursor-pointer text-sm font-semibold'>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] dark:group-hover:text-bgColor'
            >
              Giới thiệu bạn bè
            </Link>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] dark:group-hover:text-bgColor'
            >
              Giúp đỡ và phản hồi
            </Link>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] flex items-center dark:group-hover:text-bgColor'
            >
              Ứng dụng di động
            </Link>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] dark:group-hover:text-bgColor'
            >
              Blog
            </Link>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] dark:group-hover:text-bgColor'
            >
              Quyền riêng tư
            </Link>
          </li>
          <li className='group px-5 py-3 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
            <Link
              to='/'
              className='group-hover:text-[#424652] dark:group-hover:text-bgColor'
            >
              Nâng cấp
            </Link>
          </li>
        </ul>
      </div>
      <div className='text-[#515664] group text-sm font-semibold '>
        <button
          onClick={() => {
            dispatch(logOut())
            logoutUser(dispatch)
          }}
          to='/'
          className='group-hover:text-[#424652] dark:group-hover:text-bgColor block px-5 py-5'
        >
          Đăng xuất
        </button>
      </div>
    </div>
  )
}
