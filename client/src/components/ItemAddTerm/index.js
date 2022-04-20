import React, {useState, useEffect} from 'react'
import {
  IoTrashOutline,
  IoReorderTwoOutline,
  IoImageOutline
} from 'react-icons/io5'

export default function ItemAddTerm({
  index,
  term,
  onDeleteTerm,
  handleKeyUp,
  missingQuantity
}) {
  const [fileSelected, setFileSelected] = useState(null)
  const [urlPreview, setUrlPreview] = useState(null)

  useEffect(() => {
    let objectUrl = null
    if (fileSelected) {
      objectUrl = URL.createObjectURL(fileSelected)
      setUrlPreview(objectUrl)
    }
    return () => {
      if (fileSelected) {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [fileSelected])

  return (
    <div
      className='bg-white dark:bg-[#2e3956] rounded-[10px] my-4'
      data-term={`term-${index}`}
    >
      <div className='py-4 border-b-[2px] px-8 border-bgColor flex justify-between'>
        <div>
          <span className='text-[#939bb4] text-base font-semibold'>
            {index + 1}
          </span>
        </div>
        <div className='text-[#d9dde7] text-xl flex items-center'>
          <span className='mr-4'>
            <IoReorderTwoOutline />
          </span>
          <button data-term={`term-${index}`} onClick={(e) => onDeleteTerm(e)}>
            <IoTrashOutline />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-8 py-4 px-8'>
        <div className='col-span-12 md:col-span-6 '>
          <div className='relative group error-child'>
            <div
              className='py-2 dark:text-[#c2c6d1] border-none outline-none'
              role='textbox'
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => handleKeyUp(e.target.textContent, index, 'term')}
            >
              {term.term}
            </div>
            <span className='block group-focus-within:border-textHover absolute bottom-0 border-inherit w-full border-b-[2px] border-t-[2px] border-b-transparent'></span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-[#979eb7] text-sm font-normal'>
              Thuật ngữ
            </span>
            {missingQuantity ? (
              <span className='text-sm font-normal text-red-500'>
                Vui lòng nhập tối thiểu 5 thuật ngữ
              </span>
            ) : (
              <span className='text-[#41cfcf] text-sm font-normal'>
                Tiếng Anh
              </span>
            )}
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 flex'>
          <div className='flex-1 mr-6'>
            <div className='relative group error-child'>
              <div
                className='py-2 border-none outline-none dark:text-[#c2c6d1]'
                role='textbox'
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={(e) =>
                  handleKeyUp(e.target.textContent, index, 'defination')
                }
              >
                {term.defination}
              </div>
              <span className='block group-focus-within:border-textHover absolute bottom-0 border-inherit w-full border-b-[2px] border-t-[2px] border-b-transparent'></span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-[#979eb7] text-sm font-normal'>
                Thuật ngữ
              </span>
              {missingQuantity ? (
                <span className='text-sm font-normal text-red-500'>
                  Vui lòng nhập tối thiểu 5 thuật ngữ
                </span>
              ) : (
                <span className='text-[#41cfcf] text-sm font-normal'>
                  Tiếng Việt
                </span>
              )}
            </div>
          </div>
          <div
            className={`h-[58px] relative w-[85px] text-center border-[2px]  ${
              urlPreview ? 'border-none' : 'border-dashed dark:border-[#c2c6d1]'
            }`}
          >
            <label htmlFor={`file${index}`} className='cursor-pointer'>
              <span className='absolute dark:text-[#c2c6d1] right-[30%] mt-1 text-3xl'>
                <IoImageOutline />
              </span>
              <span className='uppercase relative top-[28px] dark:text-[#c2c6d1] font-normal text-xs'>
                Hình ảnh
              </span>
              <input
                className='hidden'
                type='file'
                id={`file${index}`}
                onChange={(e) => setFileSelected(e.target.files[0])}
              />
              {urlPreview && (
                <div className='absolute top-0 right-0 bottom-0 w-full h-full'>
                  <img
                    src={urlPreview}
                    className='h-full w-full object-cover'
                    alt='Term'
                  />
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
