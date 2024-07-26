import React from 'react'

const Navbar = () => {
  return (
    <div className='relative z-10 flex flex-col lg:flex-row lg:mt-5' >
        <div className=' flex flex-1 justify-center items-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl  font-bold font-orbitron'>Galactic.io</h1>
        </div>
        <div className='flex flex-1 items-center justify-around'>
            <a href='#Mercury' className='text-sm md:tex-md lg:text-lg'><ul>Mercury</ul></a>
            <a href='#Venus' className='text-sm md:tex-md lg:text-lg'><ul>Venus</ul></a>
            <a href='#Earth' className='text-sm md:tex-md lg:text-lg'><ul>Earth</ul></a>
            <a href='#Mars' className='text-sm md:tex-md lg:text-lg'><ul>Mars</ul></a>

            
        </div>
        <div className='flex flex-1 justify-center items-center text-sm md:tex-md lg:text-lg'>
            <ul>2024 @Solarsystemdesign</ul>
        </div>
        
    </div>
  )
}

export default Navbar