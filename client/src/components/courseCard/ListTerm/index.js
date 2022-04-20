import React, {useRef, useEffect} from 'react'
import TermItem from '../TermItem'
import {Link, useParams} from 'react-router-dom'

export default function ListTerm({
  itemCourse = {},
  selectAll,
  setSelectAll,
  itemSelect,
  setItemSelect,
  setQuantitySelect,
  quantitySelect
}) {
  const listTermRef = useRef(null)
  const {id} = useParams()

  useEffect(() => {
    if (listTermRef) {
      const result = Array.from(listTermRef.current.childNodes).filter(
        (item) => {
          return JSON.parse(item.dataset.select) === true
        }
      )

      setQuantitySelect(result.length)
      setItemSelect(false)
    }
  }, [selectAll, listTermRef, itemSelect])

  useEffect(() => {
    if (listTermRef.current) {
      const quantity = Array.from(listTermRef.current.childNodes).length
      if (quantity === quantitySelect) {
        setSelectAll(true)
      } else {
        setSelectAll(false)
      }
    }
  }, [quantitySelect])
  return (
    <div>
      <div ref={listTermRef}>
        {itemCourse.card.map((item, index) => (
          <TermItem
            item={item}
            key={index}
            selectAll={selectAll}
            itemSelect={itemSelect}
            setItemSelect={setItemSelect}
            quantitySelect={quantitySelect}
            listTermRef={listTermRef}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <Link
          to={`/edit-term/${id}`}
          className='text-white text-base font-bold bg-[#4255ff] hover:bg-[#423ed8] rounded-[4px] text-center py-5 px-10'
        >
          Thêm hoặc xóa thuật ngữ
        </Link>
      </div>
    </div>
  )
}
