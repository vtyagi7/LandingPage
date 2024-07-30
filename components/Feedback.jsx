"use client";

import React from 'react'



const Feedback = () => {
  

    
    
  return (

    // md:w-[250px] sm:w-[150px] xs:w-[95px] md:h-[250px] sm:h-[150px] shadow-[rgba(51, 51, 52, 0.56)_2px_2px_4px_0px]
    <div id="feedback" className="bg-[url('/fee.png')]  w-screen h-screen  bg-no-repeat  bg-cover flex items-center justify-center">
      <div className='container flex lg:flex-row  md:flex-row sm:flex-col xs:flex-col  items-center justify-center gap-x-16 gap-y-8 padding-container'>
        
          <div id="circle" className=' lg:w-[300px]  lg:h-[300px]  md:w-[220px] md:h-[220px] sm:w-[160px] sm:h-[160px] xs:w-[120px] xs:h-[120px]  rounded-full bg-[#E28C71]'>
            <div 
            className='lg:pt-16 lg:px-20 lg:bold-20 md:pt-12 md:px-12 md:bold-18 sm:pt-9 sm:px-6 md:bold-16 xs:pt-4 xs:bold-12 font-opensans text-[#fff] text-center'>Ready to revolutionize fashion retail? Collaborate with us and catalyze a fashion retail revolution.
            </div>
          </div>

          <div id="form" className=' group  lg:w-[664px] lg:h-[664px] md:w-[450px] md:h-[450]  sm:w-[400px] xs:w-[200px] bg-[#F4BEA4]/75 backdrop-blur-sm border-[3px] rounded-lg shadow-xl border-[#F4BEA4]/30 hover:shadow-[rgba(0,0,15,0.5)_2px_2px_4px_0px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>

            <div className=' lg:py-28 lg:px-16 flex flex-col sm:py-16 sm:px-10 xs:py-10 xs:px-4'>
              <div className='text-center flex flex-col items-center gap-2 self-center '>
                
                <h4 className='bold-30 font-playfair text-[#000] sm:bold-24 xs:bold-18'>Help us shape the future of retail</h4>
                
                
                <p className='regular-14 font-opensans text-[#372601] sm:regular-12 xs:regular-10'>Leave your contact information, and we'll reach out to craft our journey together. </p>
                
              </div>

              <div id="input" className='mt-12 flex flex-col gap-6 sm:gap-4 xs:gap-2 '>
                <div className='flex flex-col gap-2'>
                  <div  className=' font-opensans medium-14  text-[#0F172A]'>Name</div>
                  <input 
                  required
                  autocomplete="new-password"
                  type="text" 
                  name="name" 
                  placeholder='Name'
                  
                  className='w-full p-2 text-[#94A3B8] border-[#CBD5E1] border bg-[#fff] rounded-md font-opensans medium-14 '></input>
                </div>
                <div className='flex flex-col gap-2'>
                  <div  className='required:true font-opensans medium-14  text-[#0F172A]'>Mobile Number</div>
                  <input 
                  required
                  autocomplete="new-password"
                  type="text" 
                  name="phnum" 
                  placeholder='Mobile Number'
                
                  className='w-full p-2 text-[#94A3B8] border-[#CBD5E1] border bg-[#fff] rounded-md font-opensans medium-14 '></input>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='required:true font-opensans medium-14 text-[#0F172A]'>Email Id</div>
                  <input 
                  required
                  autocomplete="new-password"
                  type='text'
                  name="email"
                  placeholder='Email Id' 
              
                  className='w-full p-2 text-[#94A3B8] bg-[#fff] border-[#CBD5E1] border rounded-md font-opensans medium-14 '></input>
                </div>
                <div className='flex flex-col items-center pt-10'>
                  <button 
                    className='transition ease-in-out delay-150  group-hover:-translate-y-1 group-hover:scale-125 duration-300 rounded-md p-[10px] shadow-[rgba(0,0,15,0.5)_2px_2px_4px_0px] bg-[#39393A] text-[#fff]  medium-14 font-montserrat'>Submit</button>
                </div>
              </div>

            </div>

          </div>

        

        

      </div>



    </div>
  )
}

export default Feedback