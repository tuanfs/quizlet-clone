import React, {useState, useEffect, useRef, useMemo} from 'react'

export default function ChoiceItem({
  onNewCard,
  itemCard,
  countItem,
  typeLearn,
  onTypeLearn
}) {
  const [result, setResult] = useState(null)
  const [item, setItem] = useState([])
  const wrapperRef = useRef(null)
  let timer = useRef(0)

  useEffect(() => {
    const handleClick = () => {
      onNewCard()
      setResult(null)
      onTypeLearn(!typeLearn)

      if (wrapperRef.current) {
        const childEl = wrapperRef.current.childNodes
        childEl.forEach((item) => {
          item.classList.remove(
            'border-[#18ae79]',
            'bg-[#e6fcf4]',
            'cursor-default',
            'opacity-20',
            'border-[red]',
            'bg-[#f6e0e0]'
          )
          item.disabled = false
          item.classList.toggle('hover:border-[#586380]', 'border-[#edeff4]')
          delete item.dataset.click
        })
      }
    }
    if (wrapperRef.current) {
      const childEl = wrapperRef.current.childNodes
      if (result === null) {
        return 1
      } else if (result) {
        childEl.forEach((item) => {
          if (item.dataset.click === 'true') {
            item.classList.remove('border-[#edeff4]', 'hover:border-[#586380]')
            item.classList.add(
              'border-[#18ae79]',
              'bg-[#e6fcf4]',
              'dark:bg-[#19804e]'
            )
          } else {
            item.classList.add('opacity-20')
            item.classList.remove('hover:border-[#586380]')
          }
          item.disabled = true
          item.classList.add('cursor-default')
          delete item.dataset.click
        })
        timer.current = setTimeout(() => {
          handleClick()
        }, 2000)
      } else {
        childEl.forEach((item) => {
          if (item.dataset.click === 'true') {
            item.classList.remove('border-[#edeff4]', 'hover:border-[#586380]')
            item.classList.add(
              'border-[red]',
              'bg-[#f6e0e0]',
              'dark:border-[#c34731]',
              'dark:bg-bgElement'
            )
          } else if (
            item.dataset.choice.toLowerCase() === itemCard.term.toLowerCase()
          ) {
            item.classList.add(
              'border-[#18ae79]',
              'bg-[#e6fcf4]',
              'dark:bg-[#19804e]'
            )
            item.classList.remove('hover:border-[#586380]', 'border-[#edeff4]')
          } else {
            item.classList.add('opacity-20')
          }
          item.disabled = true
          item.classList.add('cursor-default')
          item.classList.remove('border-[#ff9c8c]', 'hover:border-[#586380]')
          delete item.dataset.click
        })
      }
    }
    return () => {
      setResult(null)
      clearTimeout(timer.current)
    }
  }, [result, countItem, itemCard.term, typeLearn, onNewCard, onTypeLearn])

  useEffect(() => {
    let randomChoice = []
    let defaulChoice = [0, 1, 2, 3]
    function randomChoiceFc(text) {
      const ab = text[Math.floor(Math.random() * text.length)]
      const arrNew = text.filter((item) => item !== ab)
      if (randomChoice.length < defaulChoice.length) {
        randomChoice.push(ab)
        randomChoiceFc(arrNew)
      } else {
        return 1
      }
      setItem(randomChoice)
    }
    randomChoiceFc(defaulChoice)
  }, [itemCard])

  const html2 = useMemo(() => {
    let html = []
    const handleClickChoice = (e) => {
      if (
        e.currentTarget.dataset.choice.toLowerCase().replace(/ /g, '') ===
        itemCard.term.toLowerCase().replace(/ /g, '')
      ) {
        setResult(true)
      } else {
        setResult(false)
      }
      e.currentTarget.dataset.click = true
    }

    item.forEach((item, index) => {
      html.push(
        <button
          key={index}
          onClick={handleClickChoice}
          data-choice={itemCard.choiceItem[item].term}
          data-click={false}
          className='md:col-span-6 col-span-12 border-[2px] hover:border-[#586380] cursor-pointer flex items-center px-5 py-3 border-[#edeff4] rounded-[5px]'
        >
          <div className='bg-[#edeff4] mr-4 h-[20px] w-[20px] text-xs font-semibold text-[#646f90] rounded-full flex items-center justify-center'>
            <span>{index + 1}</span>
          </div>
          <div>
            <p className='text-base font-light text-[#494d5a] dark:text-bgColor'>
              {itemCard.choiceItem[item].term}
            </p>
          </div>
        </button>
      )
    })
    return html
  }, [item, itemCard.choiceItem, itemCard.term])

  return (
    <div
      className={`bg-white dark:bg-bgDarkSc sm:rounded-[10px] w-full h-[470px] shadow-[0_0.25rem_1rem_0_rgba(48,53,69,0.08)] px-10 py-5`}
    >
      <div className='flex flex-col h-full justify-between'>
        <div>
          <h3 className='text-[#939bb4] mb-5 text-base font-semibold'>
            Định nghĩa
          </h3>
          <p className='text-lg dark:text-bgColor'>{itemCard.defination}</p>
        </div>
        <div>
          <div>
            <h3 className='text-[#586380] text-base dark:text-[#d9dde8] font-semibold'>
              Chọn thuật ngữ đúng
            </h3>
          </div>
          <div className='grid grid-cols-12 gap-6 mt-4' ref={wrapperRef}>
            {html2}
          </div>
        </div>
      </div>
      {result === false ? (
        <div className='fixed bottom-0 h-[70px] w-full bg-white dark:bg-bgDarkSc shadow-lg left-0 animate-fadeIn'>
          <div className='flex h-full text-base'>
            <div className='lg:min-w-[850px] sm:min-w-[90%] min-w-full px-10 md:px-0 mx-auto h-full flex items-center justify-between'>
              <h3 className='text-[#949cb5] dark:text-[#606c8a]'>
                Nhấn phím bất kỳ để tiếp tục
              </h3>
              <button
                onClick={() => {
                  const handleClick = () => {
                    onNewCard()
                    setResult(null)
                    onTypeLearn(!typeLearn)

                    if (wrapperRef.current) {
                      const childEl = wrapperRef.current.childNodes
                      childEl.forEach((item) => {
                        item.classList.remove(
                          'border-[#18ae79]',
                          'bg-[#e6fcf4]',
                          'cursor-default',
                          'opacity-20',
                          'border-[red]',
                          'bg-[#f6e0e0]'
                        )
                        item.disabled = false
                        item.classList.toggle(
                          'hover:border-[#586380]',
                          'border-[#edeff4]'
                        )
                        delete item.dataset.click
                      })
                    }
                  }
                  handleClick()
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
