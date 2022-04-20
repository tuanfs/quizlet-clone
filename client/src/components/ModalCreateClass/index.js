import React, {useContext, useState} from 'react'
import Modal from 'react-modal'
import {StateContext} from '../StateContext'
import {BsXLg} from 'react-icons/bs'
import LineFormControl from '../commonsComponents/LineFormControl'
import Button from '../commonsComponents/Button'
import {useDispatch} from 'react-redux'
import {createClass} from '../../features/classSlice'
import {useNavigate} from 'react-router-dom'
import LoadingBtn from '../commonsComponents/LoadingBtn'

const customStyles = {
  content: {
    margin: 'auto',
    padding: '0',
    borderRadius: '0',
    border: 'none',
    outline: 'none',
    overflow: 'scroll',
    backgroundColor: 'white'
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    zIndex: '100',
    display: 'flex',
    items: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(40,46,62,0.5)'
  }
}

export default function ModalAddTerm() {
  const value = useContext(StateContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {showModalCreateClass, onShowModalCreateClass} = value

  const [cbAcceptAddTerm, setCbAcceptAddTerm] = useState(false)
  const [cbAcceptAddMember, setCbAcceptAddMember] = useState(false)
  const [loading, setLoading] = useState(false)

  const [titleValue, setTitleValue] = useState('')
  const [descValue, setDescValue] = useState('')
  const [errorTitle, setErrorTitle] = useState('')

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    if (!titleValue) {
      setErrorTitle(true)
      setLoading(false)
    } else {
      await dispatch(
        createClass({
          name: titleValue,
          description: descValue,
          isMemberAddTerm: cbAcceptAddTerm,
          isMemberAddMember: cbAcceptAddMember
        })
      ).then((res) => {
        onShowModalCreateClass(false)
        setErrorTitle(false)
        setTitleValue('')
        setDescValue('')
        setCbAcceptAddMember(false)
        setCbAcceptAddTerm(false)
        navigate(`/class/${res.payload.data.newClass._id}`)
      })
      setErrorTitle(false)
      setLoading(false)
    }
  }

  return (
    <div>
      <Modal
        isOpen={showModalCreateClass}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => {
          setDescValue('')
          setTitleValue('')
          onShowModalCreateClass(false)
        }}
        className='modal-content-class'
        overlayClassName={`${
          showModalCreateClass ? 'animate-showModalY5' : 'animate-hiddeModalY5'
        }`}
        closeTimeoutMS={500}
      >
        <div className='dark:bg-bgDarkTh h-full'>
          <div className='p-8 bg-[#4357b2] dark:bg-textPrimary flex justify-between items-center'>
            <h3 className='text-white dark:text-bgColor font-semibold text-[30px]'>
              Tạo lớp mới
            </h3>
            <button
              onClick={() => {
                setDescValue('')
                setTitleValue('')
                onShowModalCreateClass(false)
              }}
              className='h-[40px] w-[40px] flex items-center justify-center cursor-pointer  rounded-full hover:bg-[#3d4d9a] dark:hover:bg-bgDarkSc dark:border-[#939bb4] border-[#3d4d9a] border-[2px]'
            >
              <span className='text-white'>
                <BsXLg />
              </span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='p-8'>
              <div className='w-full h-full'>
                <label className='w-full group py-2 relative block'>
                  <input
                    type='text'
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    className='outline-none dark:text-[#909ab2] text-base font-normal text-[#242631] bg-transparent border-none w-full'
                    placeholder='Nhập tên lớp...'
                  />
                  <LineFormControl
                    className={`${
                      errorTitle
                        ? 'border-t-[red] border-t-[2px]'
                        : 'dark:border-t-[#f5f6fa]'
                    }`}
                  />
                </label>
                {errorTitle ? (
                  <span className='text-sm font-normal text-[red] uppercase'>
                    Vui lòng nhập tên lớp
                  </span>
                ) : (
                  <span className='text-sm font-normal text-[#959cb5] uppercase'>
                    Tên lớp
                  </span>
                )}
              </div>
              <div className='w-full h-full mt-6'>
                <label className='w-full group py-2 relative mb-1 block'>
                  <input
                    type='text'
                    value={descValue}
                    onChange={(e) => setDescValue(e.target.value)}
                    className='outline-none dark:text-[#909ab2] text-base font-normal text-[#242631] bg-transparent border-none w-full placeholder:text-[#d9dde8]'
                    placeholder='Nhập mô tả tùy chọn...'
                  />
                  <LineFormControl className='dark:border-t-[#f5f6fa]' />
                </label>
                <span className='text-sm font-normal text-[#959cb5] uppercase'>
                  Mô tả
                </span>
              </div>
            </div>
            <div className='border-t-[2px] border-b-[2px] border-bgColor dark:border-bgDarkSc py-2 px-8'>
              <div className=''>
                <label className='flex items-center cursor-pointer justify-start text-[#282e3e] text-base font-light'>
                  <span
                    className={`w-[18px] flex items-center justify-center h-[18px] rounded-[2px] border-[2px] ${
                      cbAcceptAddTerm ? 'bg-[#596481]' : 'bg-transparent'
                    } border-[#596481] relative mr-4`}
                  >
                    {cbAcceptAddTerm && (
                      <span className='mb-1 block border-[2px] border-b-0 border-l-0 w-[50%] h-[60%] rotate-[135deg] border-white dark:border-bgDarkSc'></span>
                    )}
                  </span>
                  <input
                    type='checkbox'
                    className='hidden'
                    checked={cbAcceptAddTerm}
                    onChange={() => setCbAcceptAddTerm(!cbAcceptAddTerm)}
                  />
                  <span className='dark:text-[#f3f4f8]'>
                    Cho phép các thành viên trong lớp thêm và bỏ học phần
                  </span>
                </label>
              </div>
              <div className='mt-4'>
                <label className='flex items-center cursor-pointer justify-start text-[#282e3e] text-base font-light'>
                  <span
                    className={`w-[18px] flex items-center justify-center h-[18px] rounded-[2px] border-[2px] ${
                      cbAcceptAddMember ? 'bg-[#596481]' : 'bg-transparent'
                    } border-[#596481] relative mr-4`}
                  >
                    {cbAcceptAddMember && (
                      <span className='mb-1 block dark:border-bgDarkSc border-[2px] border-b-0 border-l-0 w-[50%] h-[60%] rotate-[135deg] border-white'></span>
                    )}
                  </span>
                  <input
                    type='checkbox'
                    className='hidden'
                    checked={cbAcceptAddMember}
                    onChange={() => setCbAcceptAddMember(!cbAcceptAddMember)}
                  />
                  <span className='dark:text-[#f3f4f8]'>
                    Cho phép các thành viên trong lớp thêm thành viên mới
                  </span>
                </label>
              </div>
            </div>
            <div className='mx-8'>
              <Button
                disabled={loading}
                className='flex justify-center items-center w-full mt-4 py-6 dark:text-textPrimary'
              >
                {loading ? (
                  <LoadingBtn width={'25px'} height={'25px'} />
                ) : (
                  <span>Tạo lớp</span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}
