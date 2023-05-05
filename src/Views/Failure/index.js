import React from 'react'
import './style.css'
import { Images } from 'Shared/Images'
import { FAILURE_STRINGS } from 'Shared/Constants'

function Failure() {
  return (
    <div className='outer-fail'>
        <div className='fail'>
            <img className='tick' src={Images.failure} alt='correct'/>
        </div>
        <div className='head-fail'>
            <h2>{FAILURE_STRINGS.PAYMENT_FAILED}</h2>
        </div>
        <div className='para-fail'>
        <p>{FAILURE_STRINGS.PLEASE_TRY_AGAIN_LATER}</p>
        </div>
    </div>
  )
}

export default Failure