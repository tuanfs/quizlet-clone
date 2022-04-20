import React, {useContext, useState} from 'react'
import {StateContext} from '../../StateContext'
import Modal from 'react-modal'
import {FiX} from 'react-icons/fi'
import {useDispatch} from 'react-redux'
import {createFolder} from '../../../features/folderSlice'
import {useNavigate} from 'react-router-dom'
import LoadingBtn from '../../commonsComponents/LoadingBtn'
import {getAllFolder} from '../../../features/folderSlice'
const customStyles = {
  content: {
    position: 'relative',
    outline: 'none',
    margin: 'auto',
    padding: '0'
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

export default function ModalCreate() {
  const value = useContext(StateContext)
  const {showModalCreateFolder, onShowModalCreateFolder} = value
  const dispatch = useDispatch()
  const [titleValue, setTitleValue] = useState('')
  const [descValue, setDescValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [statusCreate, setStatusCreate] = useState(false)
  const navigate = useNavigate()

  const handleCreate = async () => {
    setLoading(true)
    await dispatch(
      createFolder({name: titleValue, description: descValue})
    ).then((res) => {
      if (res.payload.data.success) {
        setStatusCreate(res.payload.success)
        onShowModalCreateFolder(false)
        dispatch(getAllFolder())
        setTitleValue('')
        setDescValue('')
        navigate(`/folder/${res.payload.data.folder._id}`)
      }
    })
    setLoading(false)
  }

  return (
    <div>
      <Modal
        isOpen={showModalCreateFolder}
        style={customStyles}
        ariaHideApp={false}
        className='modal-content-lg'
        onRequestClose={() => {
          setDescValue('')
          setTitleValue('')
          onShowModalCreateFolder(false)
        }}
        overlayClassName={`${
          showModalCreateFolder ? 'animate-showModalY5' : 'animate-hiddeModalY5'
        }`}
        closeTimeoutMS={500}
      >
        <div className='h-full w-full dark:bg-bgElement'>
          <div className='relative px-8 pt-6'>
            <div
              onClick={() => {
                setDescValue('')
                setTitleValue('')
                onShowModalCreateFolder(false)
              }}
              className='absolute top-0 right-0 cursor-pointer text-xl p-2 dark:text-bgColor'
            >
              <FiX />
            </div>
            <div className='w-full'>
              <h3 className='font-semibold dark:text-bgColor text-3xl text-[#303545]'>
                Tạo thư mục mới
              </h3>
              <div className='mb-4'>
                <label className='bg-[#f6f7fb] dark:bg-bgDark relative group w-full overflow-hidden pb-2 pt-4 mt-2 pl-5 rounded-[4px] block'>
                  <span
                    className={`text-sm font-semibold dark:text-[#d9dde8] mt-1 text-[#586380] absolute top-0 ${
                      titleValue ? 'block' : 'hidden'
                    }`}
                  >
                    Tiêu đề
                  </span>
                  <input
                    className='border-none dark:text-[#d9dde8] bg-transparent mt-1 w-full outline-none'
                    type='text'
                    placeholder='Nhập tiêu đề'
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                  />
                  <span className='block w-full absolute bottom-0 border-b-[2px] right-auto left-0 border-transparent group-focus-within:border-[#303545] dark:group-focus-within:border-bgColor'></span>
                </label>
              </div>
              <div>
                <label className='bg-[#f6f7fb] dark:bg-textPrimary relative group w-full overflow-hidden pb-2 pt-4 mt-2 pl-5 rounded-[4px] block'>
                  <span
                    className={`text-sm dark:text-[#d9dde8] font-semibold text-[#4c60b6] absolute my-1 top-0 ${
                      descValue ? 'block' : 'hidden'
                    }`}
                  >
                    Mô tả
                  </span>
                  <textarea
                    className={`border-none dark:text-[#d9dde8] max-h-[40px] resize-none overflow-hidden bg-transparent w-full outline-none ${
                      descValue ? 'mt-3' : ''
                    }`}
                    type='text'
                    placeholder='Nhập mô tả'
                    value={descValue}
                    onChange={(e) => setDescValue(e.target.value)}
                  />
                  <span className='block w-full absolute bottom-0 border-b-[2px] right-auto left-0 border-transparent group-focus-within:border-[#4c60b6]'></span>
                </label>
              </div>
            </div>
          </div>
          <div className='border-t boder-[#f6f7fb] flex justify-end  mt-5 p-5'>
            <button
              disabled={loading || !titleValue || !descValue ? true : false}
              onClick={handleCreate}
              className='disabled:bg-bgColor min-w-[100px] flex items-center justify-center dark:disabled:bg-[#586480] bg-[#4255ff] text-white rounded-[4px] px-5 py-[6px]'
            >
              {loading ? (
                <LoadingBtn width={'25px'} height={'25px'} />
              ) : (
                <span>Tạo thư mục</span>
              )}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
