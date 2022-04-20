import React, {useState, useEffect} from 'react'
import CardItem from '../../CardItem'
import Button from '../../../components/commonsComponents/Button'
import {useContext} from 'react'
import {StateContext} from '../../StateContext'

export default function ContentCreate({folder}) {
  const [sortValue, setSortValue] = useState(
    localStorage.getItem('SORT_FOLDER') && localStorage.getItem('SORT_FOLDER')
  )
  const {onShowModalAddTerm} = useContext(StateContext)
  const [filterValue, setFilterValue] = useState('')
  const [listCard, setListCard] = useState([])

  useEffect(() => {
    if (sortValue === 'alphabetical') {
      if (Object.keys(folder).length > 0) {
        const newArr = [...folder.folderItem.courses]
        const result = newArr.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
        setListCard(result)
      }
    } else {
      if (Object.keys(folder).length > 0) {
        setListCard(folder.folderItem.courses)
      }
    }
  }, [sortValue, folder])

  useEffect(() => {
    if (Object.keys(folder).length > 0) {
      setListCard(folder.folderItem.courses)
    }
  }, [folder])

  useEffect(() => {
    if (Object.keys(folder).length > 0) {
      const result = folder.folderItem.courses.filter((item) => {
        const name = item.course.name
        return name.toLowerCase().includes(filterValue.toLowerCase())
      })
      setListCard(result)
    }
  }, [filterValue, folder])

  return (
    <div className='grid grid-cols-12 mt-10'>
      <div
        className={`col-start-1 col-end-13 lg:col-end-10 ${
          folder.folderItem.courses.length > 0 ? '' : 'hidden'
        }`}
      >
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <h3 className='text-xs text-[#303545] dark:text-bgColor font-normal mr-4'>
                Sắp xếp
              </h3>
              <div className=''>
                <select
                  value={sortValue}
                  onChange={(e) => {
                    localStorage.setItem('SORT_FOLDER', e.target.value)
                    setSortValue(e.target.value)
                  }}
                  className='outline-none min-w-[130px] border-[#d9dde8] border-[2px] rounded-[4px] dark:bg-bgElement py-2 px-2 text-[#3ccfcf]'
                >
                  <option value='recently'>Gần đây</option>
                  <option value='alphabetical'>Bảng chữ cái</option>
                </select>
              </div>
            </div>
            <div className='w-[200px] md:w-[250px]'>
              <label className='group'>
                <input
                  type='text'
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className='w-full text-[#1a1d28] text-base py-2 outline-none bg-transparent border-none'
                  placeholder='Lọc'
                />
                <span className='border-b-[2px] group-focus-within:border-textHover border-[#303545] border-t-[2px] border-b-transparent block w-full'></span>
              </label>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-5 mt-10'>
          {listCard.length > 0 &&
            listCard.map((item, index) => (
              <CardItem key={index} itemCard={item} folderCp={true} />
            ))}
        </div>
      </div>
      <div
        className={`col-start-1 col-end-13 flex ${
          listCard.length === 0 && filterValue === '' ? 'block' : 'hidden'
        }`}
      >
        <div className='m-auto text-center'>
          <h3 className='text-textColor text-3xl font-bold'>
            Thư mục này chưa có học phần
          </h3>
          <p className='text-lg my-4 block text-[#ccc] font-medium'>
            Vui lòng nhấn vào nút phía dưới để thêm học phần
          </p>
          <Button
            className='w-[200px]'
            onClick={() => onShowModalAddTerm(true)}
          >
            Thêm học phần
          </Button>
        </div>
      </div>
    </div>
  )
}
