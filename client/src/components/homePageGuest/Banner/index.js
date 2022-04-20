import React from "react"

export default function Banner() {
  return (
    <div className="pt-header box-border min-w-[375px]">
      <div className="bg-[#211e75] md:min-h-[100%] min-h-[550px]  sm:w-screen flex items-center py-10">
        <div className="relative mx-auto w-[80%] h-full">
          <div className="w-full h-full">
            <img
              src="https://images.prismic.io/quizlet-prod/eca927aa-4f86-4e40-9565-8dd2fefb2cde_hero+image+shaded.png?auto=compress,format"
              className=" object-fit h-full w-full min-h-[550px] md:min-h-[100%] rounded-[20px]"
              alt="Banner"
            />
          </div>
          <div className="md:flex  absolute bottom-0 text-white">
            <div className="flex-1 m-8">
              <h3 className="font-bold text-[30px] lg:text-[44px] mb-2 ">
                Trở thành phiên bản xuất sắc nhất của chính bạn
              </h3>
              <p className="hidden sm:block text-[20px] font-semibold">
                Nắm vững mọi môn học, từng bước một
              </p>
            </div>
            <div className="flex-1 self-end md:text-right m-8">
              <button className="font-semibold text-base rounded-[10px] bg-colorPrimary py-4 px-6 text-white">
                Bắt đầu học
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
