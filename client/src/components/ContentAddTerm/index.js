import React, {useState, useEffect} from 'react'
import {BiLockOpen} from 'react-icons/bi'
import {IoAlertOutline} from 'react-icons/io5'
import ItemAddTerm from '../ItemAddTerm'
import LoadingBtn from '../commonsComponents/LoadingBtn'

export default function ContentAddTerm({
  onCreateCard,
  cardListRef,
  listTerm,
  setListTerm,
  handleKeyUp,
  editPage,
  loading,
  handleQuantity,
  missingQuantity
}) {
  const [elCard, setElCard] = useState([])

  useEffect(() => {
    if (listTerm) {
      setListTerm(listTerm)
    }
  }, [setListTerm, listTerm])

  useEffect(() => {
    const handleOnDeleteTerm = (e) => {
      if (listTerm.length > 5) {
        const result = listTerm.filter(
          (item, index) =>
            index !== Number(e.currentTarget.dataset.term.split('-')[1])
        )
        setListTerm(result)
      }
    }

    const result = listTerm.map((term, index) => (
      <ItemAddTerm
        term={term}
        key={index}
        index={index}
        handleKeyUp={handleKeyUp}
        onDeleteTerm={handleOnDeleteTerm}
        listTerm={listTerm}
        cardListRef={cardListRef}
        missingQuantity={missingQuantity}
      />
    ))
    setElCard(result)
  }, [listTerm, setListTerm])

  const handleAddCard = () => {
    console.log(handleQuantity)

    setListTerm([...listTerm, {term: '', defination: ''}])
  }

  // useEffect(() => {
  //   if (cardListRef.current && cardListRef.current.childNodes.length > 0) {
  //   }
  // }, [listTerm, cardListRef])

  return (
    <div className='mt-[100px] pb-10'>
      <div className='bg-white dark:bg-[#13141b] p-8 flex dark:border-[#929cb4] items-center justify-center shadow-[0_0.25rem_1rem_0_rgba(0,0,0,0.16)] border-[2px] border-dashed relative'>
        <div>
          <h3 className='text-[#303545] dark:text-bgColor font-bold text-xl'>
            Thêm sơ đồ và gắn nhãn
          </h3>
        </div>
        <div className='rounded-full absolute bottom-0 left-0 m-2 h-[30px] w-[30px] bg-textHover flex items-center justify-center'>
          <BiLockOpen />
        </div>
        <div className='rounded-full absolute cursor-pointer top-0 hover:bg-textHover hover:text-[#303545] hover:border-textHover right-0 m-2 h-[30px] w-[30px] border border-[#58d4d4] text-[#58d4d4] flex items-center justify-center'>
          <IoAlertOutline />
        </div>
      </div>
      <div ref={cardListRef} className='mt-8'>
        {elCard}
      </div>
      <div className='w-full py-8 flex dark:bg-[#2e3956] justify-center bg-white'>
        <button
          onClick={handleAddCard}
          className='font-semibold dark:text-bgColor dark:hover:text-textHover text-xl text-[#303545] py-2 border-b-[4px] uppercase cursor-pointer hover:text-textHover hover:border-textHover border-b-[#3dcfcf]'
        >
          + Thêm thẻ
        </button>
      </div>
      <div className='text-right mt-6'>
        <button
          disabled={loading}
          onClick={() => onCreateCard(listTerm)}
          className='rounded-[6px] dark:hover:bg-[#76dddd] text-[white] dark:text-textPrimary font-semibold text-base px-10 py-4 bg-[#3dcfcf] hover:bg-[#28a7a7]'
        >
          {loading ? (
            <LoadingBtn width={'20px'} height={'20px'} />
          ) : editPage ? (
            'Lưu'
          ) : (
            'Tạo'
          )}
        </button>
      </div>
    </div>
  )
}
