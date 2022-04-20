import React, { useEffect, useState, useRef } from 'react';
import CardList from '../CardList';
import { getExplainContent } from '../../../services/explainService';

export default function ExplainTab() {
  const [tab, setTab] = useState('chemistry');
  const [listTab, setListTab] = useState(null);
  const listRef = useRef(null);
  const handleChangeTab = (e) => {
    setTab(e.target.dataset.key);
  };

  useEffect(() => {
    const list = getExplainContent(tab);
    const childNodes = listRef.current.childNodes;
    Array.from(childNodes).forEach((item) => {
      if (item.dataset.key === tab) {
        item.classList.add(
          'after:border-[#4254ff]',
          'text-[#282e3e]',
          'z-[2]',
          'dark:text-bgColor'
        );
      } else {
        item.classList.remove(
          'after:border-[#4254ff]',
          'text-[#282e3e]',
          'z-[2]',
          'dark:text-bgColor'
        );
      }
    });
    setListTab(list);
  }, [tab]);

  return (
    <>
      <div className='mt-10 mb-10'>
        <div>
          <h3 className='text-2xl text-[#303545] font-bold dark:text-bgColor'>
            Browser by subject
          </h3>
        </div>
      </div>
      <div>
        <ul
          ref={listRef}
          className='w-full text-[#586380] dark:text-[#929cb4] explain-tab-list flex-nowrap overflow-x-scroll relative flex after:block after:content-[""] after:absolute after:w-full after:bottom-0 after:h-[2px] after:bg-[#edeff4] dark:after:bg-[#282e3e] after:mx-4'
        >
          <li
            onClick={handleChangeTab}
            data-key='chemistry'
            className='text-sm py-2 relative hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Chemistry
          </li>
          <li
            onClick={handleChangeTab}
            data-key='calculus'
            className='text-sm py-2 relative hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Calculus
          </li>
          <li
            onClick={handleChangeTab}
            data-key='engineering'
            className='text-sm py-2 relative hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Engineering
          </li>
          <li
            onClick={handleChangeTab}
            data-key='algebra'
            className='text-sm py-2 relative whitespace-nowrap hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Linear Algebra
          </li>
          <li
            onClick={handleChangeTab}
            data-key='physics'
            className='text-sm py-2 relative hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Physics
          </li>
          <li
            onClick={handleChangeTab}
            data-key='biology'
            className='text-sm py-2 relative hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Biology
          </li>
          <li
            onClick={handleChangeTab}
            data-key='languages'
            className='text-sm py-2 relative hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Languages
          </li>
          <li
            onClick={handleChangeTab}
            data-key='business'
            className='text-sm py-2 relative hover:after:border-[#4254ff] after:content-[""] after:absolute after:bottom-0 after:border-b-[2px] after:h-full after:w-full after:block hover:z-[2]  cursor-pointer h-full mx-4 hover:text-[#4254ff] block'
          >
            Business
          </li>
        </ul>
        <div>{listTab && <CardList listTab={listTab} />}</div>
      </div>
    </>
  );
}
