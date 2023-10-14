import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Asian from'../Components/pagesofslider/Asian';
import 'bootstrap/dist/css/bootstrap.min.css';

import sig from '../Assets/Logo/A Dream of Splendor (2021).png';

function Body() {
  
  return (
       <div className=" bg-black">
           <div className=" border-black">
            {/* <div className="border-4 border-red-500" >
              <img src={sig} className='w-full h-[400px]' alt=""  />
            </div> */}

            <div className="relative flex  justify-center ">
              <p className="absolute text-orange-500 font-bold top-8 font-young text-justify lg:w-[350px]  lg:text-[28px] lg:pl-6 md:text-[14px]">
                "I Believe You
                <p className='flex lg:pl-[25px]'>Because It's Me </p>
                <p className='flex lg:pl-[25px]' >I Can Believe You"</p>
                <p className='flex lg:pl-[100px]'>- Nam Hong Joo</p>
              </p>
             
              <img src={sig} className='w-full h-[400px] opacity-[0.5]' alt="" />
             
            </div>

            {/* <div className="flex border-1 border-borderback ">
              <div className="w-1/2 relative bg-backgroundback flex items-center justify-center">
                <p className="absolute ">Love you</p>
                
              </div>
              <div className="w-1/2   relative">
              <img src={sig} className='w-full lg:h-[400px] md:h[250px] opacity-[0.8]' alt="" />
              </div>
              
            </div> */}












             <div className='mt-[200px] relative bg-slate-600	'>
              <p className='pl-4 pt-1 text-[24px] font-bold font-serif text-red-500'>Asian Drama</p>
              {/* Asian */}
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >

              {/* 1 */}
              
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 7 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 8 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 9 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 10 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              ...
            </Swiper>   
              </div>

              {/* Anime */}
              <div className='text-black mt-[200px] relative bg-slate-600 '> 
              <p className=' pl-4 pt-1 text-[24px] font-bold font-serif text-red-500  '>Anime Drama</p>
             
              {/* Asian */}
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >

              {/* 1 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 7 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 8 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 9 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 10 */}
              <SwiperSlide>
              <a href="/contact"><Asian data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              ...
            </Swiper>   
              
              
              
              
              </div>
            </div>
           
       </div>
  )
}

export default Body