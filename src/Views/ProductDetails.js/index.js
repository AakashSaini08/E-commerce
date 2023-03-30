import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'

function ProductDetail() {

    const products=useSelector((state)=>state?.homeReducer?.products[1]);
    const productsArray = products?Object.values(products):[];
    
  return (
    <>
    {productsArray?.map((item,idx)=>{
        return(
        <div key={idx} className='main-product'>
        <div >
            <img className='product-img' src={"https://54ab-122-160-165-213.in.ngrok.io/"+ item.photo} alt='iphone 14'/>
        </div>
        <div className='product-detail'>
        
            <h2>{item.name}</h2>
            <hr/>
            <h3>Price: {item.price}</h3>
            <p>Inclusive of all taxes</p>
            <hr/>
            <div>
                <p>{item.product_details}</p>
            </div>
            <div>
                <button className='btn btn-dark'>Add to Cart</button>
            </div>
        </div>
    </div>)
    })}
    
    </>
  )
}

export default ProductDetail