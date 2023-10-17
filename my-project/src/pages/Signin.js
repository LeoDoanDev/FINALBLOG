import React from 'react'

function Signin() {
  return (
<section className=" relative flex justify-center items-center mb-[500px] ">
      <div className=' flex relative  flex-col items-center w-1/3  top-[250px] border-1 border-gray-500'>
        <p className="relative flex border-1 w-full h-full bg-blue-500 justify-center items-center mb-2 pt-2 pb-2 text-white font-bold">Sign In</p>
        <a href="/signup" style={{ textDecoration: 'none' }} className='text-white text-[18px]'  ><p className='hover:text-brightRed'>or sign in with email</p></a>
        
        <p className="relative text-white">Email</p>
         <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="you@exmaple.com"
        />
        <p className="relative text-white">Password</p>
         <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password..."
        />
          
        <button className="btn btn-primary" type='submit'>Submit</button>
          
       
         

        
        
        
      </div>
    </section>
    
  )
}

export default Signin