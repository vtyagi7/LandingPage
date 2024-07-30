import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {

 

  return (
    <div id="home" className="bg-[url('/homebg.gif')] w-screen h-screen bg-no-repeat bg-cover bg-center " >
       
        <div className='mx-auto container padding-container justify-normal flex flex-col w-screen h-screen box-border'>
           <div className='flex items-center justify-center basis-1/3 box-border'>
          
          </div> 
          <div className='flex items-center justify-center basis-1/3 gap-5 box-border'>
              <Image className='shrink md:shrink-0' src="/logo.png" alt="logo" width={200} height={200}/>
              <div className='w-auto h-full rounded-tr-[10px] rounded-br-[10px] backdrop-blur-[14px] border-l-2 border-white'>
                  <div id='heading-box' className='pl-[20px] pt-[40px] mb-[24px]'>
                      <text className='font-playfair bold-48 lg:bold-72 md:bold text-[#FFF]'>Making Retail Future-Ready</text>
                  </div>
                  <div id='text-box' className='pl-[20px] pb-[40px]'>
                      <text id='details' className='font-playfair medium-20 lg:medium-30 text-[#F2F2F2]'>Helping small-scale retailers leverage modern technology to sell better, think better, and live better.</text>
                  </div>
              </div>
          </div>
          <div className='flex items-end justify-between basis-1/3 box-border padding-container padding-container-y lg:pb-4 gap-x-[2px]'>
              <div id="socialIcons" className=' flex items-center justify-evenly lg:gap-x-4  sm:gap-x-2 xs:gap-x-1'>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <Image className=" cursor-pointer hover:bg-[#E97451] hover:rounded-md transform hover:scale-150"src="/insta.png" alt="insta icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.linkedin.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#E97451] hover:rounded-md transform hover:scale-150 "src="/linkedin.png" alt="linkedin icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.youtube.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#E97451] hover:rounded-md transform hover:scale-150 " src="/youtube.png" alt="youtube icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.facebook.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#E97451] hover:rounded-md transform hover:scale-150 " src="/facebook.png" alt="facebook icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://x.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#E97451] hover:rounded-md transform hover:scale-150 "src="/x.png" alt="twitter icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://x.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#E97451] hover:rounded-md transform hover:scale-150 "src="/gmail.png" alt="twitter icon" width={30} height={30}/>
                    </Link>
              </div>
              <Link href="#feedback">
              <div className='group cursor-pointer flex flex-col items-center justify-center border-2 p-4 gap-y-4 rounded-lg backdrop-blur-sm hover:border-none hover:backdrop-blur-0'>
                  <div >
                      <Image id='QR' src= "/QRcode.png" alt="QR code" width={84} height={84} />
                  </div>
                  <div>
                      <text className="lg:bold-18 sm:bold-16 xs:bold-12 text-[#fff] font-montserrat group-hover:border-2 group-hover:rounded-lg group-hover:p-1 group-hover:bg-[#E97451] group-hover:border-transparent" id='join'>Join The Revolution</text>   
                  </div>
                  
                  

              </div>
              </Link>
          </div>

        </div>
        
        
    </div>
  )
}

export default Hero