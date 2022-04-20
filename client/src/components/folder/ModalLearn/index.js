import React, { useContext } from 'react';
import Modal from 'react-modal';
import { StateContext } from '../../StateContext';
import {
  BsXLg,
  BsFillPencilFill,
  BsUiChecks,
  BsFiles,
  BsFillPentagonFill,
} from 'react-icons/bs';
import { AiTwotoneSwitcher } from 'react-icons/ai';
import { IoVolumeMediumSharp } from 'react-icons/io5';
import { useParams, Link } from 'react-router-dom';

const customStyles = {
  content: {
    width: '600px',
    position: 'relative',
    margin: 'auto',
    padding: '0',
    borderRadius: '0',
    border: 'none',
    overflow: 'scroll',
    backgroundColor: '#f6f7fb',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    zIndex: '100',
    display: 'flex',
    items: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(40,46,62,0.5)',
  },
};
export default function ModalLearn() {
  const value = useContext(StateContext);
  const { showModalLearn, onShowModalLearn } = value;
  const { id } = useParams();

  return (
    <div>
      <Modal
        isOpen={showModalLearn}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => onShowModalLearn(false)}
        className='modal-content-learn'
        overlayClassName={`${
          showModalLearn ? 'animate-showModalY5' : 'animate-hiddeModalY5'
        }`}
        closeTimeoutMS={500}
      >
        <div className='bg-bgColor dark:bg-[#1b1d28] h-full'>
          <div className='p-8 bg-[#4357b2] dark:bg-textPrimary flex justify-between items-center'>
            <h3 className='text-white dark:text-bgColor font-semibold text-[30px]'>
              Học thư mục này
            </h3>
            <button
              onClick={() => onShowModalLearn(false)}
              className='h-[40px] w-[40px] flex items-center justify-center cursor-pointer  rounded-full hover:bg-[#3d4d9a] border-[#3d4d9a] dark:hover:bg-bgDarkSc dark:border-[#939bb4] border-[2px]'
            >
              <span className='text-white'>
                <BsXLg />
              </span>
            </button>
          </div>
          <div
            onClick={() => onShowModalLearn(false)}
            className='grid grid-cols-12 p-8 gap-4'
          >
            <Link
              to={`/folder/${id}/flash`}
              className='dark:bg-bgDarkSc col-span-4 cursor-pointer group border-b-[4px] text-center py-5 hover:border-textHover border-[#3dcfcf] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]'
            >
              <span className='inline-block  text-[#4357b2] text-5xl'>
                <AiTwotoneSwitcher />
              </span>
              <span className='block text-[#3dcfcf] cursor-pointer font-semibold group-hover:text-textHover'>
                Thẻ ghi nhớ
              </span>
            </Link>
            <Link
              to={`/folder/${id}/write`}
              className='dark:bg-bgDarkSc col-span-4 cursor-pointer group border-b-[4px] text-center py-5 hover:border-textHover border-[#3dcfcf] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]'
            >
              <span className='inline-block  text-[#4357b2] text-5xl'>
                <BsFillPencilFill />
              </span>
              <span className='block text-[#3dcfcf] cursor-pointer font-semibold group-hover:text-textHover'>
                Viết
              </span>
            </Link>
            <Link
              to={`/folder/${id}/learn`}
              className='dark:bg-bgDarkSc col-span-4 cursor-pointer group border-b-[4px] text-center py-5 hover:border-textHover border-[#3dcfcf] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]'
            >
              <span className='inline-block  text-[#4357b2] text-5xl'>
                <IoVolumeMediumSharp />
              </span>
              <span className='block text-[#3dcfcf] cursor-pointer font-semibold group-hover:text-textHover'>
                Chính tả
              </span>
            </Link>
            <div className='dark:bg-bgDarkSc col-span-4 cursor-pointer group border-b-[4px] text-center py-5 hover:border-textHover border-[#3dcfcf] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]'>
              <span className='inline-block  text-[#4357b2] text-5xl'>
                <BsUiChecks />
              </span>
              <span className='block text-[#3dcfcf] cursor-pointer font-semibold group-hover:text-textHover'>
                Kiểm tra
              </span>
            </div>
            <div className='dark:bg-bgDarkSc col-span-4 cursor-pointer group border-b-[4px] text-center py-5 hover:border-textHover border-[#3dcfcf] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]'>
              <span className='inline-block  text-[#4357b2] text-5xl'>
                <BsFiles />
              </span>
              <span className='block text-[#3dcfcf] cursor-pointer font-semibold group-hover:text-textHover'>
                Ghép thẻ
              </span>
            </div>
            <div className='dark:bg-bgDarkSc col-span-4 cursor-pointer group border-b-[4px] text-center py-5 hover:border-textHover border-[#3dcfcf] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]'>
              <span className='inline-block  text-[#4357b2] text-5xl'>
                <BsFillPentagonFill />
              </span>
              <span className='block text-[#3dcfcf] cursor-pointer font-semibold group-hover:text-textHover'>
                Thiên thạch
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
