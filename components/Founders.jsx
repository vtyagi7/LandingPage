import Image from 'next/image'
import React from 'react'

const Founders = () => {
  return (
    <div id="founders"className="bg-[url('/Founder.png')] w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center ">
       <div id="container" className='mx-auto container padding-container padding-container-y flex items-center justify-center'>

          <div id="imageAndName" className='relative basis-1/4 flex flex-col items-center justify-center'>
              <div className='relative z-10 lg:-mr-20 md:-mr-16 sm:-mr-14 xs:-mr-10'>
                <Image src="/pramodh.png" alt="founder image" width={380} height={385}/>
              </div>
              <div id="nametag" className=' rounded-lg lg:px-10 lg:py-8 md:px-8 md:py-6 sm:px-6 sm:py-4 xs:px-4 xs:py-2 flex flex-col lg:gap-y-4 md:gap-y-3 sm:gap-y-2 xs:gap-y-1 bg-[#39393A]/80 z-30 relative  md: sm:-mt-8 sm:-mr-20 xs:-mt-0 xs:-mr-10 backdrop-blur-sm'>
                <text className='text-[#fff] font-opensans lg:medium-18 md:medium-16 sm:medium-14 xs:medium-12'>Pramodh V B</text>
                <text className='text-[#fff] lg:medium-16 md:medium-14 sm:medium-12 xs:medium-10 font-montserrat'>CEO, radR</text>
                <div className='flex gap-x-2 items-center'>
                  <Image src="/in.png" alt="linkedin icon" width={24} height={24}/>
                  <Image src="/x4.png" alt="twitter icon" width={24} height={24}/>
                  <Image src="/mail.png" alt="gmail icon " width={24} height={24}/>
                  <Image src="/call.png" alt="calling icon" width={24} height={24}/>
                </div>
              </div>
          </div>

          <div id="message" className= ' z-0 basis-2/4 bg-teal-700  lg:w-[] md:w-[300px] sm:w-[150px] xs:[95px] rounded-full  bg-opacity-60 flex items-center justify-center'>
            <p className='lg:p-24 lg:bold-20 md:p-20 md:bold-18 sm:p-16 md:bold-16 xs:p-12 xs:bold-12 font-playfair text-[#fff] text-center'>At radR, our vision is to transform the retail landscape. We are committed to enhancing the retail experience by simplifying the lives of retailers through unparalleled support and cutting-edge technology. Our mission is to make operations smoother and more efficient than ever before. Join us on this journey to make the future of retail not just better, but extraordinary.</p>
          </div>  

          <div id="imageAndName" className=' relative basis-1/4 flex flex-col items-center justify-center'>
              <div className='relative z-10 lg:-ml-20 md:-ml-16 sm:-ml-14 xs:-ml-10'>
                <Image src="/Rikhi.png" alt="founder image" width={380} height={385}/>
              </div>
              <div id="nametag" className=' rounded-lg lg:px-10 lg:py-8 md:px-8 md:py-6 sm:px-6 sm:py-4 xs:px-4 xs:py-2 flex flex-col lg:gap-y-4 md:gap-y-3 sm:gap-y-2 xs:gap-y-1 bg-[#39393A]/80 z-30 relative sm:-mt-8 sm:-ml-20 xs:-mt-0 xs:-ml-10 backdrop-blur-sm'>
                <text className='text-[#fff] font-opensans lg:medium-18 md:medium-16 sm:medium-14 xs:medium-12'>Rikhi Ram Satnami</text>
                <text className='text-[#fff] lg:medium-16 md:medium-14 sm:medium-12 xs:medium-10 font-montserrat'>CTO, radR</text>
                <div className='flex gap-x-2 items-center'>
                  <Image src="/in.png" alt="linked in icon" width={24} height={24}/>
                  <Image src="/x4.png" alt="twitter icon" width={24} height={24}/>
                  <Image src="/mail.png" alt="gmail icon" width={24} height={24}/>
                  <Image src="/call.png" alt="calling icon"width={24} height={24}/>
                </div>
              </div>
          </div>
          

          

       </div>

    </div>
  )
}

export default Founders