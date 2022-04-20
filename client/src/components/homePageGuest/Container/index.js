import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

export default function Container() {
  return (
    <div>
      <div className='text-[#303545] font-bold text-[32px] text-center sm:text-left sm:flex sm:items-center mb-[162px]'>
        <span className=" bg-[url('https://assets.quizlet.com/a/j/dist/app/i/prismic/scribble.6c75e80726e3401.svg')] w-[130px] h-[100px] bg-[length:100%_100%] bg-no-repeat inline-flex md:flex items-center justify-center">
          90%
        </span>
        <p className='ml-3 md:mt-12 lg:mt-0'>
          người dùng Quizlet cho biết họ đã cải thiện được điểm số
        </p>
      </div>
      <div>
        <div className='flex items-center mb-[100px] justify-between flex-wrap'>
          <div className='max-w-[100%] order-2 md:order-1 md:max-w-[48%]'>
            <h3 className='text-[#303545] font-bold text-[32px] mb-10'>
              Bạn chỉ cần động não, còn mọi thứ khác để chúng tôi lo
            </h3>
            <p className='text-[20px] text-[#484d5b] font-normal'>
              Từ các thẻ ghi nhớ giúp bạn học tiếng Anh, đến các trò chơi giúp
              học lịch sử dễ dàng, bạn có thể sử dụng nhiều loại công cụ để
              chinh phục mọi thử thách.
            </p>
          </div>
          <div className='max-w-[100%] order-1 md:order-2 md:max-w-[48%] overflow-hidden'>
            <img
              className='h-full w-full'
              src={
                "https://images.prismic.io/quizlet-prod/d4052d90-f71e-466a-86f5-080cf02de2da_20210814_QZ_Home_Flashcards.png?auto=compress,format&rect=0,2,3072,2395&w=1026&h=800"
              }
              alt='Section'
            />
          </div>
        </div>
        <div className='flex items-center mb-[100px] justify-between flex-wrap'>
          <div className='max-w-[100%] rounded-[10px] md:max-w-[48%] overflow-hidden'>
            <img
              className='h-full w-full'
              src={
                "https://images.prismic.io/quizlet-prod/3a92729c-f212-4ac0-8dad-b2c875c57358_20210814_QZ_Home_StudyJam.png?auto=compress,format&rect=0,2,3072,2395&w=1026&h=800"
              }
              alt='Section'
            />
          </div>
          <div className='max-w-[100%] md:max-w-[48%]'>
            <h3 className='text-[#303545] font-bold text-[32px] mb-10'>
              Thành công tiếp theo của bạn đang ở rất gần rồi.
            </h3>
            <p className='text-[20px] text-[#484d5b] font-normal'>
              Mỗi kiến thức mới bạn học là một thành tích. Quizlet chia nhỏ các
              chủ đề và môn học để bạn tiến bộ từng ngày.
            </p>
          </div>
        </div>
        <div className='flex items-center rounded-[10px] mb-[100px] justify-between flex-wrap'>
          <div className='max-w-[100%] order-2 md:order-1 md:max-w-[48%]'>
            <h3 className='text-[#303545] font-bold text-[32px] mb-10'>
              Đừng nản lòng. Cùng nỗ lực nào.
            </h3>
            <p className='text-[20px] text-[#484d5b] font-normal'>
              Khi một bài học nhỏ nhất cũng mang lại cảm giác chiến thắng, bạn
              sẽ có thêm động lực tiếp bước.
            </p>
          </div>
          <div className='max-w-[100%] order-1 md:order-2 md:max-w-[48%] overflow-hidden'>
            <img
              className='h-full w-full'
              src={
                "https://images.prismic.io/quizlet-prod/6b2ff704-ccbf-441e-9b49-dbd3b7d7d530_20210814_QZ_Home_MobileApp.png?auto=compress,format&rect=0,2,3072,2395&w=1026&h=800"
              }
              alt='Section'
            />
          </div>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            {" "}
            <div className='text-center'>
              <div>
                <h3 className=' font-bold text-[30px] text-[#303545] after:content-[url("https://assets.quizlet.com/a/j/dist/app/i/prismic/quotes-close.f05dbfc1b568217.svg")] after:relative after:ml-3 before:content-[url("https://assets.quizlet.com/a/j/dist/app/i/prismic/quotes-open.76da8581ea3adc0.svg")] before:relative before:ml-3'>
                  Trước đây, khi nói đến việc học, tôi dở vô cùng. Bây giờ tôi
                  đang ở một trường đại học mới và họ giới thiệu tôi với
                  Quizlet. Tôi không còn căng thẳng mỗi khi học và làm bài tập
                  nữa. CẢM ƠN QUIZLET!!!
                </h3>
              </div>
              <p className='text-[#a9a9a9] text-base mt-4'>
                - BUTTERCUP, 19 tuổi
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className='text-center'>
              <div>
                <h3 className=' font-bold text-[30px] text-[#303545] after:content-[url("https://assets.quizlet.com/a/j/dist/app/i/prismic/quotes-close.f05dbfc1b568217.svg")] after:relative after:ml-3 before:content-[url("https://assets.quizlet.com/a/j/dist/app/i/prismic/quotes-open.76da8581ea3adc0.svg")] before:relative before:ml-3'>
                  Quizlet đã giúp tôi hiểu được việc học thật sự vui, quan trọng
                  và thú vị như thế nào! Năm nay, trong lớp Hóa học, tôi đã đưa
                  các thuật ngữ lên Quizlet và cảm thấy tự tin hơn về bài kiểm
                  tra sắp tới của mình.
                </h3>
              </div>
              <p className='text-[#a9a9a9] text-base mt-4'>
                - NICOLEB18, 29 tuổi
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mt-20 text-center'>
        <h3 className='text-2xl font-bold text-[#303545] mb-8'>
          Bạn đã sẵn sàng cải thiện điểm số
        </h3>
        <button className='px-5 bg-colorPrimary py-4 text-white text-base rounded-[10px]'>
          Bắt đầu học
        </button>
      </div>
    </div>
  );
}
