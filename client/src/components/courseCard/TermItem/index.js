import React, {useState, useRef, useEffect} from 'react'
import {IoMdCreate} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'
import {IoVolumeMediumOutline} from 'react-icons/io5'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {updateOneTerm} from '../../../features/courseSlice'
import {getCourse} from '../../../features/courseSlice'

export default function TermItem({
  item,
  selectAll,
  itemSelect,
  listTermRef,
  quantitySelect,
  setItemSelect
}) {
  const [onEdit, setOnEdit] = useState(false)
  const editText1 = useRef(null)
  const editText2 = useRef(null)
  const termRef = useRef(null)
  const btnEditText = useRef(null)
  const {id} = useParams()
  const {term, defination, _id} = item

  const itemValue = {term, defination}

  const [formValue, setFormValue] = useState({
    term,
    defination
  })

  useEffect(() => {
    if (item) {
      itemValue.term = item.term
      itemValue.defination = item.defination
      setFormValue({term: item.term || '', defination: item.defination || ''})
    }
  }, [item])

  const dispatch = useDispatch()
  const [select, setSelect] = useState(false)

  useEffect(() => {
    if (selectAll) {
      setSelect(true)
    } else {
      const quantity = Array.from(listTermRef.current.childNodes).length
      if (quantity === quantitySelect) {
        setSelect(false)
      }
    }
  }, [selectAll])

  useEffect(() => {
    const handleClickEditText = (e) => {
      if (btnEditText.current && btnEditText.current.contains(e.target)) {
        setOnEdit(true)
      } else if (editText1.current && editText2.current) {
        if (
          !editText1.current.contains(e.target) &&
          !editText2.current.contains(e.target)
        ) {
          setOnEdit(false)

          dispatch(
            updateOneTerm({
              id,
              value: {
                _id,
                term: formValue.term,
                defination: formValue.defination
              }
            })
          ).then((res) => {
            if (res.payload.data.status) {
              dispatch(getCourse(id))
            }
          })
        }
      }
    }
    window.addEventListener('click', handleClickEditText)

    return () => window.removeEventListener('click', handleClickEditText)
  }, [formValue])

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.keyCode === 13)
        if (onEdit) {
          dispatch(
            updateOneTerm({
              id,
              value: {
                _id,
                term: formValue.term,
                defination: formValue.defination
              }
            })
          ).then((res) => {
            if (res.payload.data.status) {
              dispatch(getCourse(id))
            }
          })
          setOnEdit(false)
        }
    }
    window.addEventListener('keydown', handleEnter)
    return () => window.removeEventListener('keydown', handleEnter)
  }, [onEdit, formValue])

  return (
    <div data-select={select}>
      <div className='grid grid-cols-12 px-4 py-4 bg-white dark:bg-bgElement shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.08)] my-4 rounded-[4px]'>
        <div className='col-span-4 border-r-[2px] text-[#1a1d28] dark:text-bgColor border-[#ccc]'>
          {onEdit ? (
            <div className='mr-5'>
              <div
                ref={editText1}
                className='peer outline-none'
                role='textbox'
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={(e) => {
                  e.preventDefault()
                  itemValue.term = e.currentTarget.textContent

                  setFormValue({
                    term: e.currentTarget.textContent,
                    defination: formValue.defination
                  })
                }}
              >
                {itemValue.term}
              </div>
              <span className='border-[#333] dark:border-bgColor border-b-[2px] border-t-[2px] peer-focus-within:border-textHover border-b-transparent block w-full'></span>
            </div>
          ) : (
            <h3 className='text-base font-normal' ref={termRef}>
              {formValue.term}
            </h3>
          )}
        </div>
        <div className='col-span-6 ml-8 text-[#1a1d28] dark:text-bgColor'>
          {onEdit ? (
            <>
              <div
                ref={editText2}
                className='peer outline-none mr-5'
                role='textbox'
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={(e) => {
                  itemValue.defination = e.currentTarget.textContent
                  setFormValue({
                    term: formValue.term,
                    defination: e.currentTarget.textContent
                  })
                }}
              >
                {itemValue.defination}
              </div>
              <span className='border-[#333] dark:border-bgColor border-b-[2px] border-t-[2px] peer-focus-within:border-textHover border-b-transparent block w-full'></span>
            </>
          ) : (
            <h3 className='font-normal text-lg'>{formValue.defination}</h3>
          )}
        </div>
        <div className='col-span-2 flex justify-end items-center'>
          <button
            onClick={() => {
              setSelect(!select)
              setItemSelect(true)
            }}
            className={`mr-2 hover:text-textHover text-lg ${
              select ? 'text-textHover' : ''
            }`}
          >
            <AiFillStar />
          </button>
          <button className='mr-2 hover:text-textHover text-lg'>
            <IoVolumeMediumOutline />
          </button>

          <button ref={btnEditText} className='hover:text-textHover text-lg'>
            <IoMdCreate className='btn-on-edit' />
          </button>
        </div>
      </div>
    </div>
  )
}
