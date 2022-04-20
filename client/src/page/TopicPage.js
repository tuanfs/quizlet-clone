import React from 'react'
import TopicModal from '../components/topic/TopicModal'
import TopicSection from '../components/topic/TopicSection'
import Footer from '../components/layout/Footer'
import MetaData from '../components/MetaData'

export default function TopicPage() {
  return (
    <>
      <MetaData title='Chủ đề' />
      <div>
        <TopicModal />
        <div className='mt-header flex'>
          <div className='mx-auto w-[90%] sm:max-w-[1200px]'>
            <TopicSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
