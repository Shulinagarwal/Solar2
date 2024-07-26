import React from 'react'

const Earth = () => {
  return (
    <div id='Earth' className=' z-10 relative text-white flex flex-col gap-10 h-full'>
        <img src="/p6.png" alt="" className='absolute w-[100%] h-[100%] object-cover'/>
        <img src="/p8.png" alt="" className='absolute bottom-0 left-1/2 transform -translate-x-1/2'/>
        <div className='relative flex flex-col lg:flex-row p-4 lg:p-0 '>
            <div className='flex flex-col flex-1 mt-28 lg:ml-20 gap-10'>
                <h1 className=' text-4xl lg:text-6xl font-orbitron font-semibold'>3.Earth</h1>
                <p className='w-full lg:w-4/5'>Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.</p>
            </div>
            <div className='flex-1 flex justify-center items-center mt-28'>
    
                   <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-[50%] md:w-[70%] lg:w-[40%]'>
                    <img src="/donut.png" alt=""  className='w-5 h-5 lg:w-20 lg:h-20'/>
                    
                    
                    <div className='flex flex-col'>
                        <h1 className='font-orbitron text-xs lg:text-md mb-4'>Diameter</h1>
                        <p className='font-extrabold text-xl lg:text-3xl font-orbitron'>7,918 Miles</p>
                    </div>
                   </div>
            
            </div>
        </div>
        <div className=' relative flex flex-col lg:flex-row gap-4 min-h-screen'>
            <div className='relative flex flex-col items-end w-full lg:w-[60%] gap-6'>
                <h1 className=' text-2xl lg:text-5xl font-orbitron font-semibold justify-center'>Moon Planet</h1>
                <p className='w-full text-sm lg:text-lg lg:w-[65%]'>
                Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.
                </p>
            </div>
            <div className='flex w-full items-end h-full justify-end lg:w-[40%] lg:justify-start'>
                <img src="/p7.png" alt="" className='relative opacity-0 lg:opacity-100 h-20 lg:h-[30%]'/>
            </div>
        </div>

        
    </div>
  )
}

export default Earth