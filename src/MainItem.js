import React from 'react'
import "../src/mainitem.css" ; 

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



function MainItem() {

  const [open, setOpen] = useState(false);
  
  const [open1, setOpen1] = useState(false);
  
  const [open2, setOpen2] = useState(false);

  return (
   <div className='combopack p-5 shadow-lg p-3 mb-2 bg-white rounded'
   
   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
   
   >






{/* this is left section    */}
<div  className='imagesss'> 
<h4 className='bg-success text-center text-white'> Hilight Who you are </h4>

<img  src='Images/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjirō-hd-wallpaper-thumb.jpg' alt='nen' />

</div>


{/*   this is right section  */}
 
<div className='dropdawn '>
<div  className='container-fluid  text-center gy-5'>  
<Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className='container-fluid gx-5 m-1'
      >
      why Us : 
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text " className='border-1'>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>

      </div>

      {/*  2 nd  one----------------------------------------------------------------   */}
   <div   className='container-fluid  text-center gy-5 m-1'> 
      <Button
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-texts"
        aria-expanded={open1}
        className='container-fluid gx-5'
      >
      Our Tearms
      </Button>
      <Collapse in={open1}>
        <div id="example-collapse-texts" className='border-1'>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
      </div>

      {/* 3 rd one ----------------------------------------------------------  */}
     <div   className='container-fluid  text-center gy-5  m-1'>   
      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-textv"
        aria-expanded={open2}
        className='container-fluid gx-5'
      >
      our features
      </Button>
      <Collapse in={open2}>
        <div id="example-collapse-textv" className='border-1 border-success' >
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>

      </div>

</div>






   </div>
  )
}

export default MainItem ; 