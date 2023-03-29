import  Carousel  from '../../Components/Atoms/Carousel'
import React, { useEffect } from 'react'
import './style.css'
import Products from '../../Assets/Images/Products.png'
import MyFooter from '../Footer/index'
import MyProduct from 'Views/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from 'Redux/Actions/HomeActions'

function Home() {
  
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getData([]));
  }, [])

  const data = useSelector(((state) => state.homeReducer.products))
  console.log(data[1],"home data")
  // console.log(data)
  //  data.map((item)=>{
  //   console.log(item)
  // })

  return (
    <div>
        <Carousel/>
        <h2 className='m-2'>DEAL OF THE DAY</h2>
        <div >
          <img className='productList' alt="myProducts" src={Products}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div><MyProduct/></div>
         
        </div>
        <MyFooter/>
    </div>
  )
}

export default Home