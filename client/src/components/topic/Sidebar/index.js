import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "auto",
    bottom: "0",
    height: "100vh",
    width: "310px",
    marginRight: "-50%",
    zIndex: "20",
    padding: "0",
    margin: "0",
    border: "none",
    borderRight: "1px",
    borderRadius: "0",
  },
  overlay: {
    zIndex: "100",
    backgroundColor: "rgba(184,184,186, 0.7)",
  },
};

export default function Sidebar(props) {
  const { sidebarRow, listItem = [] } = props;
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='mr-3'>
      <div className={`${sidebarRow ? "hidden" : ""}`}>
        <h3 className='text-[#939bb4] uppercase text-[12px] text-lg font-medium'>
          Mọi kết quả cho nghệ thuật và nhân văn
        </h3>
        <ul className=''>
          {listItem.map((item, index) => (
            <li key={index} className='py-2 my-1'>
              <Link to='/' className='text-sm text-[#303545] font-semibold'>
                {item.title}
              </Link>
            </li>
          ))}
          <li className='py-2 my-1'>
            <Link to='/' className='text-sm text-[#303545] font-semibold'>
              Nghệ thuật thị giác
            </Link>
          </li>
        </ul>
      </div>
      <div className={`mb-8 ${sidebarRow ? "" : "hidden"}`}>
        <div className='flex justify-between'>
          <h3 className='text-[#303545] font-semibold text-[30px] mb-4 leading-[36px]'>
            Duyệt theo danh mục
          </h3>
          <p
            className='mt-2 lg:hidden cursor-pointer'
            onClick={() => setShowModal(true)}
          >
            Xem tất cả
          </p>
        </div>
        <ul>
          {listItem.map((item, index) => {
            if (index > 3) return "";
            return (
              <li
                key={index}
                className='pt-3 mt-4 cursor-pointer pb-2 border-b-[4px] border-transparent hover:border-borderColor px-4 mr-4 bg-white text-[#303545] shadow-[0px_1px_4px_rgba(0,0,0,0.16)] text-[20px] inline-block rounded-[4px] font-medium'
              >
                <Link to='/'>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        isOpen={showModal}
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <div className='p-8'>
          <div>
            <span
              onClick={handleCloseModal}
              className='h-[40px] w-[40px] hover:bg-bgColor hover:shadow-[0px_-1px_-4px_rgba(0,0,0,0.16)] cursor-pointer flex items-center justify-center bg-white  rounded-full shadow-[0px_1px_4px_rgba(0,0,0,0.16)] '
            >
              <AiOutlineClose />
            </span>
          </div>
          <div className='my-4'>
            <h3 className='text-[#303545] font-semibold text-2xl'>
              Nghệ thuật và nhân văn
            </h3>
          </div>

          <ul>
            {listItem.map((item, index) => (
              <li
                key={index}
                className='md:text-sm text-lg my-4 font-semibold text-[#303545] hover:text-[#ffcd20]'
              >
                <Link to='/'>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}
