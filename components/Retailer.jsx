import Image from 'next/image'

const Retailer = () => {
  return (
  <div id="retailer"className="bg-[url('/retailerbg.png')] w-screen h-screen bg-no-repeat bg-cover bg-center">
    <div className="mx-auto container padding-container flex flex-col w-screen h-screen box-border items-center justify-between"> 
      <div className='basis-1/6 w-screen bg-[#39393A]/75 box-border padding-container flex items-center justify-center'>
          <div className=' box-border'>
            <h2 className='lg:bold-48 md:bold-40 xs:bold-30 font-playfair text-[#FFF] text-center'>Level up your retail with radR's Innovative strength</h2>
          </div>
      </div>


      <div className='basis-2/6 w-screen bg-[#39393A]/75 flex flex-row padding-screen box-border gap-screen' >
        <div className='basis-1/2 flex flex-col items-center justify-around'>

          {/* //card 1 */}
          <div className='box-border flex items-center lg:px-2 lg:py-4 lg:gap-x-2 xs:px-1 xs:py-2 xs:gap-x-1'>
            <div className='card-image'> 
              <Image className=" " src="/inventory.png" alt="icon" width={60.674} height={60.674}/>
            </div>
            <div className=' box-border max-container flex flex-col  justify-around  lg:gap-y-4 xs:gap-y-1'>
              <div className='text-card container'>
                <text className='lg:bold-36 md:bold-24 xs:bold-18 font-playfair text-[#FFF]'>Efficient Inventory</text>
              </div>
              <div className='p-card lg:w-[566px] md:w-[300px] sm:w-auto xs:w-auto '>
                <p className='lg:regular-18 md:regular-16 xs:regular-12 font-opensans text-[#FFF]'>Streamline operations with automated updates and smart systems.</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className='box-border  flex items-center lg:px-2 lg:py-4 lg:gap-x-2 xs:px-1 xs:py-2 xs:gap-x-1'>
            <div className='card-image'> 
              <Image className=" " src="/sales-mngmt.png" alt="icon" width={60.674} height={60.674}/>
            </div>
            <div className=' box-border max-container flex flex-col  justify-around lg:gap-y-4 xs:gap-y-1'>
              <div className='text-card container'>
                <text className='lg:bold-36 md:bold-24 xs:bold-18 font-playfair text-[#FFF]'>Sales Management</text>
              </div>
              <div className='p-card lg:w-[566px] md:w-[300px] sm:w-auto xs:w-auto '>
                <p className='lg:regular-18 md:regular-16 xs:regular-12 font-opensans text-[#FFF]'>Maintain personal touch, negotiate smartly, sell effortlessly offline and online.</p>
              </div>
            </div>
          </div>

        </div>
        <div className='basis-1/2 flex flex-col items-center justify-around'>

            {/* //card 1 */}
          <div className='box-border flex items-center lg:px-2 lg:py-4 lg:gap-x-2 xs:px-1 xs:py-2 xs:gap-x-1 '>
            <div className='card-image'> 
              <Image className=" " src="/reminders.png" alt="icon" width={60.674} height={60.674}/>
            </div>
            <div className=' box-border max-container flex flex-col  justify-around  lg:gap-y-4 xs:gap-y-1'>
              <div className='text-card container'>
                <text className='lg:bold-36 md:bold-24 xs:bold-18 font-playfair text-[#FFF]'>Personalized Reminders</text>
              </div>
              <div className='p-card lg:w-[566px] md:w-[300px] sm:w-auto xs:w-auto '>
                <p className='lg:regular-18 md:regular-16 xs:regular-12 font-opensans text-[#FFF]'>Enhance customer relationships with tailored notes and reminders for special occasions.</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className='box-border  flex items-center lg:px-2 lg:py-4 lg:gap-x-2 xs:px-1 xs:py-2 xs:gap-x-1 '>
            <div className='card-image'> 
              <Image className=" " src="/social-media.png" alt="icon" width={60.674} height={60.674}/>
            </div>
            <div className=' box-border max-container flex flex-col  justify-around  lg:gap-y-4 xs:gap-y-1'>
              <div className='text-card container'>
                <text className='lg:bold-36 md:bold-24 xs:bold-18 font-playfair text-[#FFF]'>Social Media Capabilities</text>
              </div>
              <div className='p-card lg:w-[566px] md:w-[300px] sm:w-auto xs:w-auto '>
                <p className='lg:regular-18 md:regular-16 xs:regular-12 font-opensans text-[#FFF]'>Increase visibility and engagement by sharing directly through the app.</p>
              </div>
            </div>
          </div>



        </div>

      </div>

      {/*


        <div className=' box-border  container flex items-center justify-around gap-x-6'>
          <div className='card-image '> 
            <Image className=" " src="/social-media.png" width={60.674} height={60.674}/>
          </div>
          <div className=' box-border max-container flex flex-col  justify-around  gap-y-4'>
            <div className='text-card container'>
              <text className='lg:bold-36 bold-20 font-playfair text-[#FFF]'>Social Media Capabilities</text>
            </div>
            <div className='p-card max-container '>
              <p className='lg:regular-18 regular-12 font-opensans text-[#FFF]'>Increase visibility and engagement by sharing directly through the app. </p>
            </div>
          </div>
        </div>

        

          
      </div> */}

    </div>
    
 </div>
  )
}

export default Retailer