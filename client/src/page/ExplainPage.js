import React from 'react'
import Banner from '../components/explain/Banner'
import Popular from '../components/explain/Popular'
import Questions from '../components/explain/Questions'
import ExplainTab from '../components/explain/ExplainTab'
import Footer from '../components/layout/Footer'
import MetaData from '../components/MetaData'

export default function ExplainPage() {
  return (
    <>
      <MetaData title='Giải thích'></MetaData>
      <div className='mt-header flex bg-white dark:bg-[#13141b]'>
        <div className='mx-auto w-[90%] sm:max-w-[1024px]'>
          <Banner />
        </div>
      </div>
      <div className='flex bg-bgColor dark:bg-[#13141b] pb-5'>
        <div className='mx-auto w-[90%] sm:max-w-[1024px]'>
          <Popular />
          <Questions />
          <ExplainTab />
        </div>
      </div>
      <Footer />
    </>
  )
}
