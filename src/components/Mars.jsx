import React from 'react'

const Mars = () => {
  return (
    <div id='Mars' className='relative z-10 min-h-screen text-white flex'>
        <img src="/p6.png" alt="" className=' absolute h-[100%] w-[100%] object-cover '/>

    <div className='relative flex flex-col lg:flex-row w-full overflow-hidden'>
            <div className='flex flex-col  mt-28 gap-10 w-full lg:w-1/2'>
                <h1 className='text-2xl lg:text-6xl font-orbitron lg:ml-20 font-semibold'>4.Mars</h1>
                <p className='lg:ml-20'>Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.</p>
                <div className='ml-0 flex '>
                     <img src="/p9.png" alt="" className=' relative h-40 top-24 sm:h-48 md:h-64 lg:h-80 '/>
                     <div className=' flex justify-start items-start w-[100px] lg:w-full '>
                            <h1 className='relative font-orbitron font-bold text-xs lg:text-lg '>Daimos</h1>
                            <div className='flex  items-center justify-start  h-[100%]'>
                                        <h1 className='lg:text-lg font-orbitron font-bold text-xs  '>Phobos</h1>
                                 </div>
                            <img src="/p10.png" alt="" className='opacity-0 w-4 h-4 lg:opacity-100 lg:w-28 lg:h-20'/>
                            <div className='flex flex-col justify-center items-center h-[100%] lg:h-[60%] w-[500px] '>
                                <h1 className='text-sm lg:text-4xl font-orbitron font-bold'>Martian moons</h1>
                                <p className='text-xs lg:text-xl'>Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.</p>
                                        
                            </div>
                            
                     </div>
                   
                </div>
               
            </div>
           
         <div className='w-full items-center justify-end flex '>
            <div className='flex flex-col gap-5'>
                   <div className=' p-6  pl-6 rounded-[8%] border-4 border-[#370D44] bg-ct flex flex-row gap-9 overflow-hidden w-[70%] lg:w-[85%]'>
                    <img src="/donut.png" alt=""  className='w-5 h-5 lg:w-20 lg:h-20'/>
                    
                    
                    <div className='flex flex-col'>
                        <h1 className='font-orbitron text-xs lg:text-md  mb-4'>Diameter</h1>
                        <p className='font-extrabold text-xl lg:text-3xl font-orbitron'>4,212 Miles</p>
                        
                    </div>
                   </div>
                   <div className=' p-6 pl-6  rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-9 items-center justify-center w-[70%] lg:w-[85%]'>
                    <img src="/temp.png" alt="" className='w-5 h-10 lg:w-10 lg:h-20'/>
                    <div className=''>
                        <h1 className='font-orbitron text-xs'>Day-Time Temperature</h1>
                        <p className='font-extrabold text-xl lg:text-4xl font-orbitron'>20&deg; Celcius</p>
                    </div>
                   </div>
                   <div className=' p-6 pl-6  rounded-[8%] border-4 flex border-[#370D44] bg-ct flex-row gap-9 items-center justify-center w-[70%] lg:w-[85%]'>
                    <img src="/night.png" alt="" className='w-5 h-10 lg:w-10 lg:h-20'/>
                    <div className=''>
                        <h1 className='font-orbitron text-xs'>Night-Time Temperature</h1>
                        <p className='font-extrabold text-xl lg:text-4xl font-orbitron'>-73&deg; Celcius</p>
                    </div>
                   </div>
                </div>
            </div>

            </div>
        </div>
    
  )
}

export default Mars