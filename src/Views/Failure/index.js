import React from 'react'
import './style.css'
import failure from "../../Assets/Images/failure-removebg-preview.png"

function Failure() {
  return (
    <div className='outer-fail'>
        <div className='fail'>
            <img className='tick' src={failure} alt='correct'/>
        </div>
        <div className='head-fail'>
            <h2>Payment Failed</h2>
        </div>
        <div className='para-fail'>
        <p>Please try again later</p>
        </div>
    </div>
  )
}

export default Failure