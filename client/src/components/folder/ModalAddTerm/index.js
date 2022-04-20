import React, {useContext} from 'react'
import Modal from 'react-modal'
import {StateContext} from '../../StateContext'
import {BsXLg, BsPlusLg} from 'react-icons/bs'
import {FiMinus} from 'react-icons/fi'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCourse, getAllCourseList} from '../../../features/courseSlice'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {
  addCourseToFolder,
  removeCourseOutFolder,
  getFolder,
  getFolderItem
} from '../../../features/folderSlice'
import LoadingBtn from '../../commonsComponents/LoadingBtn'

const customStyles = {
  content: {
    width: '600px',
    height: '100vh',
    margin: 'auto',
    padding: '0',
    borderRadius: '0',
    bottom: '0',
    top: '0',
    border: 'none',
    overflow: 'scroll',
    backgroundColor: '#f6f7fb'
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
  const {id} = useParams()
  const dispatch = useDispatch()
  const folder = useSelector(getFolderItem)
  const listCourse = useSelector(getAllCourseList)
  const {showModalAddTerm, onShowModalAddTerm} = value
  const [listCourseValue, setListCourseValue] = useState(listCourse)
  const [folderValue, setFolderValue] = useState([])

  useEffect(() => {
    dispatch(getAllCourse())
  }, [dispatch, id])

  useEffect(() => {
    setListCourseValue(listCourse)
  }, [listCourse])

  useEffect(() => {
    setFolderValue(folder.folderItem)
  }, [folder])

  const handleAddToFolder = async (idCourse, e) => {
    e.currentTarget.childNodes[0].classList = 'block'
    e.currentTarget.childNodes[1].classList = 'hidden'
    e.currentTarget.disabled = true
    let buttonEl = e.currentTarget

    await dispatch(addCourseToFolder({idCourse, idFolder: id})).then((res) => {
      if (res.payload.success) {
        dispatch(getFolder(id))
      } else {
        dispatch(getFolder(id))
      }
    })

    buttonEl.disabled = false
    buttonEl.childNodes[0].classList = 'hidden'
    buttonEl.childNodes[1].classList = 'block'
  }

  const handleRemoveToFolder = async (idCourse, e) => {
    e.currentTarget.childNodes[0].classList = 'block'
    e.currentTarget.childNodes[1].classList = 'hidden'
    e.currentTarget.disabled = true
    let buttonEl = e.currentTarget

    await dispatch(removeCourseOutFolder({idCourse, idFolder: id})).then(
      (res) => {
        if (res.payload.success) {
          dispatch(getFolder(id))
        } else {
          dispatch(getFolder(id))
        }
      }
    )

    buttonEl.disabled = false
    buttonEl.childNodes[0].classList = 'hidden'
    buttonEl.childNodes[1].classList = 'block'
  }

  return (
    <div>
      <Modal
        isOpen={showModalAddTerm}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => onShowModalAddTerm(false)}
        className='modal-content'
        overlayClassName={`${
          showModalAddTerm ? 'animate-showModalY5' : 'animate-hiddeModalY5'
        }`}
        closeTimeoutMS={500}
      >
        <div className='bg-bgColor dark:bg-bgElement'>
          <div className='p-8 bg-[#4357b2] dark:bg-textPrimary flex justify-between items-center'>
            <h3 className='text-white dark:text-bgColor font-semibold text-[30px]'>
              Thêm vào học phần
            </h3>
            <button
              onClick={() => onShowModalAddTerm(false)}
              className='h-[40px] w-[40px] flex items-center justify-center cursor-pointer  rounded-full hover:bg-[#3d4d9a] dark:hover:bg-bgDark border-[#3d4d9a] dark:border-[#939bb4] border-[2px]'
            >
              <span className='text-white'>
                <BsXLg />
              </span>
            </button>
          </div>
          <div className='p-8'>
            <div className='text-center py-6 bg-white dark:bg-bgDarkSc'>
              <h3 className='border-b-[6px] dark:hover:text-textHover dark:text-bgColor text-base text-[#303545] uppercase font-semibold inline-block py-2 hover:border-textHover cursor-pointer hover:text-textHover border-[#3ecfcf]'>
                + Tạo học phần mới
              </h3>
            </div>
          </div>
          <ul className='mx-8 h-full'>
            {typeof listCourseValue === 'object' &&
              listCourseValue.length > 0 &&
              listCourseValue.map((item, index) => {
                const isAdd =
                  Object.keys(folderValue).length > 0 &&
                  folderValue.courses.some(
                    (itemFolder) =>
                      itemFolder.course._id.toString() === item._id.toString()
                  )

                return (
                  <li
                    key={index}
                    className='mb-4 flex items-center justify-between dark:bg-bgDarkSc bg-white py-5 px-5'
                  >
                    <h3 className='text-base dark:text-bgColor text-[#303545] font-semibold'>
                      {item.name}
                    </h3>

                    <button
                      onClick={(e) => {
                        handleAddToFolder(item._id.toString(), e)
                      }}
                      className={`border-[2px] p-3 hover:text-textHover rounded-[3px] text-[#3ecfcf] border-[#d8dce8] ${
                        isAdd ? 'hidden' : ''
                      }`}
                    >
                      <div className='hidden'>
                        <LoadingBtn width={'16px'} height={'16px'} />
                      </div>
                      <div>
                        <BsPlusLg />
                      </div>
                    </button>

                    <button
                      onClick={(e) =>
                        handleRemoveToFolder(item._id.toString(), e)
                      }
                      className={`${
                        isAdd ? '' : 'hidden'
                      } border-[2px] p-[10px] text-xl bg-textHover rounded-[3px] text-[#303545] border-textHover`}
                    >
                      <div className='hidden'>
                        <LoadingBtn width={'20px'} height={'20px'} />
                      </div>
                      <div>
                        <FiMinus />
                      </div>
                    </button>
                  </li>
                )
              })}
          </ul>
        </div>
      </Modal>
    </div>
  )
}
