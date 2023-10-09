import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import sig from '../Assets/Logo/A Dream of Splendor (2021).png';

function Uibody() {
  return (
       <div className=" justify-center items-center flex ">
           <div className="border-1 w-3/5 h-auto pt-16 border-black">
             <div className=' relative pt-6 bg-verylightblue md:static md:z-auto '>

           <Swiper
             
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={50}
             slidesPerView={5}
            
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
           >
             <div>
            
             <SwiperSlide>
               
               <a href="top_chinese_dramas_1" 
               className='relative md:left-20 justify-center items-center  bottom-3 top-1 '>
                   <img src={sig} height={400} width={400} className='p-1 rounded-md  border-double border-4 border-red-600 	'   alt="" />
                   <p className=' pb-7  text-white text-[10px] '> A Dream of Splendor (2022) </p>
               </a>
             </SwiperSlide>

             <SwiperSlide>
             <a href="top_chinese_dramas_2" className='relative left-20 text-black justify-center items-center inset-x-0 bottom-3 top-1 '>
                   <img src={sig} height={400} width={400} className='p-1 rounded-md  border-double border-4 border-red-600  '   alt="" />
                   <p className='pb-5 text-white md:text-[10px] '>Novoland Pearl Eclipse (2021)</p>
               </a>
             </SwiperSlide>
             <SwiperSlide>
             <a href="top_chinese_dramas_3" 
             className='relative left-20 text-black justify-center items-center inset-x-0 bottom-3 top-1 '>
                   <img src={sig} height={400} width={400} className='p-1 rounded-md  border-double border-4 border-red-600  '   alt="" />
                   <p className='pb-5 text-white md:text-[10px] ' >A Dream of Splendor (2022)</p>
               </a>
             </SwiperSlide>
             


             <SwiperSlide>Slide 4</SwiperSlide>
             <SwiperSlide>Slide 2</SwiperSlide>
             <SwiperSlide>Slide 3</SwiperSlide>
             <SwiperSlide>Slide 4</SwiperSlide>
             ...

             </div>

           </Swiper>
           </div>
           </div>
       </div>
  )
}

export default Uibody