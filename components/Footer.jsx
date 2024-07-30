
import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"

const Footer = () => {
  return (
    
    <div className="flex flex-col bg-[url('/feedback-back.png')] w-screen h-auto">

      <div id="icons" >
                <div id="socialIcons" className='p-4  flex items-center justify-center lg:gap-x-6  sm:gap-x-4 xs:gap-x-1 bg-[#FAE0D8]/20'>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <Image className=" cursor-pointer hover:bg-[#168bae] hover:invert hover:rounded-md transform hover:scale-150" src="/ins.png" alt="insta icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.linkedin.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#168bae] hover:invert hover:rounded-md transform hover:scale-150 "src="/ln.png" alt="linkedin icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.youtube.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#168bae] hover:invert hover:rounded-md transform hover:scale-150 " src="/yt.png" alt="youtube icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://www.facebook.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#168bae] hover:invert hover:rounded-md transform hover:scale-150 " src="/fb.png" alt="facebook icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://x.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#168bae] hover:invert hover:rounded-md transform hover:scale-150 "src="/x1.png" alt="twitter icon" width={30} height={30}/>
                    </Link>
                    <Link href="https://x.com/" target='_blank'>
                        <Image className="cursor-pointer hover:bg-[#168bae] hover:invert hover:rounded-md transform hover:scale-150 "src="/gm.png" alt="twitter icon" width={30} height={30}/>
                    </Link>
              </div>
      </div>

      <div id="menu">
        <Navbar/>
      </div>
      <div id="copyright" className="bg-[#E56840]/30 flex flex-col gap-y-4 py-10 items-center">
        <div className="font-lato flex gap-x-4 regular-14 underline">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div className="font-opensans regular-18">
          <span>© 2024 radR. All rights reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer