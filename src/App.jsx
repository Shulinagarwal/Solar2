import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sun from './components/Sun';
import Mercury from './components/Mercury';
import Venus from './components/Venus';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Jupiter from './components/Jupiter';
import Saturn from './components/Saturn';
import Uranus from './components/Uranus';
import Neptune from './components/Neptune';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className='relative overflow-hidden'>
      <img src="/back.png" alt="" className='absolute top-0 left-0 object-cover z-minus-1 h-[100%] w-[100%] '/>
      
      <img src="/top.png" alt="" className='absolute top-0 right-0 opacity-80 z-10'/>
        <img src="/end.png" alt="" className='absolute bottom-0 left-0 opacity-80'/>
        
       
        <div className='z-10 text-white relative'>
          <Navbar/>
          <div className='flex flex-row '>
                <div className='relative '>
                  <img src="/moon.png" alt="" className='h-[50px] sm:h-[75px] md:h-[100px] lg:h-[150px]'/>
                  <img src="/saturn.png" alt="" className=' h-[140px] sm:h-[150px] md:h-[300px] lg:h-[500px]'/>
                  <img src="/layer.png" alt=""  className=' h-[50px] sm:h-[75px] md:h-[100px] lg:h-[150px]'/>

                </div>
           <div className='flex-1'>
           <img src="/earth.png" alt="" className='absolute left-[50%] z-10 top-16 h-[50px] sm:h-[75px] md:h-[100px] lg:h-[150px]'/>
             <Hero/>
             <img src="/m.png" alt="" className='absolute bottom-0 ml-[26%] h-[50px] sm:h-[75px] md:h-[100px] lg:h-[150px]'/>

           </div>
           <div className='relative w-[15%]'>
        <img src="/mercury.png" alt="" className='relative right-0 z-10 h-[150px] sm:h-[150px] md:h-[300px] lg:h-[400px]'/>
        <img src="/jupiter.png" alt="" className='absolute bottom-0 right-0 z-10 h-[50px] sm:h-[75px] md:h-[100px] lg:h-[210px]'/>

           </div>
         </div>
        </div>
    </div>
    <div className='relative min-h-screen'>
      <img src="/Sun.png" alt=" absolute" className='absolute h-[140%] w-[100%]'/>
     

      <div className='relative z-10 text-white'>
    
        <Sun/>
    </div>
    
    </div>
    <div className='relative text-white bg-black mt-9'>
      <Mercury/>
      <Venus/>
      <Earth/>
      <Mars/>
      <Jupiter/>
      <Saturn/>
      <Uranus/>
      <Neptune/>
      <Footer/>
    </div>
    

    </>
  );
}

export default App;
