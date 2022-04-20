import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar(props) {
  const { onClickInput, onCloseInput, onInput } = props;
  const [term, setTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    onInput && inputRef.current.focus();
  }, [onInput]);

  const handleOnBlur = () => {
    onCloseInput();
    setTerm('');
  };
  const handleClick = () => {
    onClickInput();
  };

  return (
    <>
      <div
        className={`lg:flex relative w-full bg-[#f6f7fb] dark:bg-[#2e3956] items-center flex search-bar rounded-[6px] px-2`}
      >
        <div className='p-2 '>
          <AiOutlineSearch className='text-[#6c7696] text-xl' />
        </div>
        <form className='flex-1 py-2'>
          <div>
            <input
              ref={inputRef}
              className='outline-none h-full w-full text-base bg-transparent text-[#929191] dark:text-[#b7bccb] overflow-hidden text-ellipsis'
              type='text'
              placeholder='Học phần , sách giáo khoa, câu hỏi'
              onClick={handleClick}
              onBlur={handleOnBlur}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <label></label>
          </div>
        </form>
        {onInput && (
          <div className='p-2 cursor-pointer' onClick={handleOnBlur}>
            <i className='fa-solid text-[#4e4e4e] fa-xmark'></i>
          </div>
        )}
        <div
          className={`md:absolute md:top-[140%] md:h-[80vh] md:max-h-[420px] overflow-scroll md:w-[480px] bg-white dark:bg-[#13141b] shadow-lg md:rounded-[10px] fixed top-0 right-0 bottom-0 left-0 md:left-auto md:right-0 mt-header md:mt-0 ${
            onInput ? 'block' : 'hidden'
          }`}
        >
          <h3 className='text-lg  text-[#949494] dark:text-white py-3 px-6'>
            Khuyến nghị cho bạn
          </h3>
          <ul className=''>
            <li className='py-2 px-6 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
              <Link to='/'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='text-textPrimary dark:text-white text-xl font-bold mb-1'>
                      Test 5 - part 5
                    </h3>
                    <div className='flex items-center'>
                      <div className='h-[30px] w-[30px] rounded-100'>
                        <img
                          className='h-full w-full'
                          src={
                            'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-1024.png'
                          }
                          alt='Avatar'
                        />
                      </div>
                      <h4 className='text-[#949494] mx-4 text-lg font-bold'>
                        Lê văn tuấn
                      </h4>
                      <p className='text-[#949494]'>28 thuật ngữ</p>
                    </div>
                  </div>
                  <div className='w-[70px] h-[70px] rounded-[6px] overflow-hidden'>
                    <img
                      className='h-full w-full'
                      src={
                        'https://images.prismic.io/quizlet-prod/faf1f5b8-f04b-4432-95a4-94e01a1d7634_Group+1970.png?auto=compress,format'
                      }
                      alt='Item'
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='py-2 px-6 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
              <Link to='/'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='text-textPrimary dark:text-white text-xl font-bold mb-1'>
                      Test 5 - part 5
                    </h3>
                    <div className='flex items-center'>
                      <div className='h-[30px] w-[30px] rounded-100'>
                        <img
                          className='h-full w-full'
                          src={
                            'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-1024.png'
                          }
                          alt='Avatar'
                        />
                      </div>
                      <h4 className='text-[#949494] mx-4 text-lg font-bold'>
                        Lê văn tuấn
                      </h4>
                      <p className='text-[#949494]'>28 thuật ngữ</p>
                    </div>
                  </div>
                  <div className='w-[70px] h-[70px] rounded-[6px] overflow-hidden'>
                    <img
                      className='h-full w-full'
                      src={
                        'https://images.prismic.io/quizlet-prod/faf1f5b8-f04b-4432-95a4-94e01a1d7634_Group+1970.png?auto=compress,format'
                      }
                      alt='Item'
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='py-2 px-6 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
              <Link to='/'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='text-textPrimary dark:text-white text-xl font-bold mb-1'>
                      Test 5 - part 5
                    </h3>
                    <div className='flex items-center'>
                      <div className='h-[30px] w-[30px] rounded-100'>
                        <img
                          className='h-full w-full'
                          src={
                            'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-1024.png'
                          }
                          alt='Avatar'
                        />
                      </div>
                      <h4 className='text-[#949494] mx-4 text-lg font-bold'>
                        Lê văn tuấn
                      </h4>
                      <p className='text-[#949494]'>28 thuật ngữ</p>
                    </div>
                  </div>
                  <div className='w-[70px] h-[70px] rounded-[6px] overflow-hidden'>
                    <img
                      className='h-full w-full'
                      src={
                        'https://images.prismic.io/quizlet-prod/faf1f5b8-f04b-4432-95a4-94e01a1d7634_Group+1970.png?auto=compress,format'
                      }
                      alt='Item'
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className='py-2 px-6 hover:bg-bgColor dark:hover:bg-[#2e3956]'>
              <Link to='/'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='text-textPrimary dark:text-white text-xl font-bold mb-1'>
                      Test 5 - part 5
                    </h3>
                    <div className='flex items-center'>
                      <div className='h-[30px] w-[30px] rounded-100'>
                        <img
                          className='h-full w-full'
                          src={
                            'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-1024.png'
                          }
                          alt='Avatar'
                        />
                      </div>
                      <h4 className='text-[#949494] mx-4 text-lg font-bold'>
                        Lê văn tuấn
                      </h4>
                      <p className='text-[#949494]'>28 thuật ngữ</p>
                    </div>
                  </div>
                  <div className='w-[70px] h-[70px] rounded-[6px] overflow-hidden'>
                    <img
                      className='h-full w-full'
                      src={
                        'https://images.prismic.io/quizlet-prod/faf1f5b8-f04b-4432-95a4-94e01a1d7634_Group+1970.png?auto=compress,format'
                      }
                      alt='Item'
                    />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
