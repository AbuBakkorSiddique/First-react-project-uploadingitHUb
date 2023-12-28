import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import user from "../src/Product.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { SwiperSetting } from '../src/SwiperSetting';
import '../src/multicarosule.css'

function Multicarosule() {
  return (
<>

<div className='main' >


<div className=' ' >

<div  className=''>
<div className='shadow-none p-3 mb-5 bg-light rounded'>

  <h3 className='text-center '> Discover Which One Is Best For You </h3>



  <p> A property is not a just home , it's a safe zone you and your family also . Your children grow his life with safely mentality . <b> So search whice one is best and good for your . Search the area and zone and grow your future .
     </b> We provide all kind of feature and facility to a customer need . </p>
<p> <b> Notice That : </b> You should must be follow our all terarms and condition . </p>
<p> <b> Reason :  </b> We focus our revulation in our community , so it's must . </p>
</div>


</div>

</div>


{ /*  thsi is a another area     */}






<div className='mother  '>
  <div className='shadow-lg p-3 mb-5 bg-white rounded'>


<h4 className='text-center '> Chose One </h4>



  </div>


<Swiper {...SwiperSetting} >

<div className='c-1 '> 
<Slide />

</div>



<div className='c-2'> 

{
user.map( (cart,i)=>(

<SwiperSlide key={i} >
  <div className='out-cart '>  
<Card style={{ width: '18rem' }}  className='cart'>
      <Card.Img variant="top" src={cart.Photo} />
      <Card.Body>
        <Card.Title >{cart.name}</Card.Title>
        <Card.Text>



        {cart.Details}






      
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>


</SwiperSlide>

))





}

</div>











</Swiper>

</div>









</div>









</>
  )
}

export default Multicarosule ; 



const Slide =  ()=> {
const exchange= useSwiper() ; 

return (

<div className=' d-flex  r-button shadow-lg p-3 mb-5 bg-white rounded'>

<Button onClick={()=>exchange.slidePrev()}> Preview </Button>
<Button onClick={()=>exchange.slideNext()}>Next-cart</Button>






</div>


) ; 



}