import React, {useContext} from 'react'
import Modal from 'react-modal'
import {AiOutlineClose} from 'react-icons/ai'
import {StateContext} from '../StateContext'
import RegisterModal from '../RegisterModal'
import LoginModal from '../LoginModal'

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    zIndex: '20',
    padding: '0',
    margin: '0',
    border: 'none',
    borderRadius: '0',
    backgroundColor: 'white'
  },
  overlay: {
    zIndex: '100',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    backgroundColor: 'rgba(184,184,186, 0.7)'
  }
}

export default function AuthModal(props) {
  const value = useContext(StateContext)

  const {tabAuth, showModalAuth, onShowModalAuth, onTabAuth} = value

  return (
    <div>
      <Modal
        isOpen={showModalAuth}
        ariaHideApp={false}
        onRequestClose={() => onShowModalAuth(false)}
        style={customStyles}
        overlayClassName={`${
          showModalAuth ? 'animate-showModalY' : 'animate-hiddeModalY'
        }`}
        closeTimeoutMS={1000}
      >
        <div className='grid grid-cols-12 animate-showModal fixed top-0 right-0 left-0 bottom-0'>
          <div className="bg-[url('https://assets.quizlet.com/a/j/dist/app/i/signup/QZ_Auth_Light@2x.5e1b6810231a443.png')] h-screen hidden md:block w-full bg-cover bg-center md:col-span-6">
            <div className='flex flex-col justify-between h-full lg:p-20 p-5'>
              <h3 className='font-bold text-[#3b4c9b] text-[44px] lg:w-[400px] mb-7'>
                {tabAuth === 'register'
                  ? 'Quẳng gánh lo đi mà vui học. Hãy đăng ký ngay hôm nay.'
                  : 'Học hiệu quả mà thật thoải mái'}
              </h3>
              <p className='text-[30px] text-white font-bold'>Quizlet</p>
            </div>
          </div>
          <div className='md:col-span-6 col-span-12'>
            <div
              className='cursor-pointer fixed w-[50px] h-[50px] rounded-full hover:bg-bgColor top-0 right-0 flex items-center justify-center mt-2 mr-2 text-right '
              onClick={() => onShowModalAuth(false)}
            >
              <span className='p-3 inline-block'>
                <AiOutlineClose className='text-xl text-[#64708f]' />
              </span>
            </div>
            <div className='flex z-[10] overflow-scroll h-screen py-[60px]'>
              <div className='2xl:w-[60%] lg:w-[90%] w-[90%] z-[5] mx-auto'>
                <div>
                  <span
                    onClick={() => onTabAuth('register')}
                    className={`font-bold cursor-pointer text-2xl mr-8 ${
                      tabAuth === 'register'
                        ? 'text-[#303545]'
                        : 'text-[#929cb4]'
                    }`}
                  >
                    Đăng ký
                  </span>
                  <span
                    onClick={() => onTabAuth('login')}
                    className={`font-bold cursor-pointer text-2xl mr-8 ${
                      tabAuth === 'login' ? 'text-[#303545]' : 'text-[#929cb4]'
                    }`}
                  >
                    Đăng nhập
                  </span>
                </div>
                {tabAuth === 'login' ? (
                  <LoginModal />
                ) : (
                  <RegisterModal onTabAuth={onTabAuth} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
