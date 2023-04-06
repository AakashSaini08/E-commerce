import React from 'react'
import './style.css'
import correct from "../../Assets/Images/correct-removebg-preview.png"

function Success() {
  return (
    <div className='outer-success'>
        <div className='success'>
            <img className='tick' src={correct} alt='correct'/>
        </div>
        <div className='head'>
            <h2>Success</h2>
        </div>
        <div className='para'>
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        </div>
    </div>
  )
}

export default Success