import React from 'react'

export default function LoadingPage() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='w-[20px] h-[20px] animate-scaling animation-delay-1100  bg-[#4353ff] rounded-full mr-5px scale-0'></div>
      <div className='w-[20px] h-[20px] animate-scaling animation-delay-1000  bg-[#4353ff] rounded-full mr-5px scale-0'></div>
      <div className='w-[20px] h-[20px] animate-scaling animation-delay-900  bg-[#4353ff] rounded-full mr-5px scale-0'></div>
      <div className='w-[20px] h-[20px] animate-scaling animation-delay-800  bg-[#4353ff] rounded-full mr-5px scale-0'></div>
      <div className='w-[20px] h-[20px] animate-scaling animation-delay-700  bg-[#4353ff] rounded-full mr-5px scale-0'></div>
      <div className='w-[20px] h-[20px] animate-scaling animation-delay-600  bg-[#4353ff] rounded-full mr-5px scale-0'></div>
    </div>
  )
}
