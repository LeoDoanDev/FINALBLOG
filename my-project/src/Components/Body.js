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
       <div className=" justify-center items-center flex  ">
           <div className="mt-[200px] w-screen  border-black">
             <div className=' relative bg-verylightblue  '>
              <p className='pl-4 pt-1 text-[24px] font-bold text-red-500'>Asian Drama</p>
             
              {/* Asian */}
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
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
              <div className='text-black mt-[200px] relative bg-verylightblue '> 
              <p className=' pl-4 pt-1 text-[24px] font-bold text-red-500'>Anime Drama</p>
             
              {/* Asian */}
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
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