import React, { useContext, useState } from "react";
import { StateContext } from "../../StateContext";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { createFolder } from "../../../features/folderSlice";

const customStyles = {
  content: {
    width: "800px",
    height: "300px",
    margin: "auto",
    borderRadius: "10px",
    padding: "0",
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
};

export default function ModalEdit({ title, desc }) {
  const value = useContext(StateContext);
  const { showModalEditFolder, onShowModalEditFolder } = value;
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState(title || "");
  const [descValue, setDescValue] = useState(desc || "");

  const handleCreate = async () => {
    await dispatch(createFolder({ title: titleValue, desc: descValue }));
    onShowModalEditFolder(false);
    setTitleValue("");
    setDescValue("");
  };

  return (
    <div>
      <Modal
        isOpen={showModalEditFolder}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => onShowModalEditFolder(false)}
        overlayClassName={`${
          showModalEditFolder ? "animate-showModalY5" : "animate-hiddeModalY5"
        }`}
        closeTimeoutMS={500}
      >
        <div className='h-full w-full'>
          <div className='relative px-8 pt-6'>
            <div
              onClick={() => onShowModalEditFolder(false)}
              className='absolute top-0 right-0 cursor-pointer text-xl p-2'
            >
              <FiX />
            </div>
            <div className='w-full'>
              <h3 className='font-semibold text-3xl text-[#303545]'>
                Sửa thư mục
              </h3>
              <div className='mb-4'>
                <label className='bg-[#f6f7fb] relative group w-full overflow-hidden pb-2 pt-4 mt-2 pl-5 rounded-[4px] block'>
                  <span
                    className={`text-sm font-semibold text-[#586380] absolute mt-1 top-0 ${
                      titleValue ? "block" : "hidden"
                    }`}
                  >
                    Tiêu đề
                  </span>
                  <input
                    className='border-none bg-transparent mt-1 w-full outline-none'
                    type='text'
                    placeholder='Nhập tiêu đề'
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                  />
                  <span className='block w-full absolute bottom-0 border-b-[2px] right-auto left-0 border-transparent group-focus-within:border-[#303545]'></span>
                </label>
              </div>
              <div>
                <label className='bg-[#f6f7fb] relative group w-full overflow-hidden pb-2 pt-4 mt-2 pl-5 rounded-[4px] block'>
                  <span
                    className={`text-sm font-semibold text-[#4c60b6] absolute my-1 top-0 ${
                      descValue ? "block" : "hidden"
                    }`}
                  >
                    Mô tả
                  </span>
                  <textarea
                    className={`border-none max-h-[40px] resize-none overflow-scroll bg-transparent w-full outline-none ${
                      descValue ? "mt-3" : ""
                    }`}
                    type='text'
                    placeholder='Nhập mô tả'
                    value={descValue}
                    onChange={(e) => setDescValue(e.target.value)}
                  />
                  <span className='block w-full absolute bottom-0 border-b-[2px] right-auto left-0 border-transparent group-focus-within:border-[#4c60b6]'></span>
                </label>
              </div>
            </div>
          </div>
          <div className='border-t boder-[#f6f7fb] text-right  mt-5 p-5'>
            <button
              disabled={!titleValue}
              onClick={handleCreate}
              className='disabled:bg-bgColor bg-[#4255ff] text-white rounded-[4px] px-5 py-[6px] inline-block'
            >
              Lưu
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
