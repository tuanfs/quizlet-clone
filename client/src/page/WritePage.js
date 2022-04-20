import React, {useState, useEffect} from 'react'
import SidebarWrite from '../components/courseCard/SidebarWrite'
import ContentWrite from '../components/courseCard/ContentWrite'
import {useParams, useLocation} from 'react-router-dom'
import {getAllTermByIdFolder, getListTerm} from '../features/folderSlice'
import {getCourseItem, getCourse, getCountItem} from '../features/courseSlice'
import {useDispatch, useSelector} from 'react-redux'
import MetaData from '../components/MetaData'

export default function WritePage() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const path = useLocation()
  const itemCourse = useSelector(getCourseItem)
  const listTerm = useSelector(getListTerm)
  const countItem = useSelector(getCountItem)
  const [indexItem, setIndexItem] = useState(0)
  const [arrRandom, setArrRandom] = useState([])
  const [arrFail, setArrFail] = useState([])
  const [arrSuccess, setArrSuccess] = useState([])
  const [status, setStatus] = useState(true)
  const [done, setDone] = useState(false)
  const [folderPage, setFolderPage] = useState(false)
  const [countItemValue, setCountItemValue] = useState(0)
  const [listInitial, setListInitial] = useState([])
  const [changeType, setChangeType] = useState(false)

  const [listCard, setListCard] = useState([])
  const [totalItem, setTotalItem] = useState([])
  useEffect(() => {
    setListCard(Object.keys(itemCourse).length > 0 && itemCourse.card)
    setTotalItem(Object.keys(itemCourse).length > 0 && itemCourse.total)
  }, [itemCourse])

  useEffect(() => {
    if (path.pathname.split('/').includes('folder')) {
      dispatch(getAllTermByIdFolder(id))
      setFolderPage(true)
    } else {
      setFolderPage(false)
      dispatch(getCourse(id))
    }
  }, [id, dispatch, path])

  useEffect(() => {
    if (folderPage) {
      if (listTerm) {
        setListCard(listTerm)
        setTotalItem(listTerm.length)
        setCountItemValue(listTerm.length)
        setListInitial(listTerm)
      }
    } else {
      if (itemCourse) {
        setListCard(itemCourse.card)
        setTotalItem(itemCourse.total)
        setCountItemValue(countItem)
        setListInitial(itemCourse.card)
      }
    }
  }, [folderPage, countItem, listTerm])

  useEffect(() => {
    let condition = null
    let number = 0
    let arrNew = []
    setArrRandom([])
    if (listCard) {
      for (let i = 0; i < listCard.length; i++) {
        if (arrNew.length === 0) {
          number = Math.floor(Math.random() * listCard.length)
          arrNew.push(number)
        } else {
          do {
            number = Math.floor(Math.random() * listCard.length)
            condition = arrNew.includes(number)
          } while (condition)
          arrNew.push(number)
        }
        setArrRandom(arrNew)
      }
    }
  }, [id, listCard])

  useEffect(() => {
    if (countItemValue > 0) {
      arrSuccess.length === countItemValue && setDone(true)
    }
  }, [arrSuccess])

  return (
    <>
      <MetaData title='Viết' />
      <div className='flex mt-header bg-bgColor dark:bg-bgDark h-screen'>
        <div className='mx-auto 2xl:w-[1300px] w-full xl:w-[95%]'>
          <div className='grid grid-cols-12 sm:gap-5'>
            <div className='col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-2'>
              <SidebarWrite
                countItem={countItemValue}
                arrFail={arrFail}
                arrSuccess={arrSuccess}
                totalItem={totalItem}
                setChangeType={setChangeType}
                changeType={changeType}
              />
            </div>
            <div className='col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-10'>
              <ContentWrite
                countItem={countItemValue}
                indexItem={indexItem}
                setIndexItem={setIndexItem}
                itemCard={listCard && listCard[arrRandom[indexItem]]}
                arrFail={arrFail}
                setArrFail={setArrFail}
                arrSuccess={arrSuccess}
                setArrSuccess={setArrSuccess}
                setListCard={setListCard}
                listCard={listCard}
                totalItem={totalItem}
                setTotalItem={setTotalItem}
                status={status}
                setStatus={setStatus}
                done={done}
                setDone={setDone}
                listCardInitial={listInitial}
                setChangeType={setChangeType}
                changeType={changeType}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
