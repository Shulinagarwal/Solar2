import React from 'react'

const Venus = () => {
  return (
    <div id='Venus' className='relative z-10  text-white flex'>
         

        <img src="/Venus.png" alt="" className='absolute object-cover h-[100%] w-[100%]'/>
        <div className='relative w-2/3 flex flex-col items-start mt-20 lg:ml-20 gap-16'>
        <h1 className='text-2xl lg:text-6xl font-orbitron font-bold '>2.Venus</h1>
        <p className='text-sm lg:text-lg w-[69%]'>Venus is often referred to as Earth's "sister planet" due to its similar size and composition, but it stands out with its extremely inhospitable environment</p>


        <div className='flex flex-col gap-5'>
                   <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-full lg:w-[80%]'>
                    <img src="/donut.png" alt=""  className='w-5 h-5 lg:w-20 lg:h-20'/>
                    
                    
                    <div className='flex flex-col'>
                        <h1 className='font-orbitron text-xs lg:text-md mb-4'>Diameter</h1>
                        <p className='font-extrabold text-lg lg:text-3xl font-orbitron'>7,521 Miles</p>
                    </div>
                   </div>
                   <div className=' p-6 pl-6  rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-9 items-center justify-center w-full lg:w-[80%]'>
                    <img src="/temp.png" alt="" className='w-5 h-10 lg:w-10 lg:h-20'/>
                    <div className=''>
                        <h1 className='font-orbitron text-xs lg:text-md'>Temperature</h1>
                        <p className='font-extrabold text-lg lg:text-4xl font-orbitron'>475 &deg; Celcius</p>
                    </div>
                   </div>
                </div>
        </div>
        <div className='relative '>
            <img src="/p5.png" alt="" className='relative mt-60 object-cover'/>
        </div>


    </div>
  )
}

export default Venus