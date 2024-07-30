


"use client"
import React, { useEffect, useState } from "react";
import { FaCircleChevronUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {

    

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (

        <div onClick={()=> scrollToTop()}
        className=" rounded-full fixed z-[300] bottom-5 right-5">

          <FaCircleChevronUp className="font-bold text-col3 w-[35px] h-[35px] hover:rounded-full hover:border-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:border-swhite" />
        </div>

      )}
      </>
  );
}