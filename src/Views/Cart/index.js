import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./style.css"

function Cart() {

    const myUser =useSelector((state)=>state?.homeReducer?.user)
    console.log(myUser)

  const [count,setCount] = useState(0);
  const handleCount = (e)=>{
    setCount(e.target.value)
  }
 
  return (
    <>
          <div className="">
            <h3>Shopping Cart</h3>
          </div>
          <hr/>
    <div className='outer-main'>
        
        <div className='inner-left'>
          
          <div className='details'>
            <div><img src='https://m.media-amazon.com/images/I/61Yup3LQauL._AC_AA180_.jpg' alt=''></img></div>
            <div>
              <h2>Wildcraft Nylon 44 Ltrs Casual Backpack (11629-Wolf_Black)</h2>
              <p>The bag has padded adjustable shoulder straps that provide carrying comfort.
               The back panel is also finely padded for ease when you are carrying the backpack.
               This provides ease of carrying the bag when you are on the move.</p>
               <div className='count-value'>
               <input type='number' placeholder='Phone number' className="form-control my-2 " value={count} onChange={(e) => handleCount(e)} required></input>
               </div>
               
            </div>
            <div>
              <h2>Price </h2>
              <h3>1500</h3>
            </div>
          </div>
          </div>

          <div className='inner-right'>
            <h3>Sub-Total</h3>
            <h4>28000</h4>
            <button className='btn btn-dark'>Proceed to Buy</button>
          </div>

    </div>
    </>
  )
}

export default Cart