import React, { useState, useEffect, useContext, useRef } from 'react';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import Nodification from '../../../dropdowns/Notification';
import DropdownUser from '../../../dropdowns/DropdownUser';
import { HiOutlineX } from 'react-icons/hi';
import { StateContext } from '../../../StateContext';
import { useSelector, useDispatch } from 'react-redux';
import { getIsAuthentication } from '../../../../features/authSlice';
import { logOut } from '../../../../features/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const divRef = useRef(null);

  const isAuthenticated = useSelector(getIsAuthentication);
  const value = useContext(StateContext);
  const { onShowMenuMobile, showMenuMobile, onShowModalAuth, onTabAuth } =
    value;

  const [isAuthentication, setIsAuthentication] = useState(isAuthenticated);
  useEffect(() => {
    setIsAuthentication(isAuthenticated);
  }, [isAuthenticated]);

  const [onInput, setOnInput] = useState(false);
  const [showDropdownNotify, setShowDropdownNotify] = useState(false);
  const [onDropdownUser, setOnDropdownUser] = useState(false);
  const [showDropdowLibarian, setShowDropdownLibarian] = useState(false);
  const [showDropdownCreate, setShowDropdownCreate] = useState(false);

  const handleClickInput = () => {
    setOnInput(true);
  };

  const handleClickCloseInput = () => {
    setOnInput(false);
  };

  const handleShowMenuMobile = () => {
    onShowMenuMobile(true);
  };

  useEffect(() => {
    const handleHideMenuMobile = () => {
      onShowMenuMobile(false);
      setShowDropdownLibarian(false);
      setShowDropdownCreate(false);
    };
    function handleClickMenuMobile() {
      if (window.innerWidth >= 768) {
        handleHideMenuMobile();
      }
    }
    window.addEventListener('resize', handleClickMenuMobile);

    return () => {
      window.removeEventListener('resize', handleClickMenuMobile);
    };
  }, [onShowMenuMobile]);

  useEffect(() => {
    const handleClick = (e) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setOnDropdownUser(false);
      }
    };
    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  const handleHideMenuMobile = () => {
    onShowMenuMobile(false);
    setShowDropdownLibarian(false);
    setShowDropdownCreate(false);
  };
  return (
    <>
      <div className='h-header dark:border-b-[1px] dark:border-b-[#282e3e] z-[20] fixed top-0 right-0 left-0  bg-white dark:bg-bgDark dark:text-white shadow-lg min-w-[375px]'>
        <div className='flex justify-between items-center px-5'>
          <div
            className={`items-center ${
              onInput
                ? 'hidden md:flex min-w-[10%]'
                : 'min-w-[30%] md:min-w-[50%] flex'
            }`}
          >
            <div className=' w-[60px] h-[60px] mr-2'>
              <div
                to='/'
                className='text-[40px] cursor-pointer flex items-center h-full font-bold'
              >
                <div
                  className='block relative md:hidden'
                  onClick={handleShowMenuMobile}
                >
                  <svg
                    className='w-full h-full text-[#4254ff]'
                    fill='none'
                    height='21'
                    viewBox='0 0 37 21'
                    width='37'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M27.6466 1.01497C26.1048 0.91492 24.5722 1.17646 23.1462 1.76712C21.7208 2.35779 20.4526 3.26725 19.4418 4.42511C18.4311 5.58298 17.703 6.95614 17.3172 8.43832C16.9314 9.9205 16.897 11.4717 17.2169 12.969C17.5367 14.4671 18.2031 15.8706 19.162 17.0706C20.1215 18.2705 21.3477 19.2345 22.7463 19.8859C24.1443 20.538 25.6755 20.8595 27.2201 20.8271C28.7647 20.794 30.2805 20.4076 31.6497 19.6968C31.6932 19.6747 31.7423 19.6644 31.7914 19.6672C31.8405 19.6699 31.8882 19.6851 31.9289 19.712C32.2193 19.9038 32.5223 20.0757 32.8358 20.2268C33.9224 20.7477 35.1155 21.012 36.322 20.9996C36.3964 20.9996 36.4672 20.9706 36.5198 20.9189C36.5724 20.8671 36.6019 20.7967 36.6019 20.7229V17.3583C36.6026 17.2921 36.5801 17.2286 36.5373 17.1775C36.4946 17.1265 36.4356 17.0927 36.3697 17.0816C36.0484 17.0312 35.7342 16.9422 35.4347 16.816C35.3975 16.7994 35.3645 16.7759 35.3379 16.7456C35.3112 16.7152 35.2916 16.68 35.2804 16.6414C35.2691 16.6027 35.2663 16.5627 35.272 16.5227C35.2776 16.4834 35.2923 16.4454 35.314 16.4116C36.2897 14.9646 36.8642 13.2885 36.9786 11.5524C37.0936 9.81631 36.7443 8.08019 35.9671 6.51935C35.1899 4.95851 34.0122 3.62882 32.5511 2.66209C31.0907 1.69605 29.3988 1.12745 27.6466 1.01497ZM20.9506 10.9155C20.9492 9.72798 21.3035 8.56597 21.9684 7.57785C22.6334 6.58973 23.5796 5.81897 24.6865 5.36355C25.7934 4.90813 27.0125 4.78876 28.1881 5.01992C29.3637 5.25108 30.4439 5.82311 31.292 6.66219C32.14 7.50195 32.7173 8.57218 32.9509 9.73695C33.1852 10.9017 33.0645 12.1093 32.6058 13.2071C32.147 14.3043 31.3698 15.242 30.3724 15.9017C29.3756 16.5613 28.2035 16.9126 27.0048 16.9119C25.3992 16.9119 23.8588 16.2805 22.7232 15.1557C21.5875 14.031 20.9478 12.506 20.9464 10.9148L20.9506 10.9155Z'
                      fill='currentColor'
                    ></path>
                    <rect
                      fill='currentColor'
                      height='3'
                      rx='1.5'
                      width='14'
                      y='2'
                    ></rect>
                    <rect
                      fill='currentColor'
                      height='3'
                      rx='1.5'
                      width='10'
                      y='9'
                    ></rect>
                    <rect
                      fill='currentColor'
                      height='3'
                      rx='1.5'
                      width='13'
                      y='16'
                    ></rect>
                  </svg>
                </div>
                <div className='hidden md:block'>
                  <Link to='/'>
                    <svg
                      className='w-full h-full text-[#4254ff]'
                      fill='currentColor'
                      viewBox='0 0 86 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M33.6222 6.16613H30.1458C30.0757 6.16613 30.0088 6.19385 29.9592 6.24402C29.9096 6.29352 29.8818 6.36085 29.8818 6.43148V13.777C29.8818 15.6035 28.7446 16.2431 27.4255 16.2431C26.1064 16.2431 24.9693 15.5586 24.9693 13.777V6.43082C24.9693 6.36085 24.9415 6.29286 24.8919 6.24336C24.8422 6.19385 24.7754 6.16547 24.7053 6.16547H21.2289C21.1588 6.16547 21.092 6.19319 21.0424 6.24336C20.9927 6.29286 20.965 6.36019 20.965 6.43082V14.1024C20.965 18.0287 24.0133 19.8545 27.4222 19.8545C30.8311 19.8545 33.8795 18.028 33.8795 14.1024V6.43082C33.8795 6.36151 33.8524 6.29484 33.8041 6.24534C33.7565 6.19583 33.691 6.16745 33.6222 6.16613Z'></path>
                      <path d='M60.7795 1.42407H57.3495C57.2039 1.42407 57.0862 1.54289 57.0862 1.68877V19.1456C57.0862 19.2921 57.2039 19.4103 57.3495 19.4103H60.7795C60.9251 19.4103 61.0428 19.2915 61.0428 19.1456V1.68943C61.0428 1.54289 60.9251 1.42407 60.7795 1.42407Z'></path>
                      <path d='M55.1723 6.16595H43.1165C43.0463 6.16595 42.9795 6.19368 42.9299 6.24384C42.8803 6.29335 42.8525 6.36068 42.8525 6.43131V9.34496C42.8525 9.41493 42.8803 9.48292 42.9299 9.53243C42.9795 9.58193 43.0463 9.61032 43.1165 9.61032H48.9545L41.8648 18.9817C41.8351 19.0206 41.8172 19.0675 41.8126 19.117C41.8079 19.1658 41.8172 19.2153 41.839 19.2596C41.8609 19.3038 41.8946 19.3407 41.9363 19.3672C41.9779 19.3936 42.0262 19.4068 42.0752 19.4068H54.7145C54.7847 19.4068 54.8515 19.379 54.9011 19.3295C54.9507 19.28 54.9785 19.2127 54.9785 19.1421V16.2284C54.9785 16.1584 54.9507 16.0911 54.9011 16.0409C54.8515 15.9914 54.7847 15.9631 54.7145 15.9631H48.4127L55.3827 6.58841C55.4118 6.54881 55.429 6.5026 55.4336 6.45375C55.4376 6.40491 55.4283 6.35606 55.4065 6.31249C55.3847 6.26893 55.3509 6.23196 55.3099 6.20622C55.2689 6.17981 55.2206 6.16595 55.1723 6.16595Z'></path>
                      <path d='M85.7401 6.20447H83.7926V1.68943C83.7926 1.61946 83.7648 1.55147 83.7152 1.50196C83.6655 1.45246 83.5987 1.42407 83.5286 1.42407H80.1025C80.0324 1.42407 79.9656 1.4518 79.9159 1.50196C79.8663 1.55147 79.8385 1.6188 79.8385 1.68943V6.20447H77.9042C77.8341 6.20447 77.7673 6.23219 77.7177 6.28236C77.668 6.33187 77.6403 6.3992 77.6403 6.46983V9.38348C77.6403 9.45345 77.668 9.52078 77.7177 9.57094C77.7673 9.62045 77.8341 9.64817 77.9042 9.64817H79.8346V19.1436C79.8346 19.2136 79.8624 19.2809 79.912 19.3311C79.9616 19.3806 80.0284 19.409 80.0985 19.409H83.5246C83.5948 19.409 83.6616 19.3812 83.7112 19.3311C83.7608 19.2816 83.7886 19.2142 83.7886 19.1436V9.65081H85.7362C85.8063 9.65081 85.8731 9.62309 85.9227 9.57358C85.9723 9.52408 86.0001 9.45675 86.0001 9.38612V6.47181C86.0008 6.40184 85.9736 6.33451 85.9254 6.28434C85.8764 6.23417 85.8102 6.20579 85.7401 6.20447Z'></path>
                      <path d='M39.9663 6.16595H36.5614C36.4158 6.16595 36.2981 6.28477 36.2981 6.43065V19.146C36.2981 19.2926 36.4158 19.4107 36.5614 19.4107H39.9663C40.1119 19.4107 40.2296 19.2919 40.2296 19.146V6.43065C40.2296 6.28477 40.1119 6.16595 39.9663 6.16595Z'></path>
                      <path d='M38.2634 0.000134583C37.8123 0.00607542 37.3723 0.146015 36.9992 0.402131C36.6261 0.658247 36.337 1.01932 36.1677 1.4398C35.9983 1.86028 35.9553 2.32168 36.046 2.76658C36.1359 3.21149 36.3549 3.61942 36.6744 3.93957C36.9939 4.25972 37.4008 4.47821 37.844 4.56732C38.2866 4.65643 38.7457 4.6122 39.1638 4.43992C39.5819 4.26764 39.9398 3.97587 40.1931 3.60028C40.4465 3.22469 40.5841 2.78243 40.5887 2.32828C40.5914 2.02134 40.5325 1.71638 40.4167 1.43254C40.301 1.1487 40.1296 0.8906 39.9133 0.673429C39.697 0.456919 39.4396 0.285295 39.1565 0.169778C38.872 0.0542622 38.5691 -0.00316588 38.2634 0.000134583Z'></path>
                      <path d='M10.0515 0.887961C8.59746 0.792248 7.14142 1.03648 5.79651 1.60152C4.45227 2.16656 3.25621 3.03656 2.30293 4.1442C1.34966 5.25184 0.662983 6.56542 0.299137 7.9833C-0.0647083 9.40118 -0.0971237 10.8851 0.204537 12.3175C0.506198 13.7505 1.13466 15.0932 2.03898 16.2411C2.94396 17.389 4.10033 18.3111 5.41944 18.9342C6.73788 19.558 8.18202 19.8656 9.63872 19.8346C11.0954 19.8029 12.525 19.4333 13.8163 18.7534C13.8573 18.7323 13.9037 18.7224 13.95 18.725C13.9963 18.7276 14.0413 18.7422 14.0796 18.7679C14.3535 18.9514 14.6393 19.1158 14.935 19.2603C15.9597 19.7587 17.085 20.0115 18.2228 19.9996C18.293 19.9996 18.3598 19.9719 18.4094 19.9224C18.459 19.8729 18.4868 19.8056 18.4868 19.7349V16.5163C18.4874 16.453 18.4663 16.3922 18.4259 16.3434C18.3856 16.2945 18.33 16.2622 18.2678 16.2516C17.9648 16.2034 17.6685 16.1183 17.386 15.9975C17.3509 15.9816 17.3198 15.9592 17.2947 15.9302C17.2696 15.9011 17.251 15.8675 17.2404 15.8305C17.2299 15.7935 17.2272 15.7552 17.2325 15.717C17.2378 15.6793 17.2517 15.643 17.2722 15.6107C18.1924 14.2265 18.7342 12.6231 18.842 10.9623C18.9505 9.30151 18.6211 7.64071 17.8881 6.14758C17.1551 4.65445 16.0444 3.38245 14.6664 2.45766C13.2891 1.53353 11.6935 0.989616 10.0409 0.88202L10.0515 0.887961ZM3.7259 10.353C3.72458 9.21702 4.05865 8.10542 4.68579 7.16016C5.31293 6.21491 6.20534 5.47759 7.24925 5.04193C8.29316 4.60626 9.44291 4.49207 10.5516 4.7132C11.6604 4.93433 12.6791 5.48155 13.4789 6.28422C14.2787 7.08755 14.8232 8.11136 15.0435 9.2256C15.2644 10.3398 15.1507 11.495 14.718 12.5452C14.2854 13.5948 13.5524 14.4918 12.6117 15.1229C11.6716 15.7539 10.5662 16.0899 9.43563 16.0892C7.92137 16.0892 6.46863 15.4853 5.39761 14.4093C4.32658 13.3334 3.72326 11.8745 3.72193 10.3524L3.7259 10.353Z'></path>
                      <path d='M69.4721 5.62565C68.3078 5.71476 67.1832 6.09102 66.1988 6.72207C65.2145 7.35311 64.4001 8.21916 63.8285 9.2423C63.257 10.2661 62.946 11.4153 62.9236 12.589C62.9011 13.7626 63.167 14.9231 63.6982 15.968C64.2294 17.0129 65.01 17.91 65.9693 18.5787C66.9292 19.2473 68.0379 19.6678 69.1982 19.8018C70.3586 19.9358 71.5335 19.78 72.619 19.3477C73.7046 18.9153 74.6672 18.2202 75.4207 17.3232C75.4438 17.2961 75.4617 17.2651 75.4729 17.2307C75.4842 17.1971 75.4881 17.1608 75.4848 17.1251C75.4815 17.0895 75.4716 17.0545 75.4551 17.0235C75.4385 16.9918 75.4154 16.9641 75.3876 16.9416L73.3302 15.2808C73.2773 15.2386 73.2098 15.2181 73.1423 15.2241C73.0748 15.23 73.012 15.2623 72.9677 15.3138C72.5231 15.8287 71.9535 16.2188 71.3145 16.4459C70.6755 16.673 69.9881 16.7291 69.3206 16.6089C68.6531 16.4888 68.028 16.1964 67.5067 15.7601C66.9854 15.3237 66.5858 14.7594 66.347 14.121H76.7457C76.8079 14.1224 76.8688 14.1006 76.9171 14.061C76.9654 14.0214 76.9978 13.9653 77.009 13.9039C77.0745 13.5164 77.1069 13.1236 77.1063 12.7302C77.1063 11.748 76.9038 10.777 76.5129 9.87731C76.1219 8.9776 75.5497 8.16899 74.8326 7.50164C74.1154 6.83428 73.2693 6.32337 72.3465 6.00058C71.425 5.67846 70.4459 5.5504 69.4721 5.62565ZM66.347 11.3355C66.6275 10.5856 67.1296 9.93936 67.7852 9.48323C68.4408 9.02711 69.2194 8.78288 70.0166 8.78288C70.8137 8.78288 71.5923 9.02711 72.2479 9.48323C72.9035 9.93936 73.405 10.5856 73.6861 11.3355H66.347Z'></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`h-full ${
                onInput ? 'lg:block hidden' : 'sm:block hidden'
              }`}
            >
              <Navbar />
            </div>
          </div>
          <div
            className={`h-header items-center flex justify-end ${
              onInput ? 'min-w-[100%] sm:min-w-[90%] ' : 'min-w-[70%]'
            } md:min-w-[50%]`}
          >
            {isAuthentication && (
              <div
                className={`items-center px-3 rounded-[4px] hover:bg-[#ffee00] bg-[#fecd1f] flex  max-w-[auto] cursor-pointer mr-4 ${
                  onInput ? 'hidden' : 'block'
                }`}
              >
                <div className='text-primary whitespace-nowrap md:max-w-[250px] py-2 text-center w-auto'>
                  <span className='hidden md:block'>
                    Nâng cấp : dùng thử 7 ngày miễn phí
                  </span>
                  <span className='md:hidden inline-block'>Nâng cấp</span>
                </div>
              </div>
            )}
            <div
              className={` ${
                onInput ? 'flex-1' : 'lg:block hidden'
              } mr-4 h-full `}
            >
              <div className='flex h-full w-full items-center'>
                <SearchBar
                  onClickInput={handleClickInput}
                  onCloseInput={handleClickCloseInput}
                  onInput={onInput}
                />
              </div>
            </div>
            <div
              className={`${
                onInput ? 'hidden' : 'flex'
              } justify-end items-center h-full item-input`}
            >
              <div
                onClick={handleClickInput}
                onBlur={handleClickCloseInput}
                className='w-[30px] mr-4 h-[30px] lg:hidden rounded-full border border-[#ccc] flex items-center justify-center hover:border-[#333]'
              >
                <i className='fa-solid text-[#ccc] fa-magnifying-glass text-base'></i>
              </div>

              {isAuthentication ? (
                <>
                  <div className='relative h-full items-center flex'>
                    <div className=' w-[30px] mr-4 h-[30px] rounded-full py-1 px-2 border border-[#ccc] cursor-pointer hover:border-[#333] shadow-sm ease-in duration-300'>
                      <button
                        className='item-notify flex h-full w-full items-center justify-center'
                        onClick={() => setShowDropdownNotify(true)}
                        onBlur={() => setShowDropdownNotify(false)}
                      >
                        <i className='fa-solid fa-bell text-[#ccc] text-lg block mb-[2px]'></i>
                      </button>
                      <Nodification
                        onNotify={showDropdownNotify}
                        onCloseDropdown={setShowDropdownNotify}
                      />
                    </div>
                  </div>
                  <div
                    ref={divRef}
                    className='relative item-user h-full flex items-center'
                  >
                    <button
                      onClick={() => setOnDropdownUser(true)}
                      className='bg-cover w-[30px] cursor-pointer relative h-[30px] bg-[url("https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-1024.png")] rounded-full'
                    ></button>
                    <DropdownUser
                      onDropdownUser={onDropdownUser}
                      setOnDropdownUser={setOnDropdownUser}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <button
                      onClick={() => {
                        onTabAuth('login');
                        onShowModalAuth(true);
                      }}
                      className='px-3 mr-4 text-sm font-semibold text-[#586380] py-[6px] rounded-[4px] hover:bg-bgColor dark:hover:bg-bgElement block'
                    >
                      Đăng nhập
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        onTabAuth('register');
                        onShowModalAuth(true);
                      }}
                      className='px-3 text-sm font-semibold text-[#282e3e] py-[6px] rounded-[4px] bg-[#fdcd1f] hover:bg-[#fedc62] block'
                    >
                      Đăng ký
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed bg-white text-textPrimary dark:bg-bgDark dark:text-bgColor top-0 z-[20] ${
          showMenuMobile ? '' : 'translate-x-[-100%]'
        } duration-500 ease-linear right-0 left-0 bottom-0`}
      >
        <div className='m-2'>
          <span
            onClick={handleHideMenuMobile}
            className='flex items-center justify-center h-[40px] w-[40px] cursor-pointer rounded-full bg-white hover:bg-bgColor dark:bg-transparent dark:hover:bg-bgElement'
          >
            <HiOutlineX className='text-2xl font-normal text-[#949494]' />
          </span>
        </div>
        <div>
          <Navbar
            showDropdowLibarian={showDropdowLibarian}
            setShowDropdownLibarian={setShowDropdownLibarian}
            showDropdownCreateMobile={showDropdownCreate}
            setShowDropdownCreateMobile={setShowDropdownCreate}
            showMenuMobile={showMenuMobile}
            onShowMenuMobile={() => onShowMenuMobile(false)}
          />
          <div
            className={`lg:flex my-6 ${
              isAuthentication ? 'block' : 'hidden'
            } items-center`}
          >
            <div className='h-[40px] mr-4 w-[40px] rounded-full ml-3 bg-cover bg-[url("https://cdn.tgdd.vn/Files/2021/01/19/1321035/hieu-ro-y-nghia-hoa-hong-giup-ban-chinh-phuc-nang--8-489x367.jpg")]'></div>
            <h3 className='font-bold text-xl'>TuanFs</h3>
          </div>
          <div className={`${isAuthentication ? 'block' : 'hidden'}`}>
            <ul className='grid grid-cols-2 mx-3'>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl  block mb-4 font-light hover:opacity-70'
                >
                  Hồ sơ
                </Link>
              </li>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Tiến độ
                </Link>
              </li>
              <li className='col-span-1'>
                <button className='text-xl block mb-4 font-light hover:opacity-70'>
                  Chế độ ban đêm
                </button>
              </li>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Giới thiệu bạn bè
                </Link>
              </li>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Giúp đỡ và phản hồi
                </Link>
              </li>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Ứng dụng di động
                </Link>
              </li>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Blog
                </Link>
              </li>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Quyền riêng tư
                </Link>
              </li>
              <li className='col-span-1'>
                <Link
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Nâng cấp
                </Link>
              </li>
              <li className='col-span-1'>
                <button
                  onClick={() => dispatch(logOut())}
                  to='/'
                  className='text-xl block mb-4 font-light hover:opacity-70'
                >
                  Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
