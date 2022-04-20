import React, {useEffect, useState} from 'react'
import HeaderCreate from '../../src/components/folder/HeaderCreate'
import ContentCreate from '../components/folder/ContentCreate'
import LoadingPage from '../components/commonsComponents/LoadingPage'
import MetaData from '../components/MetaData'

import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {
  getFolder,
  getFolderItem,
  getLoadingFolder
} from '../features/folderSlice'

export default function FolderPage() {
  const {id} = useParams()
  const folder = useSelector(getFolderItem)
  const loading = useSelector(getLoadingFolder)
  const [folderList, setFolderList] = useState({})
  const [elementPage, setElementPage] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFolder(id))
  }, [id, dispatch])

  useEffect(() => {
    setFolderList(folder)
  }, [folder])

  useEffect(() => {
    if (loading) {
      setElementPage(
        <div className='py-10'>
          <LoadingPage />
        </div>
      )
    } else if (Object.keys(folderList).length > 0) {
      setElementPage(
        <div>
          <HeaderCreate folder={folderList} />
          <ContentCreate folder={folderList} />
        </div>
      )
    } else if (!loading) {
      setElementPage(
        <div className='flex justify-center items-center my-10'>
          {' '}
          <h4 className='text-xl text-textColor'>
            Không tìm thấy học phần, vui lòng thử lại
          </h4>
        </div>
      )
    }
  }, [folderList])

  return (
    <>
      <MetaData title='Thư mục của bạn' />
      <div className='flex mt-header dark:bg-bgDark h-screen'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto'>
          {elementPage}
        </div>
      </div>
    </>
  )
}
