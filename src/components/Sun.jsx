import React from 'react'

const Sun = () => {
  return (
    <div id='Sun' className='relative z-10 min-h-screen '>
         <img src="/sun2.png" alt="" className='relative h-[67%] w-[100%]'/>
            <div className='absolute z-10 flex bottom-0 flex-col w-[50%] left-16 gap-7 justify-center'>
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita et quidem molestias qui ipsum blanditiis saepe, cumque eius. Magni eligendi sapiente recusandae adipisci commodi fugiat ab eius enim odio neque.</p> */}
                <div className='flex-col flex gap-4'>
                    <h1 className='font-orbitron text-5xl lg:text-7xl font-bold'>.Sun</h1>
                    <p className='text-sm lg:text-md gap-4'>The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-9'>
                    <div className='p-6 pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-full lg:w-[40%]'>
                        <img src="/donut.png" alt="" className=' w-5 h-5 lg:w-20 lg:h-20'/>
                        <div className='flex flex-col'>
                        <h1 className='font-orbitron sm:text-xs lg:text-md mb-4'>Diameter</h1>
                        <p className='font-extrabold text-lg md:text-2xl lg:text-3xl font-orbitron'>850,000 Miles</p>
                        </div>
                    </div>
                    <div className='p-6 pl-6 rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-6 w-full lg:w-[40%]'>
                        <img src="/temp.png" alt="" className=' w-5 h-10 lg:w-10 lg:h-20'/>
                        <div className=''>
                        <h1 className='font-orbitron text-xs  lg:text-md mb-4'>Temperature</h1>
                        <p className='font-extrabold text-lg md:text-2xl lg:text-4xl font-orbitron'>5,500&deg; Celsius</p>
                        </div>
                    </div>
                </div>

            </div>
      </div>
  )
}

export default Sun