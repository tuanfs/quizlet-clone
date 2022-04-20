import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import BannerGuest from '../components/homePageGuest/Banner'
import MetaData from '../components/MetaData'

import Achievement from '../components/Achivement'
import RecentlyItem from '../components/RecentlyItem'
import Studied from '../components/Studied'
import Footer from '../components/layout/Footer'
import {getAllCourse, getAllCourseList} from '../features/courseSlice'
import {useDispatch, useSelector} from 'react-redux'
import Container from '../components/homePageGuest/Container'
import {getIsAuthentication} from '../features/authSlice'

export default function Home() {
  const dispatch = useDispatch()
  const listCourse = useSelector(getAllCourseList)
  const isAuthenticated = useSelector(getIsAuthentication)
  const [isAuthenticatedValue, setIsAuthenticatedValue] = useState(null)

  useEffect(() => {
    if (isAuthenticatedValue) {
      dispatch(getAllCourse())
    }
  }, [dispatch, isAuthenticatedValue])

  useEffect(() => {
    setIsAuthenticatedValue(isAuthenticated)
  }, [isAuthenticated])

  return (
    <>
      <MetaData title='Trang chủ'></MetaData>
      <div
        className={`mt-header dark:bg-bgDark ${
          isAuthenticatedValue ? 'flex' : 'hidden'
        }`}
      >
        <div className='mx-auto w-[90%] sm:max-w-[1200px]'>
          <Banner />
          <Achievement />
          {listCourse && <RecentlyItem listCourse={listCourse} />}
          {listCourse && <Studied listCourse={listCourse} />}
        </div>
      </div>
      <div
        className={`min-w-[375px] ${isAuthenticatedValue ? 'hidden' : 'block'}`}
      >
        <BannerGuest />
        <div className='flex mt-20'>
          <div className='mx-auto w-[90%] sm:max-w-[1200px]'>
            <Container />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
