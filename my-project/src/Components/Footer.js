import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import { FaFacebook, FaYoutube,FaGoogle } from 'react-icons/fa'
const Footer = () => {
  return (
    // <div  className=' relative flex justify-center items-center bg-black text-white h-16  bottom-0 '>
    //   <p>Copyright © 2023 AsianDrama All rights reserved.</p>
    // </div>

      <div className="bg-black border-1 border-gray-500 ">
        <div className="relative flex flex-row justify-center items-center">
          <div className=" relative h-[150px] flex justify-center items-center">
                <ul>
                <li><a href=""  style={{ textDecoration: 'none' }} className=' text-white text-[25px] font-dancing' >AsianDrama </a></li>
                <li> <p className='text-gray-500 text-[14px]'>© Copyright 2023. All rights reserved.</p></li>
                <li className='flex-row  flex  space-x-8 '>
                <a href="" style={{ textDecoration: 'none' }} ><FaFacebook className='h-[40px] w-[40px] ' style={{ color: "#fff" }}/></a>
                <a href="" style={{ textDecoration: 'none' }} ><FaYoutube className='h-[40px] w-[40px] 'style={{ color: "#fff" }}/></a>
                <a href="" style={{ textDecoration: 'none' }} ><FaGoogle className='h-[40px] w-[40px] 'style={{ color: "#fff" }}/></a>
                </li>
                </ul>
                
                
                
               
              
             
              
           

          </div>
         


        </div>




      </div>

  
  );
};

export default Footer;
