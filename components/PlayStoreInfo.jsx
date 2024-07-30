import React from 'react'
import Image from 'next/image'

const PlayStoreInfo = () => {
  return (

   <div className='  w-screen h-auto bg-[#E97451]/75 bg-gradient-to-br from-[#E97451]/75 via-[#EE9176] to-[#EEDAAB] '>
    <div className='flex lg:flex-row md:flex-col sm:flex-col xs:flex-col mx-auto container justify-evenly p-8 gap-2'>
        <div className= ' basis-1/2 bg-gradient-to-t from-[#ffff]/30 to-[#ffff]/30  rounded-lg p-7 pl-6 '>    
          <div className=' flex '>
            <h1 className='lg:text-5xl md:text-3xl sm:text:-2xl xs:text-base font-playfair text-[#FFF]'>Currently, our services are available exclusively on Android devices.</h1>
          </div>

        <div className=' mt-5 lg:w-[566px] md:w-[400px] sm:w-auto xs:w-auto'>
          <p className='lg:text-2xl md:text-xl sm:text-lg xs:text-xs py-5 font-playfair text-[#FFF]'>
              Stay tuned for our upcoming launch on iOS and Windows platforms to experience seamless retail management across all your devices.</p>
          </div >

        </div>

        <div className='basis-1/2  flex  justify-evenly gap-2 '>
          
            <div className='flex flex-col items-center'>
              <Image className= '' src="/Pixel4XL.svg" alt="description 1" width={170} height={30}/>
              <Image className='mt-4' src="/GooglePlay.svg" width={130} height={170} />
            </div>
              
            <div className='flex flex-col justify-center items-center'>
              <Image className= '' src="/SafariBrowser.svg" alt="description 2" width={180} height={350}/>

              <Image className='mt-4' src="/Group.svg" width={130} height={170} />
              <div className='relative'>
              

              </div>
            </div>
              
            <div className='flex flex-col items-center'>
              <Image className= '' src="/iphone.svg" alt="description 3" width={170} height={300}/>
              <Image className='mt-4' src="/appstore.svg" width={130} height={170} />
            </div>
              
        </div>
      </div>
   </div>



  )
}

export default PlayStoreInfo