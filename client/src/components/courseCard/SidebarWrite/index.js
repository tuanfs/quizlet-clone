import React, {useEffect, useRef} from "react"
import {BiChevronLeft} from "react-icons/bi"
import {BsPenFill} from "react-icons/bs"
import {useParams, useNavigate} from "react-router-dom"

export default function SidebarWrite({
  arrFail,
  arrSuccess,
  totalItem,
  countItem,
  changeType,
  setChangeType,
}) {
  const successRef = useRef(null)
  const failRef = useRef(null)
  const totalRef = useRef(null)
  const {id} = useParams()
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(`/course-detail/${id}`)
  }
  useEffect(() => {
    if (successRef.current && totalRef.current && failRef.current) {
      const totalPercent =
        (countItem - arrFail.length - arrSuccess.length) * (100 / countItem)
      const failPercent = arrFail.length * (100 / countItem)
      const successPercent = arrSuccess.length * (100 / countItem)
      totalRef.current.childNodes[0].style.width = `${totalPercent}%`
      totalRef.current.childNodes[1].style.width = `${100 - totalPercent}%`
      failRef.current.childNodes[0].style.width = `${failPercent}%`
      failRef.current.childNodes[1].style.width = `${100 - failPercent}%`
      successRef.current.childNodes[0].style.width = `${successPercent}%`
      successRef.current.childNodes[1].style.width = `${100 - successPercent}%`
    }
  }, [countItem, arrFail, arrSuccess])
  return (
    <div className="w-full shadow-lg bg-white sm:bg-bgColor pb-10 dark:bg-bgDark">
      <div className="flex flex-col sm:h-[90vh] h-[200px] sm:justify-between p-5">
        <div
          onClick={handleBackPage}
          className="flex items-center cursor-pointer group mb-4 sm:mt-0"
        >
          <span className="text-[#3dcfcf] group-hover:text-textHover mr-4 text-xl">
            <BiChevronLeft />
          </span>
          <span className="text-[#303545] text-sm font-medium dark:text-bgColor">
            Trở về
          </span>
        </div>
        <div className="my-auto inline-block">
          <div className="sm:flex items-center hidden">
            <span className="text-[#4257b2] text-xl mr-4">
              <BsPenFill />
            </span>
            <span className="text-[#303545] text-base font-medium dark:text-bgColor">
              Viết
            </span>
          </div>

          <div className="w-full block h-full sm:mt-8 sm:mb-1">
            <div className="mb-4">
              <div className={`w-full h-[12px] relative`} ref={totalRef}>
                <div className="absolute left-0 right-auto h-full bg-[#4257b2]"></div>
                <div className="absolute right-0 lefy-auto h-full w-full bg-[#c4cae6]"></div>
              </div>
              <div className="font-normal flex justify-between text-sm text-[#303545] dark:text-bgColor">
                <span>Còn lại</span>
                <span>{totalItem}</span>
              </div>
            </div>
            <div className="mb-4">
              <div className={`w-full h-[12px] relative`} ref={failRef}>
                <div className="absolute left-0 right-auto h-full bg-[#ff725b]"></div>
                <div className="absolute right-0 lefy-auto h-full w-full bg-[#f9d1ce]"></div>
              </div>
              <div className="font-normal flex justify-between text-sm text-[#303545] dark:text-bgColor">
                <span>Sai</span>
                <span>{arrFail && arrFail.length}</span>
              </div>
            </div>
            <div className=" sm:mb-4">
              <div ref={successRef} className={`w-full h-[12px] relative`}>
                <div className="absolute left-0 right-auto h-full bg-[#23b26d]"></div>
                <div className="absolute right-0 lefy-auto h-full w-full bg-[#bde3d3]"></div>
              </div>
              <div className="font-normal flex justify-between text-sm text-[#303545] dark:text-bgColor">
                <span>Đúng</span>
                <span>{arrSuccess && arrSuccess.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <button
            onClick={() => setChangeType(!changeType)}
            className="flex bg-white dark:bg-bgElement hover:text-textHover items-center w-full text-[#3dcfcf] border-[2px] border-[#d9dde8] text-sm font-semibold justify-center p-2 rounded-[4px]"
          >
            {!changeType ? (
              <span>Trả lời bằng tiếng Việt</span>
            ) : (
              <span>Trả lời bằng tiếng Anh</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
