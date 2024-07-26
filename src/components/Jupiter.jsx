import React from 'react'

const Jupiter = () => {
  return (
    <div id='Jupiter' className='relative z-10  text-white flex'>
         

    <img src="/Venus.png" alt="" className='absolute object-cover h-[100%] w-[100%]'/>
    <div className='relative w-2/3 flex flex-col items-start mt-20 ml-20 gap-16'>
    <h1 className='text-2xl lg:text-6xl font-orbitron font-bold '>5.Jupiter</h1>
    <p className='text-sm lg:text-lg w-[69%]'>Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.</p>


    <div className='flex flex-col gap-5'>
               <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-full lg:w-[80%]'>
                <img src="/donut.png" alt=""  className=' w-5 h-5 lg:w-20 lg:h-20'/>
                
                
                <div className='flex flex-col'>
                    <h1 className='font-orbitron text-xs lg:text-md mb-4'>Diameter</h1>
                    <p className='font-extrabold text-l lg:text-3xl font-orbitron'>86,881 Miles</p>
                </div>
               </div>
               <div className=' p-6 pl-6  rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-9 items-center justify-center w-full lg:w-[80%]'>
                <img src="/night.png" alt="" className=' w-5 h-10 lg:w-10 lg:h-20'/>
                <div className=''>
                    <h1 className='font-orbitron text-xs lg:text-md'>Temperature</h1>
                    <p className='font-extrabold text-xl lg:text-4xl font-orbitron'>-108&deg; Celcius</p>
                </div>
               </div>
            </div>
    </div>
    <div className='relative '>
        <img src="/p11.png" alt="" className='relative object-cover'/>
    </div>


</div>
  )
}

export default Jupiter