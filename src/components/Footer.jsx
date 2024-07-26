import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
  return (
    <div className='text-white z-10 lg:h-[79vh] relative'>
      <img src="/Footer.png" alt="" className='absolute object-cover h-full w-full'/>
      <img src="/p15.png" alt="" className='absolute object-cover'/>

      <div className='relative h-full flex flex-col justify-center items-center'>
        <div className='relative bg-gray-900 w-4/5 lg:w-[70%]  text-center rounded-lg p-6 lg:p-10'>
          <h1 className='text-lg lg:text-5xl font-orbitron font-bold'>Join the Education Community</h1>
          <p className='text-xs lg:text-lg mt-4 lg:mt-6'>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
          
          <div className='flex justify-center mt-6 lg:mt-10'>
            <div className='flex flex-col lg:flex-row justify-between items-center bg-white text-black w-full max-w-lg rounded-3xl p-4'>
              <input 
                type='email' 
                placeholder='Enter your Email' 
                className='w-full lg:w-auto border-none p-2 mb-2 lg:mb-0 lg:mr-2 border border-gray-300 rounded-lg' 
              />
              <button className='bg-custom-gradient items-center justify-center w-auto lg:w-auto p-2 gap-2 rounded-3xl text-white font-orbitron font-bold flex flex-row'>
                Subscribe<img src="/Button.png" alt="" />
              </button>
            </div>
          </div>

          <div className='mt-10 lg:mt-20'>
            <Navbar/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
