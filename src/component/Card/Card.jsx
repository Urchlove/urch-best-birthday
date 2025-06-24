import React, { useState } from 'react'
import './card.css'
import pic1 from '../../assets/picture1.jpeg'
import pic2 from '../../assets/picture2.jpeg'
import pic3 from '../../assets/picture3.jpeg'
import pic4 from '../../assets/picture4.jpeg'
import pic5 from '../../assets/picture6.jpeg'
import pic6 from '../../assets/picture7.jpeg'
import pic7 from '../../assets/picture8.jpeg'
import pic8 from '../../assets/picture9.jpeg'


function Card() {
  const [index,setIndex] = useState(0);
  const arr = [pic3,pic7,pic4,pic6,pic1,pic5,pic2];
  
  const rightmove = ()=>{
    setIndex((preValue)=> (preValue+1)%arr.length)
  }
   const leftmove = ()=>{
    setIndex((preValue)=> (preValue - 1 + arr.length ) % arr.length)
  }

  return (
    <div>
      <div className='main'>
      <button className='right' onClick={leftmove}>left Move</button>
      <div className='img'><img className='imgg' src={arr[index]} /> </div>
       <button className='left' onClick={rightmove}>Right Move</button>
       </div>

        <p>If you love me and want to wish me a happy birthday you can do that by sending some token into my account</p>
        <p className='account'> 2291921792 UBA GLORIA UCHE ANTHONY</p>
    </div>
  )
}

export default Card;