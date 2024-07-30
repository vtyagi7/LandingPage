import React from 'react'
import Link from 'next/link'

const Calltoaction = () => {
  return (

    // px-6 lg:px-20 3xl:px-0 xs:px-2
    <div className="bg-[url('/futurebg.gif')] w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center">
      <div className='container mx-auto padding-container flex flex-col items-center gap-y-32 '>
          <div className='w-auto h-full rounded-[6px] backdrop-blur-[14px]  flex items-center'>
            <text className='lg:bold-36 md:bold-28 xs:bold-20 font-playfair text-[#FFF] text-center'>Empowering small retailers to sell, think, and live better with modern tech.</text>
          </div>
          
          <div className='cta flex flex-row items-center gap-x-8  '>
            <div className='lg:w-[566px] lg:h[566px] md:w-[400px] sm:w-[300px] xs:w-[200px] rounded-[6px]  backdrop-blur-[14px] flex flex-row items-center '>
              <text className='p-2 font-playfair bold-48  xs:bold-36  text-[#FFF] text-right'>Don't Just Survive in the New Retail Landscape Thrive with radR</text>
            </div>
            <div className='w-[6px] h-[400px] rounded-[6px]  bg-[#E97451]'>
            </div>
            <Link className='cursor-pointer' href="#feedback">
            <div className=' cursor-pointer lg:w-[240px] lg:h-[240px] md:w-[200px] md:h-[200px] sm:w-[160px] sm:h-[160px] xs:w-[90px] xs:h-[90px]  bg-[#A83614]/30 backdrop-blur-md   rounded-full flex items-center transition ease-in-out delay-150 hover:-translate-y-2 duration-300 hover:bg-col1 '>
              <div className='  font-montserrat lg:bold-28 md:bold-28 sm:bold-20 xs:bold-18 text-[#FFF] text-center'>Let's Make the Future Ours !</div>
            </div>
            </Link>
          </div>

      </div>
    </div>
  )
}

export default Calltoaction


{/* <div class="w-60 h-60 justify-center items-center gap-2 inline-flex">
    <div class="w-60 h-60 bg-red-400/opacity-40 rounded-full border backdrop-blur-[26px]"></div>
    <div class="flex-col justify-center items-center gap-[7px] inline-flex">
        <div class="w-[145px] text-center text-white text-[26px] font-bold font-['Montserrat']">Let's Make the Future Ours</div>
    </div>
</div> */}