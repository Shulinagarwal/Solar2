import React from 'react';

const Hero = () => {
  return (
    <div className='relative z-10 flex flex-col justify-center items-center  text-center'>
      <div className='flex flex-col flex-1 justify-start items-center w-[100%] gap-7 mt-24'>
        <h1 className='font-bold font-orbitron capitalize w-[100%] text-2xl sm:text-3xl md:text-4xl lg:text-8xl '>Let's get to know our solar system galaxy</h1>
        <p className='w-[100%] text-xs md:text-sm lg:text-lg'>Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos and the planets weaving stories of their timeless existence.</p>



        
       <a href='#Sun'> <button className='bg-custom-gradient p-4 lg:p-7 text-xs lg:text-lg font-bold font-orbitron rounded-lg lg:pr-8 lg:pl-8 z-10'>Learn more</button>
       </a>
      </div>

        
    
    </div>
  );
}

export default Hero;
