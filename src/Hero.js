import React, { useState } from 'react'
import  CountUp  from 'react-countup';

import ScrollTrigger from 'react-scroll-trigger' ; 


import './hero.css' ; 

function Hero() {

  const [counter , setcounter ] = useState(false) ; 

  

  return (
 <>
 <ScrollTrigger > 
 <div className=' container-fluid Hero'>

  

<section  >
  {/* this is left side    */}
  <div  className='orange-circul'></div>
 <h3> Discover Your Property  Ehich One Is Best </h3>
 <p> At Frist Visit Our Property </p>
 <p> Which One is Best For You </p>
 <div className='hero-search'>

  <input type='text ' placeholder='Serch city/division/road' />  <button>Search </button>
 </div>
<div className='multi-number '>
{/*   this  is  multi number   many more   */}


 <section>
<span className='text-white d-flex'>
  
{counter  &&   <CountUp end={588896} duration={5} /> }




  </span>
  <span>
    Total Property 
  </span>

 </section>

 <section>

 <span className='text-white d-flex'>

 {counter  &&   <CountUp end={40000} duration={4} /> }


  </span>
  <span>
    Total Client 
  </span>


 </section>

 <section>

 <span className='text-white d-flex' >
  <ScrollTrigger  onEnter={()=> setcounter(true)} onExit={()=>setcounter(false)} >

    {/*   this is  counter  code   area    */}




    {counter  &&   <CountUp end={896} duration={8} /> }





    {/*   this is  counter  code   area    */}
  </ScrollTrigger>
  </span>
  <span>
   National Awart
  </span>


 </section>




</div>


</section>



<section className='hero-right'>
  {/* this is right  side    */}

<img  src='./Images/04_PriceReductions.jpg' alt='Image-2' />




</section>


















 </div>
 
 
 
 
 
 </ScrollTrigger>
 
 
 </>
  )
}

export default Hero ;