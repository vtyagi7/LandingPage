import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";

const AddProduct = () => {
  return (
    <div className='w-screen h-screen flex gap-6 p-9 bg-[#E97451] bg-gradient-to-br from-[#EE9176] via-[#EE9176] to-[#EEDAAB]'>  

          <div className=' w-1/4 border-2 border-white  '>
            <div>

            </div>
          </div>

       <div>

        <div className='flex justify-end gap-8 items-center'>
         <button>
            <IoSearchSharp size={25} />
          </button>  
        <IoMdNotificationsOutline size={25} />
        <button className=' flex p-2 px-3 gap-6 border-2 rounded-lg border-white/40 bg-white/40 '>
            <p className='text-l'>Name</p>
            <IoIosContact size={25} />
        </button>
        

        </div>
        <div >
        <button className=' flex p-2 px-3 justify-start border-2 rounded-lg border-white/40 bg-transparent '>
            <p className='text-l'>Go to Back</p>
        </button>
        
        </div>

        <div className='flex justify-between mt-5 items-center' >
            <div className='flex gap-3'>
            <h3 className='text-2xl'>Add Shop Details</h3>
            <p className=' pt-1'>(‘*’ denotes that the given field is mandatory)</p>
            </div>

        </div>

        <div className=' grid grid-cols-2 rounded-lg gap-5 justify-between  mt-5'>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4 '>
            Enter Shop Name*
            </button>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4'>
            Tell About the Shop*
            </button>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4'>
            Enter GST Number*
            </button>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4'>
            Enter 10 Digit Whatsapp Number*
            </button>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4'>
            Select Location*
            </button>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4'>
            Add Feature Photos
            </button>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4'>
            Enter Shop Password*
            </button>
            <button className='text-xl flex items-start rounded-lg text-[#39393A] border-2 border-[#FFF8E8] px-32 py-4'>
            Confirm Shop Password*
            </button>


            

        </div>
        <div className='flex flex-row items-end justify-end mt-6'>
              
                <button className=' px-10 py-4 rounded-lg bg-[#E97451] text-white'>
                Save
                </button>
            </div>

    </div>
    </div>
  )
}

export default AddProduct