import React, { useContext } from 'react';
import TopicItemDropdown from '../TopicItemDropdown';
import { article, language } from '../../../commons/listItemTopic';
import { Link } from 'react-router-dom';
import { StateContext } from '../../StateContext';

export default function TopicTab(props) {
  const value = useContext(StateContext);

  const { onShowModalMobile, onShowMenuMobile } = value;

  const { tab, onTab, onSetTitle } = props;
  const listTopic = {
    article: article,
    language: language,
  };

  const handleTab = (tab, e) => {
    if (window.innerWidth < 641) {
      onTab(tab);
      onSetTitle(e.target.innerHTML);
    }
  };

  return (
    <div className=''>
      <ul
        className={`pl-4 dark:px-0 pr-8 py-4 ${
          tab === '' ? 'block' : 'hidden'
        }`}
      >
        <li className='flex mb-3 items-center p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.24)] rounded-[10px] dark:rounded-[0] dark:bg-bgElement'>
          <div className='sm:w-[40%] flex'>
            <div className='min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] object-fit mr-6 sm:mr-0'>
              <img
                className='h-full w-full'
                src='https://res.cloudinary.com/tuanfs/image/upload/v1646986623/quizlet-clone/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2022-03-11_lu%CC%81c_15.15.30_kuxd9i.png'
                alt='Icons'
              />
            </div>

            <div className='text-[#586480] dark:text-[#ebecf3] flex items-center cursor-pointer text-sm font-semibold'>
              <span
                className='sm:hidden block hover:bg-[#f6f7fb] dark:hover:bg-bgDarkSc py-3 px-6 sm:px-0 sm:py-0 md:mr-12 sm:ml-4 rounded-[4px]'
                onClick={(e) => handleTab('article', e)}
              >
                Nghệ thuật và nhân văn
              </span>
              <Link
                onClick={() => {
                  onShowModalMobile(false);
                  onShowMenuMobile(false);
                }}
                to='/topic/article'
                className='hidden dark:hover:text-[#939bb4] hover:text-[#303545] ml-4 mr-2 sm:block'
              >
                Nghệ thuật và nhân văn
              </Link>
            </div>
          </div>
          <ul className='sm:w-[60%] hidden sm:flex sm:flex-wrap'>
            {listTopic.article.map((item, index) => {
              if (index >= 5) return '';
              return (
                <li
                  onClick={() => {
                    onShowModalMobile(false);
                    onShowMenuMobile(false);
                  }}
                  key={index}
                  className='text-sm max-w-[50%] px-1 basis-1/2 text-[#586480] dark:text-[#ebecf3] whitespace-nowrap text-ellipsis overflow-hidden font-normal my-1'
                >
                  <Link to={`/topic/article/subtree`}>{item.title}</Link>
                </li>
              );
            })}
            <li className='text-sm max-w-[50%] px-1 basis-1/2 hover:text-[#2e3856] text-[#586480] dark:text-[#ebecf3] my-1 font-semibold'>
              <Link to='/'>Xem tất cả</Link>
            </li>
          </ul>
        </li>
        <li className='flex mb-3 dark:bg-bgElement items-center p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.24)] rounded-[10px] dark:rounded-[0]'>
          <div className='sm:w-[40%] flex'>
            <div className='min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] object-fit mr-6 sm:mr-0'>
              <img
                className='h-full w-full'
                src='https://res.cloudinary.com/tuanfs/image/upload/v1646986623/quizlet-clone/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2022-03-11_lu%CC%81c_15.15.45_ibsdia.png'
                alt='Icons'
              />
            </div>
            <div className='text-[#586480] dark:text-[#ebecf3] flex items-center cursor-pointer text-sm font-semibold'>
              <span
                className='sm:hidden block hover:bg-[#f6f7fb] dark:hover:bg-bgDarkSc py-3 px-6 sm:px-0 sm:py-0 md:mr-12 sm:ml-4 rounded-[4px]'
                onClick={(e) => {
                  handleTab('language', e);
                }}
              >
                Ngôn ngữ
              </span>
              <Link
                onClick={() => {
                  onShowModalMobile(false);
                  onShowMenuMobile(false);
                }}
                to='/topic/language'
                className='hidden dark:hover:text-[#939bb4] hover:text-[#303545] ml-4 mr-2 sm:block'
              >
                Ngôn ngữ
              </Link>
            </div>
          </div>
          <ul className='sm:w-[60%] sm:flex hidden sm:flex-wrap'>
            {listTopic.language.map((item, index) => {
              if (index >= 5) return '';
              return (
                <li
                  key={index}
                  className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 text-[#586480] whitespace-nowrap text-ellipsis overflow-hidden font-normal my-1'
                >
                  <Link to='/'>{item.title}</Link>
                </li>
              );
            })}
            <li className='text-sm max-w-[50%] px-1 dark:text-[#ebecf3] basis-1/2 hover:text-[#2e3856] text-[#586480] my-1 font-semibold'>
              <Link to='/'>Xem tất cả</Link>
            </li>
          </ul>
        </li>
        <li className='flex mb-3 items-center dark:bg-bgElement dark:rounded-[0] p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.24)] rounded-[10px]'>
          <div className='flex sm:w-[40%]'>
            <div className='min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] object-fit mr-6 sm:mr-0'>
              <img
                className='h-full w-full'
                src='https://res.cloudinary.com/tuanfs/image/upload/v1646986628/quizlet-clone/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2022-03-11_lu%CC%81c_15.15.59_d6xrmk.png'
                alt='Icons'
              />
            </div>
            <div className='text-[#586480] dark:text-[#ebecf3] flex items-center cursor-pointer text-sm font-semibold'>
              <span
                className='sm:hidden block hover:bg-[#f6f7fb] dark:hover:bg-bgDarkSc py-3 px-6 sm:px-0 sm:py-0 md:mr-12 sm:ml-4 rounded-[4px]'
                onClick={(e) => {
                  handleTab('language', e);
                }}
              >
                Toán học
              </span>
              <Link
                to='topic/article'
                className='hidden dark:hover:text-[#939bb4] hover:text-[#303545] ml-4 mr-2 sm:block'
              >
                Toán học
              </Link>
            </div>
          </div>
          <ul className='sm:w-[60%] hidden sm:flex sm:flex-wrap'>
            {listTopic.language.map((item, index) => {
              if (index >= 5) return '';
              return (
                <li
                  key={index}
                  className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 text-[#586480] whitespace-nowrap text-ellipsis overflow-hidden font-normal my-1'
                >
                  <Link to='/'>{item.title}</Link>
                </li>
              );
            })}
            <li className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 hover:text-[#2e3856] text-[#586480] my-1 font-semibold'>
              <Link to='/'>Xem tất cả</Link>
            </li>
          </ul>
        </li>
        <li className='flex mb-3 items-center dark:bg-bgElement dark:rounded-[0] p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.24)] rounded-[10px]'>
          <div className='sm:w-[40%] flex'>
            <div className='min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] object-fit mr-6 sm:mr-0'>
              <img
                className='h-full w-full'
                src='https://res.cloudinary.com/tuanfs/image/upload/v1646986628/quizlet-clone/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2022-03-11_lu%CC%81c_15.16.09_noco2u.png'
                alt='Icons'
              />
            </div>
            <div className='text-[#586480] dark:text-[#ebecf3] flex items-center cursor-pointer text-sm font-semibold'>
              <span
                className='sm:hidden block hover:bg-[#f6f7fb] dark:hover:bg-bgDarkSc py-3 px-6 sm:px-0 sm:py-0 md:mr-12 sm:ml-4 rounded-[4px]'
                onClick={(e) => {
                  handleTab('language', e);
                }}
              >
                Khoa học
              </span>
              <Link
                to='topic/article'
                className='hidden dark:hover:text-[#939bb4] hover:text-[#303545] ml-4 mr-2 sm:block'
              >
                Khoa học
              </Link>
            </div>
          </div>
          <ul className='sm:w-[60%] sm:flex hidden sm:flex-wrap'>
            {listTopic.language.map((item, index) => {
              if (index >= 5) return '';
              return (
                <li
                  key={index}
                  className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 text-[#586480] whitespace-nowrap text-ellipsis overflow-hidden font-normal my-1'
                >
                  <Link to='/'>{item.title}</Link>
                </li>
              );
            })}
            <li className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 hover:text-[#2e3856] text-[#586480] my-1 font-semibold'>
              <Link to='/'>Xem tất cả</Link>
            </li>
          </ul>
        </li>
        <li className='flex mb-3 items-center p-4 shadow dark:bg-bgElement dark:rounded-[0] [0px_2px_8px_rgba(0,0,0,0.24)] rounded-[10px]'>
          <div className='sm:w-[40%] flex'>
            <div className='min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] object-fit mr-6 sm:mr-0'>
              <img
                className='h-full w-full'
                src='https://res.cloudinary.com/tuanfs/image/upload/v1646986629/quizlet-clone/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2022-03-11_lu%CC%81c_15.16.20_nekpbo.png'
                alt='Icons'
              />
            </div>
            <div className='text-[#586480] dark:text-[#ebecf3] flex items-center cursor-pointer text-sm font-semibold'>
              <span
                className='sm:hidden block hover:bg-[#f6f7fb] dark:hover:bg-bgDarkSc py-3 px-6 sm:px-0 sm:py-0 md:mr-12 sm:ml-4 rounded-[4px]'
                onClick={(e) => {
                  handleTab('language', e);
                }}
              >
                Khoa học xã hội
              </span>
              <Link
                to='topic/article'
                className='hidden hover:text-[#303545] dark:hover:text-[#939bb4] ml-4 mr-2 sm:block'
              >
                Khoa học xã hội
              </Link>
            </div>
          </div>
          <ul className='sm:w-[60%] hidden sm:flex sm:flex-wrap'>
            {listTopic.language.map((item, index) => {
              if (index >= 5) return '';
              return (
                <li
                  key={index}
                  className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 text-[#586480] whitespace-nowrap text-ellipsis overflow-hidden font-normal my-1'
                >
                  <Link to='/'>{item.title}</Link>
                </li>
              );
            })}
            <li className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 dark:hover:text-[#939bb4] hover:text-[#2e3856] text-[#586480] my-1 font-semibold'>
              <Link to='/'>Xem tất cả</Link>
            </li>
          </ul>
        </li>
        <li className='flex mb-3 dark:rounded-[0] dark:bg-bgElement items-center p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.24)] rounded-[10px]'>
          <div className='sm:w-[40%] w-full flex'>
            <div className='min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px] object-fit mr-6 sm:mr-0'>
              <img
                className='h-full w-full'
                src='https://res.cloudinary.com/tuanfs/image/upload/v1646986628/quizlet-clone/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2022-03-11_lu%CC%81c_15.16.40_lemnyc.png'
                alt='Icons'
              />
            </div>
            <div className='text-[#586480] dark:text-[#ebecf3] flex items-center cursor-pointer text-sm font-semibold'>
              <span
                className='sm:hidden block hover:bg-[#f6f7fb] dark:hover:bg-bgDarkSc py-3 px-6 sm:px-0 sm:py-0 md:mr-12 sm:ml-4 rounded-[4px]'
                onClick={(e) => {
                  handleTab('language', e);
                }}
              >
                Khác
              </span>
              <Link
                to='topic/article'
                className='hidden hover:text-[#303545] dark:hover:text-[#939bb4] ml-4 mr-2 sm:block'
              >
                Khác
              </Link>
            </div>
          </div>
          <ul className='sm:w-[60%] sm:flex hidden sm:flex-wrap'>
            {listTopic.language.map((item, index) => {
              if (index >= 5) return '';
              return (
                <li
                  key={index}
                  className='text-sm max-w-[50%] dark:text-[#ebecf3] px-1 basis-1/2 text-[#586480] whitespace-nowrap text-ellipsis overflow-hidden font-normal my-1'
                >
                  <Link to='/'>{item.title}</Link>
                </li>
              );
            })}
            <li className='text-sm max-w-[50%] px-1 dark:text-[#ebecf3] basis-1/2 hover:text-[#2e3856] text-[#586480] my-1 font-semibold'>
              <Link to='/'>Xem tất cả</Link>
            </li>
          </ul>
        </li>
      </ul>
      <TopicItemDropdown listItem={listTopic[tab]} />
    </div>
  );
}
