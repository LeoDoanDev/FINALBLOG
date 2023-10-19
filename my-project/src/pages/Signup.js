import React from 'react'

function Signup() {
  return (
    <section className="  flex justify-center items-center mb-[500px] ">
      <div className=' flex relative  flex-col items-center w-1/3  top-[250px] border-1 border-gray-500'>
        <p className="relative flex border-1 w-full h-full bg-blue-500 justify-center items-center mb-2 pt-2 pb-2 text-white">Create a FREE Account</p>
        <p className="relative text-white pt-[15px]">FirstName</p>
        <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="FirstName..."
        />
        <p className="relative text-white  pt-[20px]">LastName</p>
         <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="LastName..."
        />
        <p className="relative text-white  pt-[20px]">Email</p>
         <input
            type="text"
            className="block  w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="you@exmaple.com"
        />
        <p className="relative text-white  pt-[20px]">Password</p>
         <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password..."
        />
          
        <button className="btn btn-primary top-4 mt-[20px]" type='submit'>Submit</button>
          
       
         

        
        
        
      </div>
    </section>
  )
}

export default Signup