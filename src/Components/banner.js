import React, { useState } from 'react'
import {HiArrowLeft, HiArrowRight} from 'react-icons/hi'

function Banner() {

    const[slideStatus,setSlideStatus] = useState(0)
    const Data = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/V1/V2/PC_01.gif",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/V1/V2/PC_01.gif",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/V1/V2/PC_01.gif"
    ]

    function prevSlide()
    {
        setSlideStatus(slideStatus === 0 ? 2 : (prev)=>prev-1)
    }
    function nextSlide()
    {
        setSlideStatus(slideStatus === 2 ? 0 : (prev)=>prev + 1)
    }
    
  return (
    <div className='w-full h-auto'>               
            <div className=' w-full h-[500px] relative overflow-x-hidden'>
                <div className='w-[400vw] h-full flex transition-transform duration-1000'style={{transform:`translateX(-${slideStatus * 100}vw)`}} >
                    <img src={Data[0]} alt="firstImg" className=' w-[735px] md:w-screen md:h-[55vw] sm:h-[65vw] lg:h-[45vw] xl:h-[35vw] h-[72vw]  object-cover  overflow-x-hidden' />
                    <img src={Data[1]} alt="firstImg" className=' w-[735px] md:w-screen md:h-[55vw] sm:h-[65vw] lg:h-[45vw] xl:h-[35vw] h-[72vw]  object-cover  overflow-x-hidden'  />
                    <img src={Data[2]} alt="firstImg" className=' w-[735px] md:w-screen md:h-[55vw] sm:h-[65vw] lg:h-[45vw] xl:h-[35vw] h-[72vw]  object-cover  overflow-x-hidden' />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex bottom-20 md:bottom-22 sm:bottom-22 gap-8 '>
                <div className='w-16 h-8 border-[1px] border-gray-700 flex items-center justify-center 
                hover:cursor-pointer hover:bg-gray-700 hover:text-white duration-300' onClick={prevSlide} >
                    <HiArrowLeft />
                </div>
                <div className='w-16 h-8 border-[1px] border-gray-700 flex items-center justify-center 
                hover:cursor-pointer hover:bg-gray-700 hover:text-white  duration-300' onClick={nextSlide}>
                    <HiArrowRight />
                </div>
                </div>
            </div>
    </div>
  )
}

export default Banner
