import React from 'react'
 
const Mercury = () => {
  return (
    <div id='Mercury' className='relative z-10 min-h-screen text-white flex'>
          <img src="/p3.png" alt=""  className=' absolute cover w-[100%] h-[100%]'/>
          <div className='relative w-[50%]'>
          <img src="/Group.png" alt=""  className='relative  top-5'/>
          </div>

          <div className='mt-16 flex flex-col justify-start items-start w-[65%] h-[50%] relative gap-7'>
            <h1 className='text-3xl lg:text-5xl font-orbitron font-bold'>1. Mercury</h1>
            <p className='w-[80%]'>Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.</p>


            <div className='flex flex-col lg:flex-row gap-5 '>
                   <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-[90%] lg:w-[40%]'>
                    <img src="/donut.png" alt=""  className='w-5 h-5 lg:w-20 lg:h-20'/>
                    
                    
                    <div className='flex flex-col'>
                        <h1 className='font-orbitron text-md mb-4'>Diameter</h1>
                        <p className='font-extrabold text-xl lg:text-3xl font-orbitron'>3,032 Miles</p>
                    </div>
                   </div>
                   <div className=' p-6 pl-6   rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-6 w-[90%] lg:w-[39%]'>
                    <img src="/temp.png" alt="" className='w-5 h-10 lg:w-10 lg:h-20'/>
                    <div className=''>
                        <h1 className='font-orbitron text-sm capitalize mb-4'> day time Temperature</h1>
                        <p className='font-extrabold text-xl lg:text-4xl font-orbitron'>430&deg; Celcius</p>
                    </div>
                   </div>
                   
                </div>
                <div className=' p-6 pl-6   rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-6 w-[90%] lg:w-[35%]'>
                    <img src="/night.png" alt="" className='w-5 h-10 lg:w-10 lg:h-20'/>
                    <div className=''>
                        <h1 className='font-orbitron text-sm capitalize mb-4'> day time Temperature</h1>
                        <p className='font-extrabold text-xl lg:text-4xl font-orbitron'>-180&deg; Celcius</p>
                    </div>
                   </div>
          </div>
         
    </div>
  )
}

export default Mercury