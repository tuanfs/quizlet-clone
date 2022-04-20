import React, { useState, useEffect, useContext } from 'react';
import TopicTab from '../TopicTab';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { StateContext } from '../../StateContext';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: 'auto',
    bottom: '0',
    marginRight: '-50%',
    zIndex: '20',
    padding: '0',
    margin: '0',
    border: 'none',
    outline: 'none',
    borderRight: '1px',
    borderRadius: '0',
  },
  overlay: {
    zIndex: '100',
    backgroundColor: 'rgba(184,184,186, 0.7)',
  },
};

export default function TopicModal() {
  const value = useContext(StateContext);

  const { onShowMenuMobile, showModalMobile, onShowModalMobile } = value;

  const [tab, setTab] = useState('');

  const [title, setTitle] = useState('Chủ đề');

  useEffect(() => {
    const handleTab = () => {
      if (window.innerWidth > 640) {
        setTab('');
      }
    };
    window.addEventListener('resize', handleTab);

    return () => window.removeEventListener('resize', handleTab);
  }, []);
  return (
    <div className='modal-auth'>
      <Modal
        isOpen={showModalMobile}
        ariaHideApp={false}
        style={customStyles}
        className='modal-content-topic'
        onRequestClose={() => {
          onShowModalMobile(false);
          setTab('');
          setTitle('Chủ đề');
        }}
      >
        <div
          className='bg-white dark:bg-bgDarkSc h-full w-full'
          // onClick={() => onShowModalMobile(false)}
        >
          <div className='h-header flex items-center justify-between dark:bg-bgDarkTh bg-[#4256b2] w-full px-4'>
            <div className='items-center justify-center flex'>
              <span
                onClick={() => {
                  setTab('');
                  setTitle('Chủ đề');
                }}
                className={`${
                  tab || 'hidden'
                } w-[40px] h-[40px] cursor-pointer rounded-full flex items-center justify-center text-base text-[#586480] dark:bg-transparent dark:hover:bg-textPrimary bg-white mr-3`}
              >
                <BiArrowBack className='text-xl' />
              </span>
              <h3 className='font-bold text-white text-lg'>{title}</h3>
            </div>
            <span
              onClick={() => {
                onShowModalMobile(false);
                setTab('');
                setTitle('Chủ đề');
                typeof onShowMenuMobile === 'function' && onShowMenuMobile();
              }}
              className='w-[40px] h-[40px] cursor-pointer rounded-full flex items-center justify-center text-base dark:bg-transparent dark:hover:bg-textPrimary text-[#586480] bg-white'
            >
              <AiOutlineClose className='text-xl' />
            </span>
          </div>
          <TopicTab onSetTitle={setTitle} tab={tab} onTab={setTab} />
        </div>
      </Modal>
    </div>
  );
}
