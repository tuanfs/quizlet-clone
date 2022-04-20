import React, {useState} from 'react'

export default function HeaderAddTerm({
  titleValue,
  setTitleValue,
  descValue,
  setDescValue,
  errorTitle
}) {
  return (
    <div className='pt-10'>
      <div>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-xl dark:text-bgColor text-[#303545]'>
            Tạo học phần mới
          </h3>
        </div>
        <div className='grid grid-cols-12 mt-10'>
          <div className='col-span-6'>
            <div>
              <label className='block relative w-full group py-3'>
                <input
                  type='text'
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  className='outline-none border-none w-full bg-transparent font-normal text-base'
                  placeholder="Nhập tiêu đề, ví dụ 'Sinh học - Chương 22: Tiến hóa'"
                />
                <span
                  className={`group-focus-within:border-textHover ${
                    errorTitle ? 'border-[red]' : 'border-[#303545]'
                  }  border-b-[2px] border-t-[2px] border-b-transparent block w-full absolute bottom-0`}
                ></span>
              </label>
              {errorTitle ? (
                <span className='block text-sm text-[red] uppercase mt-1'>
                  Vui lòng nhập tiêu đề để tạo học phần
                </span>
              ) : (
                <span className='block text-sm text-[#939bb4] uppercase mt-1'>
                  Tiêu đề
                </span>
              )}
            </div>
            <div className='mt-5 relative'>
              <label
                htmlFor='describe'
                className='block w-full min-h-[30px] peer'
              >
                <div className='break-all invisible w-full h-full whitespace-wrap'>
                  {descValue}
                </div>
                <textarea
                  type='text'
                  id='describe'
                  className='absolute top-0 bottom-0 right-0 left-0 outline-none scroll-none block overflow-y-scroll resize-none border-none h-full w-full bg-transparent font-normal text-base'
                  placeholder='Thêm mô tả...'
                  value={descValue}
                  onDoubleClick={(e) => e.target.select()}
                  onChange={(e) => setDescValue(e.target.value)}
                />
              </label>
              <span className='peer-focus-within:border-textHover absolute border-[#303545] border-b-[2px] border-t-[2px] border-b-transparent block w-full bottom-[-4px]'></span>
              <span className='block text-sm absolute text-[#939bb4] bottom-[-25px] uppercase'>
                Mô tả
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
