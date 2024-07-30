import Link from "next/link"

const Navbar = () => {
  return (
    <div className=" bg-[#F4BEA4]/75 backdrop-blur-md flex items-center justify-center">
        <ul className="container padding-container py-5 flex items-center justify-center font-rob md:regular-16 lg:regular-18 sm:regular-14 xs:regular-12  text-[#000] lg:gap-x-10 md:gap-x-8 sm:gap-x-6 xs: gap-x-2 "> 
        <Link href="#home">
          <li className="lg:hover:medium-18 md:hover:medium-16 sm:hover:medium-14 xs:hover:medium-12  hover:border-b-2 hover:border-[#000] hover:pb-2" >Home</li>
        </Link>

        <Link href="#retailer">
          <li className="lg:hover:medium-18 md:hover:medium-16 sm:hover:medium-14 xs:hover:medium-12  hover:border-b-2 hover:border-[#000] hover:pb-2">Retailers</li>
        </Link>

        <Link href="#customer">
          <li className="lg:hover:medium-18 md:hover:medium-16 sm:hover:medium-14 xs:hover:medium-12  hover:border-b-2 hover:border-[#000] hover:pb-2">Customers</li>
        </Link>
          <Link href="#founders">
          <li className="lg:hover:medium-18 md:hover:medium-16 sm:hover:medium-14 xs:hover:medium-12 hover:border-b-2 hover:border-[#000] hover:pb-2">Founders</li>
          </Link>  
          <Link href="#FAQ">        
          <li className="lg:hover:medium-18 md:hover:medium-16 sm:hover:medium-14 xs:hover:medium-12  hover:border-b-2 hover:border-[#000] hover:pb-2">FAQs</li>
          </Link>
          <Link href="#feedback">
          <li className="lg:hover:medium-18 md:hover:medium-16 sm:hover:medium-14 xs:hover:medium-12 hover:border-b-2 hover:border-[#000] hover:pb-2">Connect</li>
          </Link>
          {/* <Link href="#">
          <li className="lg:hover:medium-18 md:hover:medium-16 sm:hover:medium-14 xs:hover:medium-12 hover:border-b-2 hover:border-[#000] hover:pb-2">Log in</li>
          </Link> */}
        </ul>
  
        
    </div>
  )
}

export default Navbar