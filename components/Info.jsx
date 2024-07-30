import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (

    // w-auto h-auto pt-[83px] pb-[83px] pr-[41px] pl-[41px] border-2 border-black p-1.5
    <div className="bg-swhite w-screen h-auto bg-no-repeat bg-cover bg-center">
        <div className='mx-auto container padding-container flex items-center justify-evenly py-6 lg:py-20 3xl:py-0 gap-8 box-border'>
                <div className=' w-auto h-full flex items-center gap-8 justify-around'>
                    <div className='shrink md:shrink-0'>
                        <Image className= 'border-2 border-[#39393A] box-content p-2' src="/p1icon.png" alt="description 1" width={28} height={28}/>
                    </div>
                    <div className='max-container '>
                        <p className='lg:regular-18 regular-14 font-opensans text-[#39393A]'>With e-commerce penetration growing, 20% of current offline retail sales could shift online by 2030. You would not want be left behind !</p>
                    </div>
                </div>
                <div className="border-l-[1px] border-black h-[120px]"></div>
                <div className='w-auto h-full flex items-center gap-8 justify-around'>
                    <div className='shrink md:shrink-0'>
                        <Image className='border-2 border-[#39393A] box-content p-2' src="/p2icon.png" alt="description 2" width={28} height={28}/>
                    </div>
                    <div className='max-container '>
                        <p className='lg:regular-18 regular-14 font-opensans text-[#39393A]'>We provide the technology and support you need to retain and expand your customer base, enhancing profitability through advanced data analytics.</p>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Info