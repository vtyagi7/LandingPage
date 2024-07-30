import React from 'react'
import Image from 'next/image'

const Customer = () => {
  return (
    <div id="customer"className="bg-[url('/customerbg.png')] w-screen h-screen bg-no-repeat bg-cover bg-center">
      <div className=" mx-auto container padding-container flex flex-col w-screen h-screen box-border items-center justify-between">
        <div className='basis-1/6 w-screen bg-[#9E6C4A]/75 box-border padding-container flex items-center justify-center'>
          <div className=' box-border'>
            <h2 className='lg:bold-48 md:bold-40 xs:bold-30 font-playfair text-[#FFF] text-center'>Cultivate an unparalleled consumer experience</h2>
          </div>
        </div>
        
        <div className="basis-2/6 w-screen bg-[#9E6C4A]/75 flex flex-col items-center justify-around">
        {/* //card 1 */}
          <div className='box-border flex items-center lg:p-6 md:p-4 xs:p-2  gap-x-6 lg:self-start lg:ml-8 self-center'>
            <div className='card-image'> 
              <Image className=" " src="/marketplace.png" alt="icon" width={60.674} height={60.674}/>
            </div>
            <div className=' box-border flex flex-col justify-center  lg:gap-y-4 md:gap-y-2 xs:gap-y-1'>
              <div className=''>
                <text className='lg:bold-36 bold-24 font-playfair text-[#FFF]'>Customized Shopper Marketplace</text>
              </div>
              <div className='lg:w-[566px] md:w-[400px] sm:w-auto xs:w-auto'>
                <p className='lg:regular-18 md:regular-16 xs:regular-12 font-opensans text-[#FFF]'>Connect customers with local shops that match their style and preferences.</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className='box-border  flex items-center  lg:p-6 md:p-4 xs:p-1 gap-x-6 lg:self-center self-center' >
            <div className='card-image'> 
              <Image className=" " src="/delivery.png" alt="icon" width={60.674} height={60.674}/>
            </div>
            <div className=' box-border flex flex-col  justify-around lg:gap-y-4 md:gap-y-2 xs:gap-y-1'>
              <div className=''>
                <text className='lg:bold-36 bold-24 font-playfair text-[#FFF]'>Diverse Delivery Options</text>
              </div>
              <div className='p-card lg:w-[566px] md:w-[400px] sm:w-auto xs:w-auto '>
                <p className='lg:regular-18 md:regular-16 xs:regular-12 font-opensans text-[#FFF]'>From instant in-store pickups to fast home deliveries, choose what works best for you.</p>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className='box-border flex items-center lg:p-6 md:p-4 xs:p-1 gap-x-6  lg:self-end lg:mr-8 self-center'>
            <div className='card-image'> 
              <Image className=" " src="/engagement.png"alt="icon" width={60.674} height={60.674}/>
            </div>
            <div className=' box-border  flex flex-col  justify-around lg:gap-y-4 md:gap-y-2 xs:gap-y-1'>
              <div className=''>
                <text className='lg:bold-36 bold-24 font-playfair text-[#FFF]'>Interactive Customer Engagement</text>
              </div>
              <div className='p-card lg:w-[566px] md:w-[400px] sm:w-auto xs:w-auto '>
                <p className='lg:regular-18 md:regular-16 xs:regular-12 font-opensans text-[#FFF]'>Facilitate real-time negotiations and provide detailed product information through QR codes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer