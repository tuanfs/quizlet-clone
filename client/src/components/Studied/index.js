import React, {useEffect, useState} from 'react'
import CardList from '../CardList'
import {useSelector} from 'react-redux'
import {getLoadingCourse} from '../../features/courseSlice'
import LoadingPage from '../commonsComponents/LoadingPage'

export default function Studied({listCourse}) {
  const loading = useSelector(getLoadingCourse)
  const [elementPage, setElementPage] = useState(null)
  useEffect(() => {
    if (loading) {
      setElementPage(
        <div>
          <LoadingPage />
        </div>
      )
    } else if (listCourse && listCourse.length > 0) {
      setElementPage(<CardList listCourse={listCourse} />)
    } else {
      setElementPage(
        <div className='text-center text-lg text-textPrimary font-semibold'>
          Không có thẻ nào
        </div>
      )
    }
  }, [loading, listCourse])
  return (
    <div className='section'>
      <div>
        <h3 className='font-semibold mb-3 text-[#050505] text-xl dark:text-bgColor'>
          Các học phần đã nghiên cứu
        </h3>
      </div>
      {elementPage}
    </div>
  )
}
