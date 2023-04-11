import React from 'react'
import './style.css'
import correct from "../../Assets/Images/correct-removebg-preview.png"
import { useDispatch, useSelector} from 'react-redux'
import { success } from 'Redux/Actions/HomeActions';

function Success() {

  

  const payDetails= useSelector((state) => state?.homeReducer?.payData);
  console.log(payDetails,"payDetails");

  const dispatch = useDispatch();
  const handleOk = () =>{
    dispatch(success(payDetails));
  }
  
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
        <div>
          <button className='btn btn-success' onClick={handleOk}>OK</button>
        </div>
    </div>
  )
}

export default Success