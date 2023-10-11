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
             <div className='hidden md:flex relative pt-6 bg-verylightblue md:static md:z-auto '>
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
              <div className="flex">
              {/* 1 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 7 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 8 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 9 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px]">Love</p>
                </a>
              </SwiperSlide>
              {/* 10 */}
              <SwiperSlide>
              <a href="top_chinese_dramas_2" className='relative left-10 justify-center items-center inset-x-0 bottom-3 top-1 '>
                    <img src={sig} className='p-1 rounded-md border-[1px] border-red-600   w-auto  h-auto '   alt="pic" />
                    <p className="text-black text-[14px] mb-6">Love</p>
                </a>
              </SwiperSlide>
              ...
              </div>
            </Swiper>
           </div>

           <dir className = ''>

           </dir>
            
           </div>
       </div>
  )
}

export default Uibody