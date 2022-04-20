import React from 'react'
import Banner from '../components/homePageGuest/Banner'
import Container from '../components/homePageGuest/Container'
import Footer from '../components/layout/Footer'
import MetaData from '../components/MetaData'

export default function HomePageNonLogin() {
  return (
    <>
      <MetaData title='Trang chủ' />
      <div className='min-w-[375px]'>
        <Banner />
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
