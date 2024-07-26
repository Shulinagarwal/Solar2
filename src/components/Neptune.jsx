import React from 'react'

const Neptune = () => {
  return (
    <div className=' relative text-white h-[120vh]'>
           <img src="/Neptune.png" alt="" className='absolute w-[100%] h-full object-cover'/>
           <img src="/p14.png" alt="" className='absolute bottom-0 left-0' />
            <div className='relative flex flex-col justify-center items-center text-center gap-10'>
                <h1 className='mt-14 text-xl lg:text-6xl font-orbitron font-bold'>8.Neptune</h1>
                <p className='text-xs lg:text-md w-[60%]'>Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.</p>


                <div className='flex flex-col lg:flex-row gap-9'>
                    <div className='p-6 pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-[80%] lg:w-[40%]'>
                        <img src="/donut.png" alt="" className=' w-5 h-5 lg:w-20 lg:h-20'/>
                        <div className='flex flex-col'>
                        <h1 className='font-orbitron sm:text-xs lg:text-md mb-4'>Diameter</h1>
                        <p className='font-extrabold text-lg md:text-2xl lg:text-3xl font-orbitron'>30,775 Miles</p>
                        </div>
                    </div>
                    <div className='p-6 pl-6 rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-6 w-[80%] lg:w-[40%]'>
                        <img src="/night.png" alt="" className=' w-5 h-10 lg:w-10 lg:h-20'/>
                        <div className=''>
                        <h1 className='font-orbitron text-xs  lg:text-md mb-4'>Temperature</h1>
                        <p className='font-extrabold text-lg md:text-2xl lg:text-4xl font-orbitron'>-218&deg; Celsius</p>
                        </div>
                    </div>
                </div>

               


            </div>
           
    </div>
  )
}

export default Neptune