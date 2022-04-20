import React, {useEffect, useState} from 'react'
import SideBarFlash from '../components/courseCard/SideBarFlash'
import ContentFlash from '../components/courseCard/ContentFlash'
import {getAllTermByIdFolder, getListTerm} from '../features/folderSlice'
import MetaData from '../components/MetaData'

import {
  getCourseItem,
  getCourse,
  getCountItem,
  getCardByIdFolder
} from '../features/courseSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useLocation} from 'react-router-dom'

export default function FlashPage() {
  const dispatch = useDispatch()
  const [message, setMessage] = useState(false)
  const [randomSlide, setRandomSlide] = useState(false)
  const [playSlide, setPlaySlide] = useState(false)
  const [folderPage, setFolderPage] = useState(false)
  const {id} = useParams()
  const path = useLocation()
  const [currentIndex, setCurrentIndex] = useState(
    Number(localStorage.getItem(`currentIndexCard-${id}`)) || 1
  )
  const itemCourse = useSelector(getCourseItem)
  const countItem = useSelector(getCountItem)
  const listTerm = useSelector(getListTerm)
  const [listValue, setListValue] = useState([])
  const [countValue, setCountValue] = useState(0)

  useEffect(() => {
    localStorage.setItem(`currentIndexCard-${id}`, currentIndex)
  }, [currentIndex, id])

  useEffect(() => {
    if (folderPage) {
      if (listTerm) {
        setListValue(listTerm)
        setCountValue(listTerm.length)
      }
    } else {
      if (itemCourse) {
        setCountValue(countItem)
        setListValue(itemCourse.card)
      }
    }
  }, [listTerm, countItem, itemCourse])

  useEffect(() => {
    if (path.pathname.split('/').includes('folder')) {
      dispatch(getCardByIdFolder(id))
      setFolderPage(true)
      dispatch(getAllTermByIdFolder(id))
    } else {
      setFolderPage(false)
      dispatch(getCourse(id))
    }
  }, [path, dispatch, id])

  return (
    <>
      <MetaData title='Thẻ ghi nhớ' />
      <div className='flex overflow-hidden mt-header bg-bgColor dark:bg-bgDark'>
        <div className='mx-auto 2xl:w-[1300px] w-full lg:w-[80%]'>
          <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-4 md:col-span-3 2xl:col-span-2'>
              {listValue && listValue.length > 0 && (
                <SideBarFlash
                  listItem={listValue}
                  folderPage={folderPage}
                  countItem={countValue}
                  currentIndex={currentIndex}
                  onPlaySlide={setPlaySlide}
                  onSetCurrentIndex={setCurrentIndex}
                  playSlide={playSlide}
                  setMessage={setMessage}
                  randomSlide={randomSlide}
                  setRandomSlide={setRandomSlide}
                  setPlaySlide={setPlaySlide}
                />
              )}
            </div>

            <div className='col-span-8 md:col-span-7'>
              {listValue && listValue.length > 0 && (
                <ContentFlash
                  listItem={listValue}
                  setListValue={setListValue}
                  countItem={countValue}
                  onSetCurrentIndex={setCurrentIndex}
                  currentIndex={currentIndex}
                  playSlide={playSlide}
                  onPlaySlide={setPlaySlide}
                  message={message}
                  setMessage={setMessage}
                  randomSlide={randomSlide}
                  setPlaySlide={setPlaySlide}
                />
              )}
            </div>

            <div className='sm:col-span-3'></div>
          </div>
        </div>
      </div>
    </>
  )
}
