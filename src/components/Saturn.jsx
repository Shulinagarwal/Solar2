import React from 'react'

const Saturn = () => {
  return (
    <div id='Jupiter' className='relative z-10  text-white flex'>

    <img src="/Venus.png" alt="" className='absolute object-cover h-[100%] w-[100%]'/>

    <div className='relative w-[85%] h-[100%] '>
        <img src="/p12.png" alt="" className='relative object-cover lg:h-[100%] w-[85%]'/>
    </div>
    <div className='relative w-2/3 flex flex-col mt-20 gap-12'>
    <div className='flex items-end justify-end w-[85%]'>
    <h1 className='text-2xl lg:text-6xl font-orbitron font-bold '>6.Saturn</h1>
    </div>
    <p className=' text-sm lg:text-lg w-[85%]'>Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.</p>


    <div className='flex flex-col items-end lg:w-[80%] gap-5'>
               <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-full lg:w-[60%]'>
                <img src="/donut.png" alt=""  className='w-5 h-5 lg:w-20 lg:h-20'/>
                
                
                <div className='flex flex-col'>
                    <h1 className='font-orbitron text-md mb-4'>Diameter</h1>
                    <p className='font-extrabold text-xl lg:text-3xl font-orbitron'>74,898 Miles</p>
                </div>
               </div>
               <div className=' p-6 pl-6  rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-9 items-center justify-center w-full lg:w-[60%]'>
                <img src="/night.png" alt="" className=' w-5 h-10 lg:w-10 lg:h-20'/>
                <div className=''>
                    <h1 className='font-orbitron text-sm lg:text-md'>Temperature</h1>
                    <p className='font-extrabold text-xl lg:text-4xl font-orbitron'>-139&deg; Celcius</p>
                </div>
               </div>
            </div>
    </div>
   


</div>
  )
}

export default Saturn