'use client'
import React, { useState } from 'react';
import Image from 'next/image'

import { FcGoogle } from "react-icons/fc";
import { FaCaretDown } from "react-icons/fa";


const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");  
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  

  const handleSubmit = (e)=>{
    e.preventDefault()

  }

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 bg-cover bg-center bg-[url('/bg.png')] flex flex-col justify-between" >
        
          <div className='m-5'>
             <Image className='shrink md:shrink-0' src="/logo.png" alt="logo" width={72} height={72}/>
          </div>
          <div className=' w-3/4 backdrop-blur-[14px] flex flex-col p-5 m-5 self-end'>
            <div className=''>
                <text className='lg:bold-36 md:bold-28 xs:bold-20 font-playfair text-[#FFF] text-right'>Empowering small retailers to sell, think, and live better with modern tech.</text>
                <p className='font-opensans text-right regular-18 text-[#fff]'>Don't just survive in the new retail landscape. Thrive with radR.</p>
            </div>
          </div>

       
        {/* <div className="">
          <text className="">Empowering retailers to sell, think, and live better with modern tech.</text>
          <p className="text-xl">Don't just survive in the new retail landscape. Thrive with radR.</p>
        </div> */}
      </div>

      <div className=" w-1/2 gap-10 bg-[#E97451]/50 bg-gradient-to-br from-[#E97451]/50 via-[#EE9176]/50 to-[#EEDAAB] flex flex-col items-center justify-center ">
        
        <div className='flex flex-col items-center justify-center self-end'>
          <button className="flex flex-row gap-4 items-center justify-center font-opensans text-[16px] text-gray-700 mt-8 px-4 ">
            
            <span className='pl-5'>English (UK)</span> 
            <FaCaretDown size={20}/> 
          </button>
        </div>
        
        
        <div className='mt-16 lg:w-[500px] lg:h-[650px] md:w-[450px] md:h-[450]  sm:w-[400px] xs:w-[200px] backdrop-blur-sm '>
          <div  className='flex flex-col items-center gap-4'>
            <text className=' font-playfair bold-48   text-[#000]'>Welcome Back</text>
            
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button className="flex flex-row gap-6 items-center justify-center font-montserrat text-[16px] text-gray-700 mt-8 px-4 py-2 border border-gray-700 rounded-xl">
              <FcGoogle size={27}/>
              <span className='pl-5'>Sign up with Google</span>  
            </button>
          </div>
          <div className="flex justify-center text-sm m-6 ">
              <text className=" text-[18px] font-[400] leading-none font-opensans text-gray-500 ">-OR-</text>
          </div>

          <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                  <div className="font-opensans regular-18 mt-2">
                    
                    <input
                      type="text"
                      name="username"
                      placeholder='Username'
                      id="username"
                      value={name}
                      onChange={(e)=> setName(e.target.value)}
                      className=" placeholder-gray-700 w-full py-3 bg-transparent border-b border-gray-950"
                    />
                  </div>
                  
                  
                  <div className="font-opensans regular-18 mt-2">
                    <input
                      type="password"
                      name="password"
                      placeholder='Password'
                      id="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      className=" w-full py-3 placeholder-gray-700 bg-transparent border-b border-gray-950"
                    />
                    <div className=' mt-6 flex justify-between '>
                    <div>
                      <input 
                       type="checkbox" 
                       checked={isChecked}
                       onChange={handleCheckboxChange} 
                       
                      />
                      <label>Remember me</label>
                      
                     </div>
                    <button className='text-gray-500 underline'>
                      <p>Reset Password</p>
                    </button>
                  </div>
              </div>
                  
                    
                  
                <div className='flex items-center justify-center regular-16 font-opensans mt-8 gap-2'>
                  <div className=''>
                  Don’t have an account? 
                  </div>
                  <button className='text-[#E77350] underline'>
                  Sign up Here
                  </button>

                </div >

                <div className='flex flex-col items-center pt-10'>
                      <button 
                        className='rounded-md py-[10px] px-[40px] bg-[#E97451] text-[#fff]  medium-14 font-montserrat'>Sign Up</button>
                </div>

                  {/* <button className=' mt-8 text-lg text-white border-2 border-orange-400 bg-orange-400 py-3 rounded-xl px-12'>
                  Sign Up
                  </button> */}
              
            </form>
            
          </div>

          
        </div>
        {/* <div className=" px-36 mt-28">
          <h2 className="text-5xl font-bold font-playfair-display content-center pl-10 mb-6">Register as Retailer</h2>
          <p className="mb-4 text-lg text-gray-300">Website version is only available for retailers currently. Please use the Android app to connect with your favorite retailers.</p>
          <div className='pl-14k '>
          <button className="flex justify-center text-lg text-gray-500 mt-8 py-2 px-2 border-2 border-gray-500 rounded-xl">
            <FcGoogle size={27}/>
            <span className='pl-5'>Sign up with Google</span>  
            </button>
          </div>
          <div className="relative mb-5">
            <div className="absolute flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center text-sm m-6 ">
              <span className="px-2 text-xl text-gray-400 ">-OR-</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className="mb-4 mt-6 text-lg">
              
              <input
                type="text"
                name="fullName"
                placeholder='Full Name'
                id="fullName"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className=" w-full py-3 bg-transparent border-b-2 border-gray-950"
              />
            </div>
            <div className="mb-4 mt-4 text-lg">
              
              <input
                type="text"
                name="emailOrMobile"
                placeholder='Email or Mobile'
                id="emailOrMobile"
                value={emailOrMobile}
                onChange={(e)=> setEmailOrMobile(e.target.value)}
                className=" w-full py-3  bg-transparent border-b-2 border-gray-950 "
              />
            </div>
            <div className="mb-6 mt-4 text-lg">
              <input
                type="password"
                name="password"
                placeholder='Password'
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className=" w-full py-3  bg-transparent border-b-2 border-gray-950"
              />
            </div>
           <div className='flex text-lg'>
            <div className='flex items-center'>
            Already have account?
            </div>
            <button className='text-orange-200 underline'>
            Sign In Here
            </button>

           </div >
           <button className=' mt-8 text-lg text-white border-2 border-orange-400 bg-orange-400 py-3 rounded-xl px-12'>
           Sign Up
           </button>
            
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Register;