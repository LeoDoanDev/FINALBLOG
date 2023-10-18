import React,{useState} from 'react'
import Jtrack from './Jtrack'
import { Link } from "react-router-dom";
import styled from "styled-components";




export const Korean = () => {
     const [items,setitem] = useState(4);
     const loadmore = () =>{
        setitem (items + items);
     }


     const slide = Jtrack.cardData.slice(0,items)


  return (
    <section className=" py-4 py-lg-5 container ">
      <div className="row justify-content-center align-item-center ">

      {slide.map((item,index)=>{
        return(
          
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 "  key={index}>
             <div className="card p-0 overflow-hidden h-100 shadow top-[120px]">
              <Link to={item.path} style={{ textDecoration: 'none' }} className='text-black '>
              <img src={item.img}   alt="" className="card-img-top " />
              <div className="card-body">
               <h1 className="card-title hover:text-brightRed ">{item.title}</h1>
               <p className="card-title hover:text-brightRed">{item.desc}</p>
              </div>
              </Link>
             </div>
            </div>
        )
        })}
        <button 
         className="relative  btn btn-outline-primary  d-block w-50 opacity-[0.]  hover:text-brightRed top-[150px] mb-[250px] "
         onClick={() => loadmore()}
         >
          Load More...

        </button>
      </div>

    </section>
  )
}
export default Korean;
