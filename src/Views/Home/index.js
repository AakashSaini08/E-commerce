import  Carousel  from '../../Components/Atoms/Carousel'
import React, { useEffect } from 'react'
import './style.css'
import Products from '../../Assets/Images/Products.png'
import MyFooter from '../Footer/index'
import MyProduct from 'Views/Product'
import { useDispatch } from 'react-redux'
import { getCart, getData } from 'Redux/Actions/HomeActions'

function Home() {
  
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCart([]));
    dispatch(getData([]));
  },[])

  return (
    <div>
        <Carousel/>
        <h2 className='headings'>DEAL OF THE DAY</h2>
        <div >
          <img className='productList' alt="myProducts" src={Products}/>
        </div>
       <h2 className='headings'>Most Selling Products</h2>
          <div><MyProduct/></div>
         
        <MyFooter/>
    </div>
  )
}

export default Home