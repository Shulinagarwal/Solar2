import React from 'react'

const Uranus = () => {
  return (
    <div id='Earth' className=' z-10 relative text-white flex flex-col gap-10 h-[100%] '>
    <img src="/p6.png" alt="" className='absolute w-[100%] h-[100%] object-cover'/>
    
    <div className='relative flex flex-col lg:flex-row '>
        <div className='flex flex-col flex-1 mt-28 ml-20 gap-10'>
            <h1 className='text-2xl lg:text-6xl font-orbitron font-semibold'>7.Uranus</h1>
            <p className='text-xs lg:text-lg w-[80%]'>Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.</p>
        </div>
        <div className='flex-1 flex flex-col lg:flex-row justify-center items-center mt-28 gap-7'>

               <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-[50%] lg:w-[40%]'>
                <img src="/donut.png" alt=""  className='w-5 h-5 lg:w-20 lg:h-20'/>
                
                
                <div className='flex flex-col'>
                    <h1 className='font-orbitron text-xs lg:text-md mb-4'>Diameter</h1>
                    <p className='font-extrabold text-xl lg:text-3xl font-orbitron'>31,518 Miles</p>
                </div>
               </div>
               <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-[50%] lg:w-[40%]'>
                <img src="/night.png" alt=""  className='w-5 h-10 lg:w-20 lg:h-20'/>
                
                
                <div className='flex flex-col'>
                    <h1 className='font-orbitron text-xs lg:text-md mb-4'>Temperature</h1>
                    <p className='font-extrabold text-xl lg:text-3xl font-orbitron'>-224&deg; Celcius</p>
                </div>
               </div>
        
        </div>
    </div>
    <div>
    <img src="/p13.png" alt="" className='relative ml-16 lg:ml-64 w-[83%] object-cover'/>
    </div>


    
</div>
  )
}

export default Uranus