import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
    <div className='bg-[#fbe8ff] gap-28 flex h-[100vh]'>
      <div className=' justify-center gap-6 pl-[180px] leading-tight mt-28'>
        <h2 className='text-[#090909] text-2xl font-semibold'>NEW ARRIVELS ONLY</h2>
      <div>
      <div className='flex items-center mt-4 '>
            <p className='text-[#171717] text-7xl font-semibold '>New</p>
            <img className='w-[105px] h-14' src="./imges/Hand.png" alt="" />  
        </div>
        <p className='text-[#171717] text-7xl font-semibold '>Collections</p>
          <p className='text-[#171717] text-7xl font-semibold mt-1'>For Everone</p>
        
         
      </div>
        <div className='flex w-[250px] h-[50px] bg-[#ff4141] cursor-pointer text-white text-2xl mt-9 font-semibold rounded-3xl '>
          <p className='p-2 pl-3'>Latest Collection</p>
          <FaArrowRight size={40} className='pt-4'/>
        </div>
      
      </div>
      <div className='mt-24'>
        <img className='w-[100%] h-96' src="./imges/fashin.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Hero
