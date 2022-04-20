import React from 'react'
import {Link} from 'react-router-dom'

export default function ListTerm(props) {
  const {footerTitle, list = [], tab, listEmpty} = props
  const tabUrl = {
    term: '/course-detail/${item._id}',
    folder: '/folder/${item._id}',
    class: '/class/${item._id}'
  }

  return (
    <>
      <div className=''>
        <ul className='w-full absolute pb-9 h-full overflow-scroll'>
          {list.length === 0 ? (
            <div className='w-full h-full flex items-center justify-center'>
              <div>
                <span className='text-[120px] flex items-end justify-center'>
                  {listEmpty.icon}
                </span>
                <p className='block my-5 text-center'>{listEmpty.title}</p>
                <button
                  onClick={() => {
                    listEmpty.onClick(true)
                  }}
                  className='outline-none border text-[#9ea9db] text-base font-semibold block border-borderColor hover:bg-bgColor rounded-[4px] px-5 py-2'
                >
                  {listEmpty.button}
                </button>
              </div>
            </div>
          ) : (
            list.map((item, index) => (
              <li key={index}>
                <Link
                  to={`${eval('`' + tabUrl[tab] + '`')}`}
                  className='py-3 block px-5 hover:bg-bgColor dark:hover:bg-[#2e3956]'
                >
                  <h3 className='font-bold text-textPrimary dark:text-white text-lg'>
                    {item.name}
                  </h3>
                  <div className='flex items-center mt-1'>
                    <div className='w-[30px] h-[30px] rounded-100 mr-3'>
                      <img
                        src={
                          'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-1024.png'
                        }
                        alt='Avatar'
                        className='h-full w-full'
                      />
                    </div>
                    <p className='text-[#b9b8b8]'>
                      {item.user.fullName || 'Name author'}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
        <div className='absolute bottom-0 py-2 px-6 border-t-[1px] bg-white border-[#ccc] w-full'>
          <h3 className='font-semibold cursor-pointer text-base text-colorPrimary dark:text-[#7b89c9] dark:hover:text-colorPrimary hover:text-[#0a17a1]'>
            {' '}
            {footerTitle}{' '}
          </h3>
        </div>
      </div>
    </>
  )
}
