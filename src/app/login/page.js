import React from 'react'

function page() {
  return (
    <div >
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold text-[#292929]'>Login Form</h1>
        <form className='flex flex-col items-center w-full'>
          <input className='outline-none p-3 border border-gray-400 w-full md:max-w-100 rounded-lg mb-4 px-4' placeholder='Name:'></input>
          <input className='outline-none p-3 border border-gray-400 w-full md:max-w-100 rounded-lg mb-4 px-4' placeholder='Email:'></input>
          <input className='outline-none p-3 border border-gray-400 w-full md:max-w-100 rounded-lg mb-4 px-4' placeholder='Roll Number:'></input>
          <input type='password' className='outline-none p-3 border border-gray-400 w-full md:max-w-100 rounded-lg mb-4 px-4' placeholder='Password:'></input>
          <button className='px-8 py-2 bg-blue-400 hover:bg-blue-600 rounded text-white'>Login</button>
        </form>
      
    </div>
  )
}

export default page