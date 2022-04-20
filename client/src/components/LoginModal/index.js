import React, {useState, useContext} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {GrFacebookOption} from 'react-icons/gr'
import {AiFillApple} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {loginUser} from '../../features/authSlice'
import {StateContext} from '../StateContext'
import setAuthToken from '../../commons/setAuthToken'
import {BsFillEyeSlashFill} from 'react-icons/bs'
import {loginUserGetData, getLoadingAuth} from '../../features/authSlice'
import LoadingBtn from '../../components/commonsComponents/LoadingBtn'

export default function LoginModal() {
  const value = useContext(StateContext)
  const {onShowModalAuth} = value
  const [showPassword, setShowPassword] = useState(false)
  const loading = useSelector(getLoadingAuth)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [messageErrors, setMessageErrors] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formValue = {email: emailValue, password: passwordValue}

    dispatch(loginUser(formValue)).then((res) => {
      if (!res.payload.status) {
        setMessageErrors('Thông tin tài khoản hoặc mật khẩu không chính xác')
      } else {
        setAuthToken(res.payload.data.accessToken)
        loginUserGetData(dispatch)
        localStorage.setItem('LOCAL_TOKEN', res.payload.data.accessToken)
        onShowModalAuth(false)
        navigate('/')
      }
    })
  }

  return (
    <div className='mt-10 pb-10'>
      <div>
        <div className='flex py-4 relative mt-6 cursor-pointer items-center border-[#e4e7eb] border-[2px] rounded-[4px] col-span-6 justify-center'>
          <FcGoogle className='text-3xl absolute left-[20px]' />
          <span className='text-[18px] font-semibold text-[#303545] ml-4'>
            Đăng nhập với Google
          </span>
        </div>
        <div className='flex mt-6 relative cursor-pointer py-4 items-center border-[#e4e7eb] border-[2px] rounded-[4px] col-span-6 justify-center'>
          <span className='inline-block bg-[#3c5897] absolute left-[20px] pt-2 pb-1 pr-1 pl-2 rounded-[2px]'>
            <GrFacebookOption className='text-white' />
          </span>
          <span className='text-[18px] font-semibold text-[#303545] ml-4'>
            Đăng nhập với Facebook
          </span>
        </div>
        <div className='flex py-4 relative mt-6 cursor-pointer items-center border-[#e4e7eb] border-[2px] rounded-[4px] col-span-6 justify-center'>
          <AiFillApple className='text-4xl absolute left-[20px]' />
          <span className='text-[18px] font-semibold text-[#303545] ml-4'>
            Đăng nhập với Apple
          </span>
        </div>
      </div>

      <form className='mt-7' onSubmit={handleSubmit}>
        <div className='my-4'>
          <div className='w-full group'>
            <input
              type='text'
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className='border-none  outline-none py-2 w-full text-base font-normal placeholder:text-[#d9dde8] text-textColor'
              placeholder='Nhập email hoặc tên người dùng của bạn'
            />
            <span className='block duration-100 ease-linear transition group-focus-within:border-[#fecd1f] w-full border-b-[2px] border-t-[2px] border-b-transparent border-[#333]'></span>
          </div>
          <label className='uppercase text-[#949eb6] text-xs font-normal block mt-3'>
            Tên người dùng
          </label>
        </div>
        <div className='mt-4'>
          <div className='w-full group'>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={passwordValue}
                className='border-none  outline-none py-2 w-full text-base font-normal placeholder:text-[#d9dde8] text-textColor'
                placeholder='Nhập mật khẩu'
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className='absolute cursor-pointer right-[8px] top-1/2 -translate-y-1/2 text-xl'
              >
                <BsFillEyeSlashFill />
              </span>
            </div>
            <span className='block duration-100 ease-linear transition group-focus-within:border-[#fecd1f] w-full border-b-[2px] border-t-[2px] border-b-transparent border-[#333]'></span>
          </div>
          <label className='block mt-3'>
            <div className='flex justify-between'>
              <span className='uppercase text-[#949eb6] text-xs font-normal'>
                {messageErrors || 'Mật khẩu'}
              </span>
              <Link
                to='/'
                className='text-xs text-[#3ecfcf] font-semibold hover:text-[#fecd1f]'
              >
                Bạn đã quên rồi à?
              </Link>
            </div>
          </label>
        </div>
        <div className='mt-2'>
          <button
            disabled={loading}
            className='bg-[#3ccfcf] block w-full hover:bg-[#29a7a7] text-white font-bold text-lg rounded-[6px] text-center py-5'
          >
            {loading ? (
              <div className='flex justify-center'>
                <LoadingBtn width='25px' height='25px'></LoadingBtn>
              </div>
            ) : (
              'Đăng nhập'
            )}
          </button>
        </div>
        <div className='flex justify-between mt-2'>
          <span className='text-[#373838] text-xs font-light'>
            Hãy nhớ đăng xuất trên thiết bị dùng chung
          </span>
          <Link
            to='/'
            className='text-xs text-[#3ecfcf] font-semibold hover:text-[#fecd1f]'
          >
            Sử dụng liên kết nhanh?
          </Link>
        </div>
      </form>
    </div>
  )
}
