import  Carousel  from '../../Components/Atoms/Carousel'
import React from 'react'
import './style.css'
import Products from '../../Assets/Images/Products.png'
import MyFooter from '../Footer/index'

function index() {
  return (
    <div>
        <Carousel/>
        <h2 className='m-2'>DEAL OF THE DAY</h2>
        <div >
          <img className='productList' alt="myProducts" src={Products}/>
        </div>
        <MyFooter/>
    </div>
  )
}

export default index