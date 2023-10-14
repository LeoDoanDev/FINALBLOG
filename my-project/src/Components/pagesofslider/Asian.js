import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';



const Asian = props => {
   let { imgSrc, title, } = props.data;

 
   return (
    <Card className="left-3 text-[11px]">
      <div className="overflow-hidden rounded p-0 bg-verylightblue">
            <Card.Img variant ='top' src={imgSrc}/>
      </div>
      <Card className="text-center  ">
       <Card.Text className='text-[15px] bg-verylightsilver font-bold '>{title}</Card.Text>
      
      </Card>
    </Card>
   )
}


export default Asian