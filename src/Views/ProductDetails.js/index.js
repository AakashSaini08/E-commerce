// import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './style.css'
import { BASE_URL } from 'Shared/Constants';
import { useState } from 'react';
import { addToCart } from 'Redux/Actions/HomeActions';

function ProductDetail() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getData([]));
    // }, [])
    const products=useSelector((state)=>state?.homeReducer?.products[1]);
    console.log(products)
    const productsArray = products?Object.values(products):[];
    const params =useParams();
    const {productDetails} = params;
    const selectedProduct = productsArray.find((product)=>product.id === +productDetails);
    console.log(selectedProduct);

    const history = useHistory();
    const dispatch = useDispatch();
    const goBack =()=>{
        history.push("/")
    }

    const [count,setCount] = useState(0);
    const handleCount = (e)=>{
      setCount(e.target.value)
    }

    const handleCart= (selectedProduct)=>{
        const countt = parseInt(count)
        const formData = new FormData();
       formData.append("product_id",selectedProduct.id)
       formData.append("quantity",countt )
       
        // console.log(item.id);
          try{
            dispatch(addToCart({
                data:formData,
                success:(Response)=>{
                  history.push("/cart")
                },
                fail:(err)=>{
                  alert("Item out of stock")
                }
              }))
          }
          catch(error){
            console.log(error.data)
            console.log(error?.data?.token)
        }
        
      }
   

  return (
    <>
        <div className='main-product '>
        <div >
            <img className='product-img' src={BASE_URL+ selectedProduct.photo} alt='iphone 14'/>
        </div>
        <div className='product-detail'>
        
            <h2>{selectedProduct.name}</h2>
            <hr/>
            <h3>Price: {selectedProduct.price}</h3>
            <p>Inclusive of all taxes</p>
            <hr/>
            <div>
                <p>{selectedProduct.product_details}</p>
            </div>
            <hr/>
            <div className='icons'>
                <div ><h4><i className="bi bi-truck"></i></h4>
                <p>Free <br/>Delivery</p>
                </div>
                <div ><h4><i className="bi bi-wallet2 "></i></h4>
                <p>Pay on <br/>Delivery</p>
                </div>
                <div ><h4><i className="bi bi-arrow-repeat "></i></h4>
                <p>30 day <br/> Returnable</p>
                </div>
            </div>
            <hr/>
            <div className='btns'>
                <div className='count-value'>
               <input type='number' placeholder='Phone number' className="form-control my-2 " value={count} onChange={(e) => handleCount(e)} required></input>
               </div>
                <div >
                <button className=" myBtn btn btn-dark" onClick={()=>handleCart(selectedProduct)}>Add to Cart</button>
                </div>
                <div>
                    <button className='btn btn-dark' onClick={goBack}>Go Back</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetail