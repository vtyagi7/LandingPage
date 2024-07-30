"use client";

import React from 'react'
import { Collapse } from 'react-collapse';
import { FaCaretUp, FaCaretDown } from "react-icons/fa";


const Accordion = ({open, toggle, title, desc}) => {
  return (
    <div>
        <div className='container mx-auto padding-container'>
    
            <div className='hover:rounded-lg lg:py-4 md:py-3 sm:py-2 xs:py-1 px-4 flex justify-between gap-x-1 items-center cursor-pointer bg-swhite/40 backdrop-blur-md max-container   hover:bg-col1/25 hover:backdrop-blur-md ' onClick={toggle}>
                <p className='text-[#372601] font-opensans lg:bold-18 md:bold-16 sm:bold-12 text-justify' >{title}</p>
                <div className='text-[30px]'></div>
                {open?<FaCaretUp/>:<FaCaretDown/> }
            </div>

            <Collapse isOpened={open} >
                <div className="bg-swhite/50 lg:py-4 md:py-3 sm:py-2 xs:py-1 px-4 backdrop-blur-md max-container rounded-b-lg"> 
                <p className='text-[#372601] font-opensans lg:regular-18 md:regular-16 sm:regular-12 p-4 text-left'> {desc}</p>
                </div>
            </Collapse>

        </div>
    </div>
  )
}

export default Accordion