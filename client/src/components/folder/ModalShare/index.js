import React, {useContext, useRef} from "react"
import Modal from "react-modal"
import {StateContext} from "../../StateContext"
import {BsXLg} from "react-icons/bs"
import {FaFacebookSquare, FaTwitter} from "react-icons/fa"

const customStyles = {
  content: {
    margin: "auto",
    padding: "0",
    borderRadius: "0",
    border: "none",
    backgroundColor: "#f6f7fb",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    zIndex: "100",
    display: "flex",
    items: "center",
    justifyContent: "center",
    backgroundColor: "rgba(40,46,62,0.5)",
  },
}
export default function ModalShare() {
  const value = useContext(StateContext)
  const {showModalShare, onShowModalShare} = value
  const linkShareRef = useRef(null)
  const handleSelect = () => {
    if (linkShareRef.current) {
      linkShareRef.current.select()
      navigator.clipboard.writeText(linkShareRef.current.value)
    }
  }
  return (
    <div>
      <Modal
        isOpen={showModalShare}
        style={customStyles}
        ariaHideApp={false}
        className="modal-content-share"
        onRequestClose={() => onShowModalShare(false)}
        overlayClassName={`${
          showModalShare ? "animate-showModalY5" : "animate-hiddeModalY5"
        }`}
        closeTimeoutMS={500}
      >
        <div className="bg-bgColor dark:bg-[#1b1d28] h-full">
          <div className="p-8 bg-[#4357b2] dark:bg-textPrimary flex justify-between items-center">
            <h3 className="text-white dark:text-bgColor font-semibold text-[30px]">
              Chia sẻ thư mục này
            </h3>
            <button
              onClick={() => onShowModalShare(false)}
              className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer  rounded-full hover:bg-[#3d4d9a] dark:hover:bg-bgDarkSc border-[#3d4d9a] dark:border-[#939bb4] border-[2px]"
            >
              <span className="text-white">
                <BsXLg />
              </span>
            </button>
          </div>
          <div className="">
            <div className="flex p-8 items-start justify-between border-b-[2px] border-[#e7e7e7] dark:border-[#13141b]">
              <div className="flex-1 mr-5">
                <label className="block group w-full pb-3 relative">
                  <input
                    className="w-full text-[#1a1d28] dark:text-[#909ab2] dark:placeholder:text-[#909ab2] text-base bg-transparent outline-none border-none"
                    type="email"
                    placeholder="Địa chỉ email của bạn bè"
                  />
                  <span className="absolute bottom-0 block group-focus-within:border-textHover w-full border-b-[2px] border-t-[2px] border-[#303545] dark:border-[#f5f6fa] border-b-transparent dark:border-b-transparent"></span>
                </label>
                <span className="uppercase text-[#939bb4] dark:text-[#b6bac8] text-xs font-normal">
                  Chia sẻ liên kết qua email
                </span>
              </div>
              <button className="text-white dark:text-textPrimary rounded-[4px] bg-[#3ecfcf] hover:bg-[#2aa6a6] py-2 px-4 font-semibold text-sm">
                Gửi email
              </button>
            </div>
            <div className="flex p-8 items-center justify-between border-b-[2px] dark:border-[#13141b] border-[#e7e7e7]">
              <div className="flex-1 mr-5">
                <label className="">
                  <input
                    ref={linkShareRef}
                    className="outline-none w-full text-lg dark:text-[#909ab2] text-[#1a1d28] font-light bg-transparent border-[2px] border-[#303545] focus:border-textHover pl-3 py-2"
                    type="text"
                    value={window.location.href}
                    onClick={(e) => {
                      e.target.select()
                      navigator.clipboard.writeText(e.target.value)
                    }}
                  />
                </label>
              </div>
              <button
                onClick={handleSelect}
                className="text-white dark:text-textPrimary rounded-[4px] bg-[#3ecfcf] hover:bg-[#2aa6a6] py-2 px-4 font-semibold text-sm"
              >
                Chép liên kết
              </button>
            </div>
            <div className="p-8">
              <div className="flex dark:bg-[#13141b] cursor-pointer mb-2 items-center justify-center relative p-5 border-[2px] rounded-[4px] border-[#d8dce8] dark:border-textPrimary">
                <span className="absolute left-[20px] text-4xl text-[#3d5998]">
                  <FaFacebookSquare />
                </span>
                <h3 className="text-[#303545] dark:text-bgColor text-lg font-bold">
                  Chia sẻ trên Facebook
                </h3>
              </div>
              <div className="flex dark:bg-[#13141b] cursor-pointer items-center justify-center relative p-5 border-[2px] rounded-[4px] border-[#d8dce8] dark:border-textPrimary">
                <span className="absolute left-[20px] text-4xl text-[#1ea0f1]">
                  <FaTwitter />
                </span>
                <h3 className="text-[#303545] dark:text-bgColor text-lg font-bold">
                  Chia sẻ trên Facebook
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
