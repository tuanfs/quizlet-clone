import React, {useState, useRef, useEffect} from 'react'
import {keyboardCase, keyboardLower} from '../../../commons/keyboard'
export default function ContentWrite({
  indexItem,
  setIndexItem,
  itemCard,
  arrFail,
  setArrFail,
  arrSuccess,
  setArrSuccess,
  setListCard,
  listCard,
  totalItem,
  status,
  setStatus,
  setTotalItem,
  done,
  countItem,
  listCardInitial,
  setDone,
  changeType
}) {
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const [termValue, setTermValue] = useState({})
  const handleClickKeyboard = (e) => {
    const inputNew = [...inputValue]
    const valueKey = e.currentTarget.dataset.keyboard
    inputNew.push(valueKey)
    setInputValue(inputNew.join(''))
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status && itemCard) {
      if (
        inputValue.toLowerCase().replace(/ /g, '') ===
        termValue.defination.toLowerCase().replace(/ /g, '')
      ) {
        setArrSuccess([...arrSuccess, itemCard._id])
        setIndexItem((indexItem) => indexItem + 1)
      } else {
        setArrFail([...arrFail, itemCard._id])
        setStatus(false)
      }
      inputRef.current.focus()
      setInputValue('')
      setTotalItem(totalItem - 1)
    } else {
      console.log('teeeee')
      if (
        inputValue.toLowerCase().replace(/ /g, '') ===
        termValue.defination.toLowerCase().replace(/ /g, '')
      ) {
        setIndexItem((indexItem) => indexItem + 1)
        setStatus(true)
        inputRef.current.focus()
        setInputValue('')
      } else {
        setStatus(false)
        inputRef.current.focus()
        setInputValue('')
      }
    }
  }

  useEffect(() => {
    if (indexItem > listCard.length - 1) {
      const newArr = listCard.filter((itemCard) => {
        return arrFail.find((item) => item === itemCard._id)
      })
      setListCard(newArr)
      setTotalItem(newArr.length)
      setArrFail([])
      setIndexItem(0)
    }
  }, [indexItem, setArrFail, setIndexItem, setTotalItem, setListCard])

  const handleContinue = () => {
    setListCard(listCardInitial)
    setTotalItem(countItem)
    inputRef.current.focus()
    setInputValue('')
    setDone(false)
    setArrFail([])
    setArrSuccess([])
  }

  useEffect(() => {
    if (changeType && Object.keys(itemCard).length > 0) {
      setTermValue({
        term: itemCard.defination,
        defination: itemCard.term
      })
    } else if (itemCard) {
      setTermValue({
        term: itemCard.term,
        defination: itemCard.defination
      })
    }
  }, [itemCard, changeType])

  return (
    <div className='sm:my-5 bg-white dark:bg-bgElement w-full sm:min-h-[450px]'>
      <div className={`${done ? 'hidden' : ''} px-8`}>
        <div className='py-8 flex justify-between border-b-[2px] border-[#ebe9e9]'>
          <h3 className='font-light text-[21px] text-[#303545] dark:text-bgColor'>
            <span className='font-normal block text-base text-[#939bb4]'>
              Thuật ngữ
            </span>
            {termValue && termValue.term}
          </h3>
          <span className='hover:text-textHover cursor-pointer text-sm text-[#3dcfcf] font-semibold'>
            không biết
          </span>
        </div>
        {status || (
          <div className='py-8 border-b-[2px] border-[#ebe9e9]'>
            <h3 className='font-light text-base text-[#969eb6]'>Đáp án đúng</h3>
            <h4 className='font-light text-lg text-[#303545] dark:text-bgColor'>
              {termValue && termValue.defination}
            </h4>
          </div>
        )}
        <div className={`flex py-10 mt-10`}>
          <form className='flex' onSubmit={handleSubmit}>
            <div className='flex-1'>
              <div className='flex w-full'>
                <div className='flex-1 mr-9'>
                  <label className='group relative w-full block'>
                    <input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className='text-lg text-[#1a1d28] dark:text-bgColor bg-transparent border-none outline-none w-full'
                    />
                    <span className='block group-focus-within:border-textHover absolute w-full border-b-[2px] border-t-[2px] border-b-transparent border-t-[#1a1d28]'></span>
                  </label>
                  {!changeType ? (
                    <span className='text-base font-light block mt-1 text-[#939bb4]'>
                      Nhập tiếng Việt
                    </span>
                  ) : (
                    <span className='text-base font-light block mt-1 text-[#939bb4]'>
                      Nhập tiếng Anh
                    </span>
                  )}
                </div>
              </div>
              <div className='sm:flex flex-wrap mt-5 hidden scroll-none overflow-y-scroll h-[120px]'>
                {keyboardLower.map((item, index) => (
                  <div
                    key={index}
                    data-keyboard={item}
                    onClick={handleClickKeyboard}
                    className='w-[32px] hover:bg-textHover h-[32px] hover:border-textHover cursor-pointer flex items-center justify-center m-1 border-[#939bb4] rounded-[6px] border-[2px]'
                  >
                    <span className='text-[#3b414e] dark:text-bgColor text-sm font-semibold'>
                      {item}
                    </span>
                  </div>
                ))}
                {keyboardCase.map((item, index) => (
                  <div
                    key={index}
                    data-keyboard={item}
                    onClick={handleClickKeyboard}
                    className='w-[32px] hover:bg-textHover h-[32px] hover:border-textHover cursor-pointer flex items-center justify-center m-1 border-[#939bb4] rounded-[6px] border-[2px]'
                  >
                    <span className='text-[#3b414e] dark:text-bgColor  text-sm font-semibold'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className='bg-[#3dcfcf] inline-block h-[48px] hover:bg-[#28a7a7] text-sm font-semibold text-white py-3 px-8 rounded-[4px]'
            >
              Trả lời
            </button>
          </form>
        </div>
      </div>

      <div
        className={`${
          done ? 'flex h-[450px] item-center justify-center' : 'hidden'
        }`}
      >
        <div className='text-center m-auto'>
          <h3 className='text-[#23b26d] mb-5 font-semibold text-xl'>
            Bạn đã hoàn thành bài viết của mình
          </h3>
          <button
            onClick={handleContinue}
            className='px-10 py-3 font-semibold text-base text-white rounded-[4px] bg-[#3dcfcf] hover:bg-[#28a7a7]'
          >
            Bắt đầu lại
          </button>
        </div>
      </div>
    </div>
  )
}
