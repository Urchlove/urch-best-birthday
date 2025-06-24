import React from 'react'
import './pict.css'
import urch from '../../assets/brtt.jpeg'
import mp3 from '../../assets/birth.mp3'

function Pict() {
  
  return (
    <div>
        <h1>HELLO GUYS WELCOME TO MY MINI BIRTHDAY VLOG</h1>
       <button className='play' onClick={()=> new Audio(mp3).play()}>PLAY</button>
       <div className='imgg' ><img className='img' src={urch} alt='' /> </div> 
    </div>
  )
}

export default Pict