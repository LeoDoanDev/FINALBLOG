import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Asian from'../Components/pagesofslider/Asian';
import Anime from'../Components/pagesofslider/Anime';
import Movie from'../Components/pagesofslider/Movie';
import News from'../Components/pagesofslider/News';

import 'bootstrap/dist/css/bootstrap.min.css';

import sig from '../Assets/Logo/A Dream of Splendor (2021).png';
import Newspic from '../Assets/pagesofslide/New.jpg';
import Asianpic from '../Assets/pagesofslide/Drama.png';
import Moviepic from '../Assets/pagesofslide/Moive.png';
import Animepic from '../Assets/pagesofslide/Anime.png';
import bg from '../Assets/background.jpg';





function Body() {
  
  return (
       <div style={{ backgroundImage: `url(${bg})` }}>
           <div className=" border-black">
            {/* <div className="border-4 border-red-500" >
              <img src={sig} className='w-full h-[400px]' alt=""  />
            </div> */}

            <div className="relative flex  justify-start ">
              <p className="absolute brightness-120 opacity-[0.] text-orange-300 font-bold top-8 font-young text-justify lg:w-[300px]  lg:top-[120px] lg:text-[28px] lg:pl-[25px] md:text-[14px]">
                "I Believe You
                <p className=' md:pl-[25px]' >I Can Believe You</p>
                <p className=' md:pl-[25px] mt-[-15px]'>Because It's Me"</p>
                <p className=' text-right  mt-[-10px]'>- Nam Hong Joo</p>
              </p>
             
              <img src={Asianpic} className='w-full h-[450px] opacity-[0.55]' alt="" />
             
            </div>

            {/* <div className="flex border-1 border-borderback ">
              <div className="w-1/2 relative bg-backgroundback flex items-center justify-center">
                <p className="absolute ">Love you</p>
                
              </div>
              <div className="w-1/2   relative">
              <img src={sig} className='w-full lg:h-[400px] md:h[250px] opacity-[0.8]' alt="" />
              </div>
              
            </div> */}

              {/* Asian */}
             <div className='mt-[200px] relative bg-slate-600 '>
              <p className=' pl-4 pt-1 text-[24px] font-bold font-serif text-red-500'>Asian Drama</p>
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
            
            {/* Movie */}
            <div className="relative flex  justify-center mt-[200px]">
              <p className="absolute brightness-150 opacity-[0.] text-green-300 font-bold top-8 font-young text-justify lg:top-[100px]  lg:text-[28px] lg:pr-[550px] md:text-[14px]">
                "The coming of a person
                <p className=' md:pl-[25px]'>is, in fact, a tremendous feat.</p>
                <p className=' md:pl-[25px] mt-[-15px]'>Because he</p>
                <p className=' md:pl-[25px] mt-[-15px]'>comes with his past and present </p>
                <p className=' md:pl-[25px] mt-[-15px]'>and</p>
                <p className=' md:pl-[25px] mt-[-15px]'>with his future."</p>
                <p className=' text-right  mt-[-10px]'>- 정현종</p>
              </p>
             
              <img src={Moviepic} className='w-full h-[450px] opacity-[0.55]' alt="" />
             
            </div>
            
            <div className='mt-[200px] relative bg-slate-600  '>
              <p className='pl-4 pt-1 text-[24px] font-bold font-serif text-red-500'>Movie</p>
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
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 7 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 8 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 9 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 10 */}
              <SwiperSlide>
              <a href="/contact"><Movie data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              ...
            </Swiper>   
              </div>

              {/* Anime */}
              <div className="relative flex  justify-center mt-[200px]">
              <p className="absolute brightness-120 hover:bg-white opacity-[1] text-orange-300 font-bold top-8 font-young text-justify lg:text-[28px]  md:text-[14px]">
                "I'm no expert. But I think  
                <p className=' md:pl-[25px] mt-[-5px]'>people mope when their </p>
                <p className=' md:pl-[25px] mt-[-20px]'>expectations are too high. </p>
                <p className=' md:pl-[25px] mt-[-20px]'>It's tiring when you always </p>
                <p className=' md:pl-[25px] mt-[-20px]'>have to overachieve. Don't </p>
                <p className=' md:pl-[25px] mt-[-20px]'>overdo it. Just work on </p>
                <p className=' md:pl-[25px] mt-[-20px]'>achieving what you can." </p>
                <p className=' text-right  mt-[-10px]'>- Haru Yoshida</p>
              </p>
             
              <img src={Animepic} className='w-full h-[450px] opacity-[0.5]' alt="" />
             
            </div>
              <div className='text-black mt-[200px] relative bg-slate-600 '> 
              <p className=' pl-4 pt-1 text-[24px] font-bold font-serif text-red-500  '>Anime Drama</p>
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
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 7 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 8 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 9 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 10 */}
              <SwiperSlide>
              <a href="/contact"><Anime data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              ...
            </Swiper>   
              </div>

            {/* News   */}
            <div className="relative flex justify-end mt-[200px]">
              
              <p className=" absolute brightness-150 hover:bg-white opacity-[0.] text-rose-300 font-bold top-8 font-young lg:right-[300px] lg:top-[100px] lg:text-[28px] lg:pl-[20px] md:text-[14px]">
                "And of course
                <p className=' md:pl-[25px] mt-[-5px]'>Something </p>
                <p className=' md:pl-[25px] mt-[-20px]'>Must End </p>
                <p className=' md:pl-[25px] mt-[-20px]'>For something </p>
                <p className=' md:pl-[25px] mt-[-20px]'>To begin.</p>
                <p className=' text-right  mt-[-10px]'>- Nish Ant</p>
              </p>
             
            <img src={Newspic} className='w-full h-[450px] opacity-[0.5]' alt="" />
            </div>
            
            
            <div className='text-black mt-[200px] relative bg-slate-600 '> 
              <p className=' pl-4 pt-1 text-[24px] font-bold font-serif text-red-500  '>News</p>
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
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 3 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 5 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 7 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 8 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 9 */}
              <SwiperSlide>
              <a href="/contact"><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              {/* 10 */}
              <SwiperSlide>
              <a href="/contact" ><News data={{imgSrc: sig, title:'A Dream of Splendors'}}/> </a>
              </SwiperSlide>
              ...
            </Swiper>   
            </div>

            </div>
           
       </div>
  )
}

export default Body


