import React, {useEffect, useState} from 'react'
import ChoiceList from '../components/courseCard/ChoiceList'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useLocation} from 'react-router-dom'
import {getListTerm, getAllTermByIdFolder} from '../features/folderSlice'
import MetaData from '../components/MetaData'

import {
  getCourseItem,
  getCourse,
  getCardByIdFolder
} from '../features/courseSlice'

export default function LearnPage() {
  const {id} = useParams()
  const itemCourse = useSelector(getCourseItem)
  const dispatch = useDispatch()
  const path = useLocation()
  const listTerm = useSelector(getListTerm)
  const [folderPage, setFolderPage] = useState(false)
  const [listTermValue, setListTermValue] = useState([])
  const [countValue, setCountValue] = useState(0)

  useEffect(() => {
    if (path.pathname.split('/').includes('folder')) {
      dispatch(getCardByIdFolder(id))
      dispatch(getAllTermByIdFolder(id))
      setFolderPage(true)
    } else {
      dispatch(getCourse(id))
      setFolderPage(false)
    }
  }, [path, dispatch, id])

  useEffect(() => {
    if (folderPage) {
      if (listTerm) {
        setListTermValue(listTerm)
        setCountValue(listTerm.length)
      }
    } else {
      if (Object.keys(itemCourse).length > 0) {
        setListTermValue(itemCourse.card)
        setCountValue(itemCourse.total)
      }
    }
  }, [listTerm, folderPage, itemCourse])

  return (
    <>
      <MetaData title={`Học`} />
      <div className='mt-header h-screen dark:bg-bgDark'>
        <div className='flex'>
          <div className='mx-auto lg:w-[850px] sm:w-[90%] w-full'>
            <ChoiceList listItem={listTermValue} countItem={countValue} />
          </div>
        </div>
      </div>
    </>
  )
}
