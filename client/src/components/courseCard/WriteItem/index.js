import React, {useState, useRef, useEffect} from 'react'
import {keyboardCase, keyboardLower} from '../../../commons/keyboard'
import {BsChevronBarUp} from 'react-icons/bs'
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'

export default function WriteItem({
  onNewCard,
  itemCard,
  countItem,
  typeLearn,
  onTypeLearn
}) {
  const [keyboard, setKeyboard] = useState(keyboardLower)
  const [valueInput, setValueInput] = useState('')
  const [result, setResult] = useState(null)
  const [hideForm, setHideForm] = useState(false)
  const inputRef = useRef(null)
  const timer = useRef(null)

  const handleClickKeyboard = (e) => {
    const valueKey = e.currentTarget.dataset.keyboard
    const resultArr = [...valueInput]
    resultArr.push(valueKey)
    const result = resultArr.join('')
    setValueInput(result)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      valueInput.toLocaleLowerCase().trim() ===
      itemCard.defination.toLocaleLowerCase().trim()
    ) {
      setResult(true)
      setHideForm(true)
    } else {
      setHideForm(true)
      setResult(false)
    }
  }

  const handleOnClickUp = () => {
    setKeyboard(!keyboard)
  }

  useEffect(() => {
    const handleChangeItem = () => {
      onNewCard()
      setResult(null)
      setValueInput('')
      setHideForm(false)
      onTypeLearn(!typeLearn)
    }
    if (result) {
      timer.current = setTimeout(
        () =>
          handleChangeItem(
            itemCard.idCardItem > countItem - 1 ? 0 : itemCard.idCardItem
          ),
        2000
      )
    }
    return () => {
      if (result) {
        clearTimeout(timer)
      }
    }
  }, [result])

  return (
    <div
      className={`bg-white dark:bg-bgDarkSc sm:rounded-[10px] w-full h-[470px] shadow-[0_0.25rem_1rem_0_rgba(48,53,69,0.08)] px-10 py-5`}
    >
      <div className={'flex flex-col h-full justify-between'}>
        <div>
          <h3 className='text-[#939bb4] dark:text-[#64708f] mb-5 text-base font-semibold'>
            Định nghĩa
          </h3>
          <p className='dark:text-bgColor font-normal text-lg'>
            {itemCard.term}
          </p>
        </div>
        <div>
          <div>
            <h3
              className={`text-[#939bb4] dark:text-[#64708f] font-semibold text-base ${
                hideForm ? 'hidden' : 'block'
              }`}
            >
              Đáp án của bạn
            </h3>
            <form onSubmit={handleSubmit}>
              <div className={`mt-5 ${result === null ? 'hidden' : 'block'}`}>
                <div className={`${result ? 'hidden' : ''}`}>
                  <h3 className='text-[#ff725b] text-base font-semibold mb-2'>
                    Đừng lo, bạn vẫn đang học mà!
                  </h3>
                  <div className='border-[2px] border-[#ff725b] cursor-pointer flex items-center px-5 py-3 rounded-[5px]'>
                    <span className='text-[#ff725b] mr-4'>
                      <AiOutlineClose />
                    </span>
                    <p className='text-base font-light text-textPrimary dark:text-bgColor'>
                      {valueInput}
                    </p>
                  </div>
                </div>
                <div className={`mt-5 ${result ? 'mb-[60px]' : ''}`}>
                  <div>
                    {result ? (
                      <p
                        className={`text-[#18ae79] text-base font-semibold mb-2`}
                      >
                        Làm tốt lắm
                      </p>
                    ) : (
                      <p className='text-[#939bb4] font-semibold text-base mb-2'>
                        Đáp án đúng
                      </p>
                    )}
                  </div>
                  <div className='border-[2px] border-[#18ae79] dark:bg-[#19804e] cursor-pointer flex items-center px-5 py-3 rounded-[5px]'>
                    <span className='text-[#18ae79] mr-4'>
                      <AiOutlineCheck />
                    </span>
                    <p className='text-base font-light text-textPrimary dark:text-bgColor'>
                      {itemCard.defination}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${hideForm ? 'hidden' : 'block'}`}>
                <div className='mt-5 flex flex-wrap mx-[-4px] h-[100px] keyboard overflow-y-scroll'>
                  {keyboard
                    ? keyboardLower.map((item, index) => (
                        <div
                          key={index}
                          data-keyboard={item}
                          onClick={handleClickKeyboard}
                          className='w-[40px] h-[40px] hover:bg-bgColor cursor-pointer flex items-center justify-center m-1 border-[#d9dde8] rounded-[6px] border'
                        >
                          <span className='text-[#586380] text-sm font-semibold'>
                            {item}
                          </span>
                        </div>
                      ))
                    : keyboardCase.map((item, index) => (
                        <div
                          key={index}
                          data-keyboard={item}
                          onClick={handleClickKeyboard}
                          className='w-[40px] h-[40px] hover:bg-bgColor cursor-pointer flex items-center justify-center m-1 border-[#d9dde8] rounded-[6px] border'
                        >
                          <span className='text-[#586380] text-sm font-semibold'>
                            {item}
                          </span>
                        </div>
                      ))}
                  <div
                    onClick={handleOnClickUp}
                    className='w-[40px] h-[40px] rounded-full hover:bg-[#ccc] cursor-pointer flex items-center justify-center m-1 border-[#d9dde8] border'
                  >
                    <span className='text-[#586380] text-sm font-bold'>
                      <BsChevronBarUp />
                    </span>
                  </div>
                </div>

                <div className='mt-10'>
                  <label className='px-4 py-4 group overflow-hidden bg-bgColor dark:bg-bgDark relative rounded-[6px] block'>
                    <input
                      type='text'
                      value={valueInput}
                      ref={inputRef}
                      onChange={(e) => setValueInput(e.target.value)}
                      placeholder='Nhập tiếng việt'
                      className='w-full outline-none placeholder:text-[#586380] dark:placeholder:text-[#d9dde8] text-base text-[#282e3e] dark:text-[#d9dde8] bg-transparent font-semibold'
                    />
                    <span className='block absolute bottom-0 border-b-[3px] right-0 left-0 border-b-transparent w-full group-focus-within:border-[#333]'></span>
                  </label>
                </div>
                <div className='flex justify-end items-center mt-5'>
                  <div>
                    <button className='font-semibold py-2 px-5 dark:text-[#a4adf8] hover:bg-[#edefff] rounded-[4px] text-sm text-[#4255ff] mr-5'>
                      Bạn không biết à?
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        handleSubmit(e)
                      }}
                      className='py-2 px-4 text-sm font-semibold rounded-[4px] bg-[#4255ff] hover:bg-[#423ed8] text-white'
                    >
                      Đáp án
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {result === false ? (
        <div className='fixed bottom-0 h-[70px] w-full bg-white dark:bg-bgDarkSc shadow-lg left-0 animate-fadeIn'>
          <div className='flex h-full text-base'>
            <div className='lg:min-w-[850px] sm:min-w-[90%] min-w-full px-10 md:px-0 mx-auto h-full flex items-center justify-between'>
              <h3 className='text-[#949cb5] dark:text-[#606c8a] font-semibold'>
                Nhấn phím bất kỳ để tiếp tục
              </h3>
              <button
                onClick={() => {
                  const handleChangeItem = () => {
                    onNewCard()
                    setResult(null)
                    setValueInput('')
                    setHideForm(false)
                    onTypeLearn(!typeLearn)
                  }
                  handleChangeItem()
                  setResult(null)
                }}
                className='rounded-[10px] bg-[#4255ff] text-white font-semibold text-base px-5 py-3'
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
