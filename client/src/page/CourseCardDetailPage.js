import React, {useEffect, useState} from 'react'
import HeaderCard from '../components/courseCard/HeaderCard'
import ContentCard from '../components/courseCard/ContentCard'
import {useDispatch, useSelector} from 'react-redux'
import {
  getCourseItem,
  getCourse,
  getLoadingCourse
} from '../features/courseSlice'
import {useParams} from 'react-router-dom'
import Footer from '../components/layout/Footer'
import LoadingPage from '../components/commonsComponents/LoadingPage'
import MetaData from '../components/MetaData'

export default function CourseCardDetailPage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const itemCourse = useSelector(getCourseItem)
  const loading = useSelector(getLoadingCourse)
  const [elementPage, setElementPage] = useState(null)
  useEffect(() => {
    dispatch(getCourse(id))
  }, [id, dispatch])
  useEffect(() => {
    if (loading) {
      setElementPage(
        <div className='py-10'>
          <LoadingPage />
        </div>
      )
    } else if (Object.keys(itemCourse).length > 0) {
      setElementPage(
        <div>
          <HeaderCard itemCourse={itemCourse} />
          <ContentCard itemCourse={itemCourse} />
        </div>
      )
    }
  }, [loading, itemCourse])

  return (
    <>
      <MetaData title='Chi tiết khóa học'></MetaData>
      <div className='mt-header flex bg-bgColor dark:bg-bgDark'>
        <div className='mx-auto w-[90%] sm:max-w-[1180px]'>{elementPage}</div>
      </div>
      <Footer />
    </>
  )
}
